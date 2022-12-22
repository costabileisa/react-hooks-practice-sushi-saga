import React, { useState, useContext } from "react";
import { MoneyContext } from "../context/Money";

function Sushi({ onPlateClick, sushi }) {
  const { id, name, img_url, price } = sushi;
  const { money, setMoney } = useContext(MoneyContext)

  const [eaten, setEaten] = useState(false)

  function handlePlateClick(event) {
    if (money < price || event.target.nodeName === "DIV") return;
    onPlateClick(event.target)
    setEaten(true)
    setMoney(current => current - price)
  }

  return (
    <div className="sushi" id={id} >
      <div className="plate" onClick={handlePlateClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
