import ItemList from './ItemList'
import {useEffect, useState} from 'react'
import {collection, getDocs, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import Loading from './Loading'


const ItemListContainer = () => {
  
 
    
     const {category} = useParams()
  
      const [products, setProducts] = useState([])
  
      const [loading, setLoading] = useState(true)
     
      useEffect(() =>{
        
        
  
          const db = getFirestore()

          const itemsCollection = collection(db, 'products' ) 

          getDocs(itemsCollection).then((snapshot)=>{ 
          
            const docs = snapshot.docs.map((doc)=> 
            ({
              ...doc.data(), id:doc.id
              
            })
            )
            setProducts(docs)
            
            setLoading(false)
            
        })
         .catch (error =>{
              console.log('Hubo un error', error);
         });
              
  
      }, [])

      const filteredProducts=products.filter((product) =>product.category === category)
  
    return (
     <>
        {
          loading ? (
            <Loading />
          ) : (
            category ? <ItemList products={filteredProducts} /> : <ItemList products={products} />
          )
        }
      </>
    );
  }

  export default ItemListContainer;
