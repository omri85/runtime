import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import Content from "./pages/Content";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <header className='App-header'></header> */}
        <Sidebar />
        <div className='content'>
          <Content />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
