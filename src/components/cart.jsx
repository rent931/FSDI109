import "./cart.css";

import { useContext } from "react";
import storeContext from "../context/storeContext";
import CartProd from "./cartProd";

const Cart = () => {
  const context = useContext(storeContext);

  const getTotal = () => {
    let total = 0;
    for (let i = 0; i < context.cart.length; i++) {
      let prod = context.cart[i];
      total += prod.quantity * prod.price;
    }

    return total.toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>These are the items in your cart</h1>
      <h3> Currently there are {context.cart.length} items in your Cart</h3>

      <div className="cart-container">
        <div className="products">
          {context.cart.map((p) => (
            <CartProd key={p._id} data={p}></CartProd>
          ))}
        </div>

        <div className="side-menu">
          <h5>Ready To Pay?</h5>

          <h6>${getTotal()}</h6>

          <hr></hr>

          <button className="btn btn-lg btn-primary">Pay now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
