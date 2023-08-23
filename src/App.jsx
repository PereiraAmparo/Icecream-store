import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import "./stylesheets/NavBar.css"
function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Amparo's Ice-Cream-Store, haz tu pedido!"} />
    </>
  )
}

export default App
