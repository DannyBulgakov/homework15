import React from 'react'
import Product from './Product'


export default function Shop(props) {
  return (
    <div>
        <h1>product:</h1>
        {props.productsArr.map((val,index)=>{
            return <Product name={val.name} price={val.price} index={index} addProduct={props.addProduct}/>
        })}
    </div>
  )
}
