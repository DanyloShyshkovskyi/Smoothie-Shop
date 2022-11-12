import React from 'react';
import './App.css';
import {NavBar} from "./components/layout/navigation/NavBar/NavBar";
import ProductContainer from "./components/layout/productContainer/productContainer";
import Modal from "./components/modal/modal";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useTypedSelector} from "./store/useTypedSelector";
import {AppStyle} from "./utils/helpers/style.helpers";

function App() {
    const {isOpen} = useTypedSelector(state => state.modal)

    return (
        <AppStyle {...{isOpen}}>
            <NavBar/>
            <ProductContainer/>
            <Modal />
            <ToastContainer />
        </AppStyle>
    );
}

export default App;
