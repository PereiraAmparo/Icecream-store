import Item from './Item'
import { Flex } from "@chakra-ui/react"




const ItemList = ({products}) => {

    return (
       <Flex flexWrap='wrap' justifyContent='space-around' alignItems='center' gap={4}>
            {
                products.map((p) => {
                    return (
                        <Item key={p.id} product = {p} />
                    )
                })
            }
        </Flex>
    )
}

export default ItemList