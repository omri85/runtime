import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChooseSource from "./pages/CareerFramework/Wizard/ChooseSource";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import Content from "./pages/Content";

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'></header> */}
      <Sidebar />
      <div className='content'>
        <Content />
      </div>
    </div>
  );
}

export default App;
