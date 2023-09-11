import {useEffect,useState} from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
 
  const products =[
    {
      id:1,
      title:"Helado de Chocolate",
      image:"/src/assets/chocolate.jpg",
      ingredients: "Chocolate Suizo, crema de leche , azucar y mucho amor",
      price:800,
      category:"Con Azúcar",
      symbol:"/src/assets/regular.png",

    },
    {
      id:2,
      title:"Helado Crema del Cielo",
      image:"/src/assets/cremaDelCielo.jpg",
      ingredients: "Colorante Artificial, crema de leche , azucar y mucho amor",
      price:800,
      category:"Con Azúcar",
      symbol:"/src/assets/regular.png"

    },
    {
      id:3,
      title:"Helado DulceDeLeche",
      image:"/src/assets/dulceDeLeche.jpg",
      ingredients: "Dulce de leche, crema de leche , azucar y mucho amor",
      price:800,
      category:"Con Azúcar",
      symbol:"/src/assets/regular.png"

    },
    {
      id:4,
      title:"Helado de Frutilla",
      image:"/src/assets/frutilla.jpg",
      ingredients: "Frutillas del huerto, estevia y mucho amor",
      price:800,
      category:"Diet",
      symbol:"/src/assets/diet.png"

    },
    {
      id:5,
      title:"Helado de Limon",
      image:"/src/assets/limon.jpg",
      ingredients: "Limones del huerto,estevia y mucho amor",
      price:800,
      category:"Diet",
      symbol:"/src/assets/diet.png"

    },
    {
      id:6,
      title:"Helado de Frambuesa",
      image:"/src/assets/frambuesa.jpg",
      ingredients: "Frambuesas del huerto, estevia y mucho amor",
      price:800,
      category:"Diet",
      symbol:"/src/assets/diet.png"

    },
    {
      id:7,
      title:"Helado de Oreo",
      image:"/src/assets/oreo.jpg",
      ingredients: "Galletitas Oreo, crema de leche , azucar y mucho amor",
      price:800,
      category:"Con Azúcar",
      symbol:"/src/assets/regular.png"

    },
    {
      id:8,
      title:"Helado de Pistacho*",
      image:"/src/assets/pistacho.jpg",
      ingredients: "Pistacho de Irán, crema de leche , azucar, elaborado en ambiente libre de gluten y mucho amor. APTO PARA CELÍACOS",
      price:850,
      category:"sinGluten",
      symbol:"/src/assets/sinGluten.png"

    },
    {
      id:9,
      title:"Helado de Vainilla*",
      image:"/src/assets/vainilla.jpg",
      ingredients: "Vainilla de Madagascar, crema de leche , azucar, elaborado en ambiente libre de gluten y mucho amor. APTO PARA CELÍACOS",
      price:850,
      category:"sinGluten",
      symbol:"/src/assets/sinGluten.png"

   },
  ]
  const getProducts = new Promise ((resolve, reject)=> {
    if(products.length >0){
      setTimeout(()=> {
        resolve(products)
      }, 2000)
    }else {
      reject(new Error("No hay datos"))
    }
  })
    getProducts
      .then((res)=> {
      })
      .catch((error)=>{
        console.log(error)
      })

  return (
    <>

      <ItemDetail
            products={products}
      />
   
    </> 
  )
}

export default ItemDetailContainer