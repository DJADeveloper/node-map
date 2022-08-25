import "./App.css";
import { NodeProvider } from "./components/Context/NodeRepository";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/View/Home";

function App() {
  return (
    <>
      <NodeProvider>
        <Navbar />
        <Home />
      </NodeProvider>
    </>
  );
}

export default App;
