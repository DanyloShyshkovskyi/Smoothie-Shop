import React from 'react';
import './App.css';
import {NavBar} from "@components/layout";
import Modal from "@components/modal/modal";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useTypedSelector} from "@store/useTypedSelector";
import {AppStyle} from "@helpers/style.helpers";
import { ProductContainer } from '@components/containers';

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
