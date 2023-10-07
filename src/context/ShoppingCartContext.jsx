import {useState, createContext} from 'react'

export const CartContext = createContext({cart:[]})



  const ShoppingCartProvider = ({children}) => {

    const[ cart, setCart] = useState([])
    
    
  const addItem = (productToAdd) => {
     if(!isInCart(productToAdd.title)) {
        setCart(prev =>[...prev, productToAdd])
    }
    }

    const isInCart = (title) => {
      return cart.some((product) => product.title === title);
    }

    const limpiarCarro = () => {
      setCart([]);
    }
      

   const getTotalQuantity = () => {
    let acumulador= 0
    cart.forEach(() => {
      acumulador ++
    })
    return acumulador
   } 

   const totalQuantity = getTotalQuantity()

  return (
    <CartContext.Provider value={{ cart, addItem, totalQuantity, limpiarCarro}}>

        {children}
        
    </CartContext.Provider>
  )

}
  export default ShoppingCartProvider