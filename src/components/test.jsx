import { useState } from "react";

const Test = () => {
  const [name, setName] = useState("Miguel Renteria");
  const [email, setEmail] = useState("miguelr7@sdgku.edu");
  const [dataVisible, setDataVisible] = useState(false);

  const getData = () => {
    if (dataVisible) {
      return (
        <div>
          <h1>{name}</h1>
          <h4>{email}</h4>
        </div>
      );
    } else {
      return <label>Click on the button to see info</label>;
    }
  };

  const handleClick = () => {
    setDataVisible(true);
  };

  return (
    <div className="test-page">
      {getData()}
      <button onClick={handleClick} className="btn btn-info">
        See my info
      </button>
    </div>
  );
};

export default Test;
