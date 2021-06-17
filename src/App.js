
import './App.css';
import React from "react";
import Hero from "./Components/Hero";
import Business from './Business';
import { PostRequestHooks } from './PostRequestHooks';


function App() {
  return (
    <div className="App">
      {/* <Navbar />
     <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> */}


<Business/>

    </div>
  );
}




export default App;
