import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import "./stylesheets/NavBar.css"

function App() {
  
  return (
    
      <BrowserRouter>
       
        <NavBar />

        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/category/:category" element={<ItemListContainer/>}/> 
          <Route exact path="/cart" element={<Cart/>}/>
        
        </Routes>
      
      </BrowserRouter>
    
  )
}

export default App
