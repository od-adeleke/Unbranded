import React from "react";
import '../styles/breadcrumb.css'

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-container">
    <nav aria-label="breadcrumb" >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/home">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/product">Product</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/brand">Brand</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/brand/unbranded">Unbranded</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Jackets
        </li>
      </ol>
    </nav>
    </div>
  );
};

export default Breadcrumb;
