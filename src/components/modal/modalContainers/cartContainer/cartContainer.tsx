import {ProductCart} from "../../../product/productCart/productCart";
import React, {useRef} from "react";
import {useTypedSelector} from "../../../../store/useTypedSelector";
import {NoContent} from "../../../product/productCart/productCart.style";
import {useCartContainerAnimation} from "../../../../utils/animation/cartContainer.animation";
import {useGetProductsQuery} from "../../../../services/Actions/product.action";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../../../services/firebase/firebase.config";
import {useGetUserDataQuery} from "../../../../services/Actions/auth.action";
import emailjs from "@emailjs/browser";
import {fromIdArrayToProduct, fromIdToProduct} from "../../../../utils/helpers/array.helpers";
import {ProductListTemplate} from "../../../../utils/helpers/email.helpers";

//TODO: check this component
export const CartContainer = () => {
    // auth response
    const [user] = useAuthState(auth);

    // RTK Query response
    const {data: userData} = useGetUserDataQuery(user?.uid || "", {skip: !user})
    const {data: productData} = useGetProductsQuery(null)

    // Redux state
    const cartData = useTypedSelector(state => state.cart)
    const {isOpen} = useTypedSelector(state => state.modal)

    // Refs
    const productsListRef = useRef<HTMLDivElement>(null)

    //Animations
    useCartContainerAnimation({productsListRef}, isOpen)

    const templateParams = {
        to_name: userData ? userData.name : "Client",
        reply_to: userData ? userData.email : "testName@gail.com",
        message: cartData && productData && ProductListTemplate(fromIdArrayToProduct(cartData, productData))
    };

    const sendEmail = () => {
        emailjs.send('service_0tyvu3c','template_5hw88ye', templateParams, '4spQlxMQI1DbVuk9O')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <>
            <h1>{userData ? userData.name : "Client" }'s cart:</h1>
            <hr/>
            <div ref={productsListRef}>
                {cartData.length && productData
                    ?
                    cartData.map((cartProduct) =>
                        <ProductCart key={cartProduct.id} product={fromIdToProduct(cartProduct, productData)}/>
                    )
                    : <NoContent>No Product in cart</NoContent>
                }
            </div>
            <button onClick={sendEmail}>send</button>
        </>
    )
}