
import ItemDetail from './ItemDetail'
import {useEffect, useState} from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import Loading from './Loading'

const ItemDetailContainer = () => {
  
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

      

      useEffect(() =>{
          const db = getFirestore() 

          const oneItem = doc(db, "products", `${id}`)
          getDoc(oneItem).then((snapshot) =>{
              if(snapshot.exists()){
                  const docs = snapshot.data()
                  setProduct(docs)
              }
              setLoading(false)
          })
          .catch(error =>{
              console.log(error)
              setLoading(false)
          })


      }, []);

      

    return (
      <>

          {
            loading ? (
              <Loading />
            ) : (
              <>
                <ItemDetail product={product} />
              </>
                    )
                  }
                </>
              )
            }
      

     
    


export default ItemDetailContainer