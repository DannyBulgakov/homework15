import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shop from './components/Shop'
import Cart from './components/Cart'

function App() {
  const productsArr = [
    {name: 'foundation', price: 80},
    {name: 'bronzer', price: 65},
    {name: 'lipstick', price: 45},
    {name: 'lipgloss', price: 20},
    {name: 'blush', price: 50},
  ]

  
  const [cart,setCart] = useState([])


  const addProduct =(index)=>{
    setCart([...cart,productsArr[index]])
  }


  return (
    <>
      <div>
        <Shop productsArr={productsArr} addProduct={addProduct}/>
        <Cart cart={cart}/>
        </div>
    </>
  )
}

export default App
