import './App.css';
import ProductsContainer from './components/ProductsContainer';
import NavBar from './components/NavBar';
import ModalEdit from './components/ModalEdit';
import ModalDelete from './components/ModalDelete';
import CreateProduct from './components/CreateProduct';
import ModalCreateProduct from './components/ModalCreateProduct';
import { useContext } from 'react';
import { ProductsContext } from './providers/Products';
import { useEffect } from 'react';

function App() {

  const { getProducts } =useContext(ProductsContext)
  useEffect(()=>{
    getProducts()
  },[])
  
  return (
    <div className="App">
      <ModalDelete/>
      <ModalEdit/>
      <NavBar/> 
      <ModalCreateProduct/>
      <CreateProduct/>
      <ProductsContainer/>
    </div>
  );
}

export default App;
