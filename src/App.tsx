import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsContainer from './components/ProductsContainer';
import NavBar from './components/NavBar';
import ModalEdit from './components/ModalEdit';
import ModalDelete from './components/ModalDelete';
import CreateProduct from './components/CreateProduct';
import ModalCreateProduct from './components/ModalCreateProduct';

function App() {

  
  return (
    <div className="App">
      <NavBar/> 
      <ModalCreateProduct/>
      <CreateProduct/>
      <ModalDelete/>
      <ModalEdit/>
      <ProductsContainer/>
    </div>
  );
}

export default App;
