import React, { useState } from "react";

function Item({ name, category }) {
  const [isOn, setIsOn] = useState(false);
  
  function handleCartEvent() {
    setIsOn((isOn) => !isOn )
  }

  const cartClass = isOn ? 'in-cart' : ''

  return (
    <li className={ cartClass }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={ handleCartEvent }>{ isOn ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
