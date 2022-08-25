import React, { createContext, useState } from "react";

export const NodeContext = createContext("");

export const NodeProvider = ({ children }) => {
  const [nodeList, setNodeList] = useState([]);

  const repository = {
    _nextId: () => {
      const data = window.localStorage.getItem("data");
      if (!data) {
        return 1;
      }
      const list = JSON.parse(data);
      console.log(data);
      const maxId = Math.max(...list.map((x) => x.id));
      return maxId + 1;
    },
    add: (item) => {
      item.id = repository._nextId();
      item.rootId = item.rootId || item.id;
      const data = window.localStorage.getItem("data");
      console.log(data);
      const list = data ? JSON.parse(data) : [];

      list.push(item);
      console.log(list);
      setNodeList([...nodeList, list]);
      console.log(nodeList);
      window.localStorage.setItem("data", JSON.stringify(list));
      return item;
    },
    delete: (id) => {
      const data = window.localStorage.getItem("data");
      const list = JSON.parse(data);
      repository._setDeleted(id, list);
      for (let i = 0; i < list.length; ) {
        if (list[i].deleted) {
          list.splice(i, 1);
        } else {
          i++;
        }
      }
      window.localStorage.setItem("data", JSON.stringify(list));
    },

    _setDeleted: (id, list) => {
      list.forEach((x) => {
        if (x.id === id) {
          x.deleted = true;
        }
        if (x.parentId === id) {
          repository._setDeleted(x.id, list);
        }
      });
    },
    update: (id, item) => {
      const data = window.localStorage.getItem("data");
      const list = JSON.parse(data);
      const currentItem = list.find((x) => x.id === id);
      Object.entries(item).forEach(([key, value]) => {
        currentItem[key] = value;
      });
      window.localStorage.setItem("data", JSON.stringify(list));
      return item;
    },
    // determines whether to use update or save method for item
    save: (item) => {
      if (item.id) {
        return repository.update(item.id, item);
      }

      return repository.add(item);
    },
    getList: (filter) => {
      const [key, value] = Object.entries(filter)[0];
      const data = window.localStorage.getItem("data");
      if (!data) {
        return [];
      }
      console.log(data);
      const list = JSON.parse(data);
      console.log(list);
      setNodeList(list);
      const result = list.filter((x) => x[key] === value);
      return result;
    },
    getItem: (id) => {
      // saving data is local storage
      const data = window.localStorage.getItem("data");
      if (!data) {
        return null;
      }
      const list = JSON.parse(data);
      return list.find((x) => x.id === id);
    },
  };
  return (
    <NodeContext.Provider value={{ repository, nodeList, setNodeList }}>
      {children}
    </NodeContext.Provider>
  );
};
