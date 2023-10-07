import '../stylesheets/Form.css';         
import {Center, Image } from '@chakra-ui/react';

const CartItem = ({product, cantidad}) => { 
  return (
    <>
      <div className="form-container">
          <h3>{product.title}</h3>
          <Center>
            <Image src= {product.image}
            maxW={{ base: '50%', sm: '200px' }}
            />
          </Center>
          <h4>Cantidad:{cantidad} Precio: ${product.price} el litro Subtotal:${product.price * cantidad}</h4>
      </div>
    </>
  )
}

export default CartItem