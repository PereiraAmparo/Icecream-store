import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex, Box, Spacer
  } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'


const NavBar = () => {

  const {totalQuantity} = useContext(CartContext)

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
              <Link to={`/category/${"Con Azúcar"}`}>
                  <MenuItem>
                      Con Azúcar
                    </MenuItem>
                </Link>
                <Link to={`/category/${"Diet"}`}>
                  <MenuItem>
                    Diet
                  </MenuItem>
                </Link>
                <Link to={`/category/${"sinGluten"}`}>
                  <MenuItem>
                    Sin Gluten
                  </MenuItem>
                </Link>
              </MenuList>
          </Menu>
        </Box>
        <Spacer />
        
          <Box className='carrito' p='4'>
            <Link to={"/cart"}>
              <CartWidget quantity={totalQuantity} />
            </Link>
          </Box>
        
      </Flex>
     
    </div>
  )
}

export default NavBar