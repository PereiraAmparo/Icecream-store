import { useState } from "react"
import { Button, Stack, Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const ItemCount = ({ onAdd }) => {

    const [contador, setContador] = useState(1)

  return (
    <>
        
        <Stack direction={['column','row']} spacing= '24px'>
            <Box w= '40px' h='40px'>
                <Button size='xs' onClick={() =>{contador > 0 && setContador (contador -1)}} >
                    -
                </Button>
            </Box>
            <Box w='40px' h='40px'>
                <p>{contador}</p>
            </Box>
            <Box w='40px' h='40px'>
                <Button size='xs'onClick={()=>{contador < 10 && setContador(contador + 1)}}>
                    +
                </Button>
            </Box>
            <Box w='40px' h='40px'>
                <Button size='xs'onClick={()=> setContador(0)}>
                    Reset
                </Button>
            </Box>
           
            <Box >
                <Link to='/Cart'>
                    <Button variant='solid' colorScheme='pink' onClick={() => onAdd(contador)}>
                        Agregar {contador} al Carrito
                    </Button>
                    </Link>
                </Box>
        </Stack>
    </>
  )
}

export default ItemCount