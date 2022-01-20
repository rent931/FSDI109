import "./product.css";
import { useState, useContext } from "react";
import QuantityPicker from "./quantityPicker";
import storeContext from "../context/storeContext";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const add2cart = useContext(storeContext).addProductToCart;
  const handleQuantityChange = (val) => {
    setQuantity(val);
  };

  const getTotal = () => {
    let total = quantity * props.info.price;

    return total.toFixed(2);
  };

  const handleAdd = () => {
    let prod = {
      ...props.info,
      quantity: quantity,
    };

    add2cart(prod);
  };

  return (
    <div className="product">
      <label className="prod-category">{props.info.category}</label>
      <img id="img" src={"/images/" + props.info.image} alt="product"></img>
      <h2>{props.info.title}</h2>

      <div>
        <label className="price">${props.info.price.toFixed(2)} </label>
        <label className="total">${getTotal()} </label>
      </div>

      <div>
        <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
        <button onClick={handleAdd} className="btn-add btn btn-sm btn-success">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
