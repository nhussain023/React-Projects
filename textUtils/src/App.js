import "./App.css";
import Navbar from "./components/Navbar";
import Textutils from "./components/Textutils";
// import About from "./components/About";
 import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(32,42,68)'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar mode = {mode} toggleMode = {toggleMode}/>
        {/* <Routes> */}
          {/* <Route exact path="/about" element={ */}
          {/* <About/> */}
           {/* } /> */}
          {/* <Route exact path="/" element={ */}
          <Textutils mode = {mode} />
          {/* } /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
