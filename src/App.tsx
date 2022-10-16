import React from 'react';
import './App.css';
import {NavBar} from "./components/layout/navigation/NavBar/NavBar";
import ProductContainer from "./components/layout/productContainer/productContainer";
import Modal from "./components/modal/modal";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <ProductContainer/>
            <Modal />
        </div>
    );
}

export default App;
