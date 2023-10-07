import React from 'react'
import  {useContext } from 'react'
import { Link } from 'react-router-dom'
import Form from './Form'
import '../stylesheets/Form.css';
import CartItem from './CartItem'
import { CartContext } from '../context/ShoppingCartContext'


const Cart = () => {
  const { cart, limpiarCarro, totalQuantity } = useContext(CartContext)
  if(totalQuantity === 0){
    return(
      <div className="form-container">
        <h4 className="form-title">El carrito esta vacio</h4>
        <Link to='/' className="submit-button"> Regresar </Link>
      </div>
    )
  }
  return(
    <div className="form-container">
      { cart.map((product => <CartItem key={product.title} product={product} cantidad={1}/>))}
      <div className='container'>
      <button onClick={() => limpiarCarro()} className="submit-button">Vaciar Carrito</button>
      <Form  cart={cart}/>
      <button></button> 
      <Link to='/' className="submit-button">Regresar </Link>
      </div>
    </div>
  )
}

export default Cart
