import {ProductCart} from "../../../product/productCart/productCart";
import React, {useRef} from "react";
import {useTypedSelector} from "../../../../store/useTypedSelector";
import {NoContent} from "../../../product/productCart/productCart.style";
import {useCartContainerAnimation} from "../../../../utils/animation/cartContainer.animation";
import {useGetProductsQuery} from "../../../../services/Actions/product.action";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../../../services/firebase/firebase.config";
import {useGetUserDataQuery} from "../../../../services/Actions/auth.action";
import {fromIdArrayToProduct, fromIdToProduct} from "../../../../utils/helpers/array.helpers";
import {ProductListTemplate} from "../../../../utils/helpers/email.helpers";
import {EmailButton} from "./cartContainer.style";
import {BottleLoaderSvg} from "../../../loaders/bottleLoader/bottleLoader.svg";
import {useSendEmailMutation} from "../../../../services/Actions/other.action";
import EmailCommunicate from "../../../communicate/email/email.communicate";
import {useActions} from "../../../../store/useActions";

export const CartContainer = () => {
    // auth response
    const [user] = useAuthState(auth);

    // RTK Query response
    const {data: userData} = useGetUserDataQuery(user?.uid || "", {skip: !user})
    const {data: productData} = useGetProductsQuery(null)

    // RTK Query mutation
    const [sendEmailMutation, {isLoading, isError, isSuccess}] = useSendEmailMutation()

    // Redux state
    const cartData = useTypedSelector(state => state.cart)
    const {isOpen} = useTypedSelector(state => state.modal)

    // Actions
    const {clearCart, openModal} = useActions()

    // Refs
    const productsListRef = useRef<HTMLDivElement>(null)

    //Animations
    useCartContainerAnimation({productsListRef}, isOpen)

    //If statements
    const isItemInTheCart = cartData.length && productData

    const sendEmail = () => {
        if (!userData) return openModal("auth")
        if (!(cartData && productData))
            return console.error("Something missing plz check cartContainer.tsx")
        sendEmailMutation({
            to_name: userData.name,
            reply_to: userData.email,
            message: ProductListTemplate(fromIdArrayToProduct(cartData, productData))
        }).then((response) => "error" in response ? console.log(response.error) : clearCart())
    }

    return (
        isSuccess || isError
            ? <EmailCommunicate {...{isError, isSuccess, email: userData ? userData.email : "noEmail"}} />
            : <>
                {isLoading && <BottleLoaderSvg fullAbsolute/>}
                <h1>{userData ? userData.name : "Client"}'s cart:</h1>
                <hr/>
                <div ref={productsListRef}>
                    {isItemInTheCart
                        ?
                        cartData.map((cartProduct) =>
                            <ProductCart key={cartProduct.id} product={fromIdToProduct(cartProduct, productData)}/>
                        )
                        : <NoContent>No Product in cart</NoContent>
                    }
                </div>
                {isItemInTheCart ? <EmailButton onClick={sendEmail}>Continue Payment</EmailButton> : <></>}
            </>
    )
}