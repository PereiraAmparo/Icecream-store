import { Box, Divider, Flex } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
  return (
    <div>
        <Flex className='cart-widget'>
            <Box>
                <img src='/src/assets/ice-cream-cart.png'alt='carrito de compras'></img>
            </Box>
            <Box className='counter'>
                <p >3</p>
            </Box>
        </Flex>
    </div>
  )
}

export default CartWidget