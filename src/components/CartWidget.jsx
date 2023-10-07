import { Box, Flex} from '@chakra-ui/react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
const CartWidget = ({quantity}) => {

const { totalQuantity } = useContext(CartContext);
quantity = totalQuantity;

  return (
    <div>
        <Flex className='cart-widget'>
            <Box>
                <img src='/src/assets/ice-cream-cart.png' alt='carrito de compras'></img>
            </Box>
            <Box className='counter'>
              
                { quantity }
                </Box>
        </Flex>
    </div>
  )
}

export default CartWidget