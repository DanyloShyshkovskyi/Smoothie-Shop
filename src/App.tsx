import {ProductContainer} from '@components/containers';
import {NavBar} from "@components/layout";
import Modal from "@components/modal/modal";
import {AppStyle} from "@helpers/style.helpers";
import {useTypedSelector} from "@store/useTypedSelector";
import React from 'react';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const {isOpen} = useTypedSelector(state => state.modal)

    return (
        <AppStyle {...{isOpen}}>
            <NavBar/>
            <ProductContainer/>
            <Modal/>
            <ToastContainer/>
        </AppStyle>
    );
}

export default App;
