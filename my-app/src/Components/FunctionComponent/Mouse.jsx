import React, { useEffect, useState } from "react";
function Mouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const [click, setClick] = useState(0);
  useEffect(() => {
    console.log("calling of useEffect");
    window.addEventListener("mousemove", handlePosition);

    return () => {
      window.removeEventListener("mousemove", handlePosition);
    };
  }, []);

  const handlePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  const handleClick = () => {
    setClick((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Position of X is {x}</h2>
      <h2>Position of Y is {y} </h2>
      <button onClick={handleClick}>Click Me</button>

      <p> Button clicked {click}</p>
    </div>
  );
}
export default Mouse;
