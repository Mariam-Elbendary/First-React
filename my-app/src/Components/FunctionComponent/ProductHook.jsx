import React, { useState } from "react";
import { products } from "../../ProductData";
import ShopCartHook from "./ShopCartHook";

function ProductHook() {
  const [product, setProduct] = useState(products);

  const addProduct = () => {
    setProduct([
      ...product,
      {
        id: 11,
        img: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        name: "State of mind watch",
        price: 100,
        description:
          "The state of mind is lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
        category: "Watches",
      },
    ]);
  };

  return (
    <div>
      {" "}
      {product.map((value) => (
        <div className="parent">
          <div id="cont" key={value.id}>
            <img src={value.img}></img>
            <h3>{value.name}</h3>
            <h4>{value.price}</h4>
            <h5>{value.description}</h5>
            <h4>{value.category}</h4>
            <ShopCartHook />
          </div>
        </div>
      ))}
      <button onClick={addProduct} id="add">Add New Product</button>
    </div>
  );
}
export default ProductHook;
