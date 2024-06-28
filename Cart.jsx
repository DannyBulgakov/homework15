import React from 'react'

export default function Cart(props) {

const endPrice=()=>{
    let sum=0;
    props.cart.forEach((val)=>{
        sum+= val.price
    })
    return sum
}

  return (
    <div>
        <h1>Cart:</h1>
        <ol>
            {props.cart.map((val)=>{
                return <li>{val.name} {val.price}</li>
            })}
        </ol>
        <h3>Total price: {endPrice()}</h3>
    </div>
  )
}
