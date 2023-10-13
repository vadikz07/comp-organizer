import React from "react";

// Props de item ;
// name, img , notes, qty

function Item(props) {
  return (
    <div className="item-container">
      <div className="item-name">{props.name}</div>
      <div className="item-img">{props.img}</div>
      <div className="item-notes">{props.notes}</div>
      <div className="item-qty">{props.qty}</div>
    </div>
  );
}

export default Item;
