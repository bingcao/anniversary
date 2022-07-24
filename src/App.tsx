import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <nav>
      <div>
        <Link to="/product-list">Product list</Link>
      </div>
      <div>
        <Link to="/product-form">Add new product</Link>
      </div>
    </nav>
  );
}

export default App;
