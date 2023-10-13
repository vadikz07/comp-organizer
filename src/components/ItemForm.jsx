import React from 'react'

function ItemForm() {
  return (
    <div className='item-form-container'>
        <input type='text' id='form-name'></input>
        <input type='text' id='form-img'></input>
        <input type='text' id='form-notes'></input>
        <input type='text' id='form-qty'></input>
    </div>
  )
}

export default ItemForm