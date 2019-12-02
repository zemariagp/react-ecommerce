import React, { Component } from "react";
import "./Product.scss";

export class Product extends Component {
  render() {
    let productName = this.props.product.name;
    let price = this.props.product.price.value;
    let imgSrc = this.props.product.image;
    let currency = this.props.product.price.currency;

    return (
      <div className="product-card">
        <img src={imgSrc} alt="" />
        <h4>{productName}</h4>
        <h5>
          {(price / 100).toFixed(2)} {currency}
        </h5>
      </div>
    );
  }
}

export default Product;
