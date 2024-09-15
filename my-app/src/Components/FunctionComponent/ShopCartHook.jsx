import React, { useState } from "react";
import "./Style.css";

function ShopCartHook() {
  const initial = 1;
  const [count, setCount] = useState(initial);

  const Decrement = () => {
    if (count > 1) {
      return setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="container">
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <span> {count} </span>
      <button onClick={Decrement}>-</button>
    </div>
  );
}
export default ShopCartHook;
