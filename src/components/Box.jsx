import React from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";

//Props de box
// name, num,

function Box(props) {
  return (
    <div className="box-container">
      <div className="box-header">
        <div className="box-header-left">
          <div className="box-num">1</div>
          <div className="box-title">Titulo</div>
        </div>
        <div className="box-header-right">
          <div className="box-controls">
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
      <div className="box-body-container">
        <Item name="item1" img="noimg" notes="notas item 1" qty="50"/>
        <Item name="item2" img="noimg2" notes="notas item 2" qty="25"/>
      </div>
      <div className="box-footer-container">
        <ItemForm />
      </div>
    </div>
  );
}

export default Box;
