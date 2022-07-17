import React from "react";
import {Link, Outlet} from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <nav>
          <Link to="/makeup-form">Makeup Form</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
