import { Card, Image, Stack, Text, CardBody, Button, ButtonGroup, CardFooter, Center, Flex} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ product}) => {
   
    return(
        <div>
            <Flex   align="center" justify="center">    
                <Center align="center" justify="center" p='2rem'>
                    <Card  maxW='sm'>
                        <CardBody>
                            <Text><strong>{product.title}</strong></Text>
                            <br/>
                            <Image
                            src={product.image}
                            alt='Helado artesanal'
                            borderRadius='lg' />
                            
                            <Stack align="center" justify="center" mt='6' spacing='3'>
                                
                               
                                <Text color='blue.600' fontSize='2xl'>
                                $ {product.price} el litro.
                                </Text>
                                <Image src={product.symbol} alt="Ícono" boxSize="24px" />
                            </Stack>
                        </CardBody>
                        <CardFooter>
                            <ButtonGroup spacing='2'>
                                    <Button variant='solid' colorScheme='pink'>
                                        <Link to={`/item/${product.id}`}>
                                            Detalle
                                        </Link>   
                                    </Button>
                            </ButtonGroup>
                        </CardFooter>
                     </Card>
                </Center>
            </Flex>    
        </div>
    )
  
};

export default Item