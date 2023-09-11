import React from 'react'
import { Card, Text, CardBody, CardFooter, Heading, CardHeader, Center, Button, Flex, Stack, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ItemCount from "./ItemCount";


const ItemDetail = ({ products }) => {
    const { id } = useParams()


    const filteredProducts = products.filter((product) => product.id == id)

    return (
        <div>
            {filteredProducts.map((p) => {
                return (
                    <div key={p.id}>
                           <Center p='2rem'> 
                                <Card display="flex" alignItems="center" justifyContent="space-between"
                                direction={{ base: 'column', sm: 'row' }}
                                overflow='hidden'
                                variant='outline'
                                >
                                <Image
                                    objectFit='cover'
                                    maxW={{ base: '100%', sm: '200px' }}
                                    src={p.image}
                                    alt='Helado artesanal'
                                />

                                <Stack>
                                    <CardBody>
                                    <Heading size='md'>{p.title}</Heading>
                                    <Button variant='solid' colorScheme='pink'>Comprar</Button>

                                    <Text py='2'>
                                        <strong>Ingredientes:</strong> {p.ingredients}
                                    </Text>
                                    <Text>
                                        <strong>Tipo:</strong> {p.category}</Text>
                                    <Text><strong>$</strong>{p.price} <strong>el litro.</strong></Text> 
                                    </CardBody>
                                    <CardFooter>
                                        <ItemCount />
                                    </CardFooter>
                                </Stack>
                                </Card>
                            </Center>



                       
                    </div>
                )
            })}
        </div>
    )
}

export default ItemDetail