import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductsContainer from './components/ProductsContainer';
import NavBar from './components/NavBar';
import ModalEdit from './components/ModalEdit';
import { useContext } from 'react';
import { ModalEditContext } from './providers/ModalEdit';
import ModalDelete from './components/ModalDelete';

function App() {

  
  return (
    <div className="App">
      <NavBar/> 
      <ModalDelete/>
      <ModalEdit/>
      <ProductsContainer/>
    </div>
  );
}

export default App;
