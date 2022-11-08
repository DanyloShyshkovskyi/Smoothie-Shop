import React from 'react';
import './App.css';
import {NavBar} from "./components/layout/navigation/NavBar/NavBar";
import ProductContainer from "./components/layout/productContainer/productContainer";
import Modal from "./components/modal/modal";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <ProductContainer/>
            <Modal />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
}

export default App;
