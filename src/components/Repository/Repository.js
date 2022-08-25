//NOT USING¡¡¡¡¡¡¡

// import { useState } from "react";

// const repository = {
//   _nextId: () => {
//     const data = window.localStorage.getItem("data");
//     if (!data) {
//       return 1;
//     }
//     const list = JSON.parse(data);
//     console.log(list);
//     const maxId = Math.max(...list((x) => x.id));
//     console.log(maxId);
//     return maxId + 1;
//   },
//   add: (item) => {
//     item.id = repository._nextId();
//     item.rootId = item.rootId || item.id;
//     const data = window.localStorage.getItem("data");
//     console.log(data);
//     const list = data ? JSON.parse(data) : [];
//     console.log(list);

//     list.push(item);
//     window.localStorage.setItem(data, JSON.stringify(list));
//     return item;
//   },
//   delete: (id) => {
//     const data = window.localStorage().getItem("data");
//     const list = JSON.parse(data);
//     repository._setDeleted(id, list);
//     for (let i = 0; i < list.length; ) {
//       if (list[i].deleted) {
//         list.splice(i, 1);
//       } else {
//         i++;
//       }
//     }
//   },

//   _setDeleted: (id, list) => {
//     list.forEach((x) => {
//       if (x.id === id) {
//         x.deleted = true;
//       }
//       if (x.parentId === id) {
//         repository._setDeleted(x.id, list);
//       }
//     });
//   },
//   update: (id, item) => {
//     const data = window.localStorage.getItem("data");
//     const list = JSON.parse(data);
//     const currentItem = list.find((x) => x.id === id);
//     Object.entries(item).forEach(([key, value]) => {
//       currentItem[key] = value;
//     });
//     window.localStorage.setItem("data", JSON.stringify(list));
//     return item;
//   },
//   // determines whether to use update or save method for item
//   save: (item) => {
//     if (item.id) {
//       console.log("updating...");
//       return repository.update(item.id, item);
//     }
//     console.log("Adding...");
//     return repository.add(item);
//   },
//   getList: (filter) => {
//     const [key, value] = Object.entries(filter)[0];
//     const data = window.localStorage.getItem("data");
//     if (!data) {
//       return [];
//     }
//     const list = JSON.parse(data);
//     console.log(list);
//     const result = list.filter((x) => x[key] === value);
//     console.log(result);
//     return result;
//   },
//   getItem: (id) => {
//     // saving data is local storage
//     const data = window.localStorage.getItem("data");
//     if (!data) {
//       return null;
//     }
//     const list = JSON.parse(data);
//     return list.find((x) => x.id === id);
//   },
// };

// export default repository;
