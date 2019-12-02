import React, { Component } from "react";
import Product from "./components/product/Product";
import "./App.css";
const data = require("./products.json");

console.log(data);

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <h1>Great Bags Bro!</h1>
        </nav>
        <div className="productContainer">
          {data.map(product => {
            console.log();
            return <Product product={product} />;
          })}
        </div>
      </div>
    );
  }
}
export default App;
