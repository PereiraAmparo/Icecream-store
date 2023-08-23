import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex, Box, Spacer
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <h1 className='titulo'> AMPARO'S ICE-CREAM STORE</h1>
      <Flex>
        <Box p='4'>
        <img className='brand' src='/src/assets/brand.ico.png' alt='imagen de helado'></img>
        </Box>
        <Spacer />
        <Box className='button1' p='4' >
          <Menu>
              <MenuButton >
                Nuestros Helados
              </MenuButton>
              <MenuList>
                <MenuItem>1/4 litro</MenuItem>
                <MenuItem>1/2 litro</MenuItem>
                <MenuItem>1 litro</MenuItem>
              </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box className='carrito' p='4'>
          <CartWidget />
        </Box>
      </Flex>
     
    </div>
  )
}

export default NavBar