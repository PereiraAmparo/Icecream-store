import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex, Box, Spacer
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <h1 className='titulo'> AMPARO'S ICE-CREAM STORE</h1>
      <Flex>
        <Box p='4'>
          <Link to={"/"}>
            <img className='brand' src='/src/assets/brand.ico.png' alt='imagen de helado'></img>
          </Link>
        </Box>
        <Spacer />
        <Box className='button1' p='4' >
          <Menu>
              <MenuButton >
                Nuestros Helados
              </MenuButton>
              <MenuList>
                  <MenuItem>
                  <Link to={`/category/${"Con Azúcar"}`}>
                      Con Azúcar
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/category/${"Diet"}`}>
                    Diet
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/category/${"sinGluten"}`}>
                    Sin Gluten
                  </Link>
                </MenuItem>
              </MenuList>
          </Menu>
        </Box>
        <Spacer />
        
          <Box className='carrito' p='4'>
            <Link to={"/cart"}>
            <CartWidget />
            </Link>
          </Box>
        
      </Flex>
     
    </div>
  )
}

export default NavBar