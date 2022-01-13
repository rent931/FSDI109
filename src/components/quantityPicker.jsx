import { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    console.log("Increase the Value");
    let val = quantity + 1;
    setQuantity(val);
    props.onChange(val);
  };
  const decrement = () => {
    console.log("decrease the value");
    if (quantity > 1) {
      let val = quantity - 1;
      setQuantity(val);
      props.onChange(val);
    }
  };

  return (
    <div className="quantityPicker">
      <button className="btn btn-sm btn-primary" onClick={decrement}>
        -
      </button>
      <label> {quantity} </label>
      <button className="btn btn-sm btn-primary" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default QuantityPicker;
