import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import LeftSidebar from "./components/Sidebars/LeftSidebar";
import RightSidebar from "./components/Sidebars/RightSidebar";
import NodeCanvas from "./components/Nodes/NodeCanvas/NodeCanvas";

function App() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <LeftSidebar />
        <NodeCanvas />
        <RightSidebar />
      </div>
    </>
  );
}

export default App;
