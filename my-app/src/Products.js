import ShopCart from "./ShopCart";
import { products } from "./ProductData";
// import "./Style.css";

function Products() {
  return (
    <div>
      {" "}
      {products.map((value) => (
        <div className="parent">
          <div id="cont" key={value.id}>
            <img src={value.img}></img>
            <h3>{value.name}</h3>
            <h4>{value.price}</h4>
            <h5>{value.description}</h5>
            <h4>{value.category}</h4>
            <ShopCart />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
