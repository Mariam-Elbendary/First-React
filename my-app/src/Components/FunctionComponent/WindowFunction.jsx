import React, { useEffect, useState } from "react";

function WindowFunction() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
  <div>
<h2>window width = {size} </h2>
  </div>)
}
export default WindowFunction;
