import React from 'react'

export default function Product(props) {
  return (
    <div>
        <h2>{props.name}</h2>
        <h2>price: {props.price}</h2>
        <button onClick={()=>{props.addProduct(props.index)}}>+</button>
    </div>
  )
}
