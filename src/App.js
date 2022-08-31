import "./App.css";
import { NodeProvider } from "./components/Context/NodeRepository";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/View/Home";
import { Routes, Route } from "react-router-dom";

import NodeView from "./components/View/NodeView";

function App() {
  return (
    <>
      <NodeProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Node/:id" element={<NodeView />} />
        </Routes>
      </NodeProvider>
    </>
  );
}

export default App;
