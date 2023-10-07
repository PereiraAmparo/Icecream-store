import { useContext, useState } from 'react'
import { Card, Text, CardBody, CardFooter, Heading, Center, Stack, Image } from '@chakra-ui/react';
import ItemCount from "./ItemCount";
import { CartContext } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom'





const ItemDetail = ({ product }) => {
    
  const [quantity, setQuantity] = useState(0);

  const { addItem } = useContext(CartContext);

   
  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} ${product.title} al carrito`);	
    setQuantity(parseInt(quantity));
    addItem(product)
  }
  
  



    return (
        <>
            <Center p='2rem'> 
                <Card display="flex" alignItems="center" justifyContent="space-between"
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src= {product.image}
                    alt='Helado artesanal'
                />

                <Stack>
                    <CardBody>
                    <Heading size='md'>{product.title}</Heading>
                    
                    <Text py='2'>
                        <strong>Ingredientes:</strong> {product.ingredients}
                    </Text>
                    <Text>
                        <strong>Tipo:</strong> {product.category}</Text>
                    <Text><strong>$</strong>{product.price} <strong>el litro.</strong></Text> 
                    </CardBody>
                    <CardFooter>
                        {
                            quantity > 0 ? (

                               <Link to= '/cart' className='Option'></Link>
                            
                            ): (
                                <ItemCount initial={1} onAdd={handleOnAdd} />
                            )
      
                        
                        }
                    </CardFooter>
                </Stack>
                </Card>
            </Center>
        </>
    )
}


export default ItemDetail