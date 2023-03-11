import { createContext, useState } from "react";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";




function App() {
  return (
    
      <div className="app">
        <Home />
        <Modal />
        <Sidebar />
      </div>
    
  );
}

export default App;
