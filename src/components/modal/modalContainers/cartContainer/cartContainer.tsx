import {ProductCart} from "../../../product/productCart/productCart";
import React, {useRef} from "react";
import {useTypedSelector} from "../../../../store/useTypedSelector";
import {NoContent} from "../../../product/productCart/productCart.style";
import {useCartContainerAnimation} from "../../../../utils/animation/cartContainer.animation";
import {useGetProductsQuery} from "../../../../services/Actions/product.action";
import {ICartProduct, IProduct} from "../../../../types/product.types";
import {defaultProduct} from "../../../../utils/constants/product.constants";

export const CartContainer = () => {
    const cartData = useTypedSelector(state => state.cart)
    const {isOpen} = useTypedSelector(state => state.modal)
    const {data: productData} = useGetProductsQuery(null)
    const productsListRef = useRef<HTMLDivElement>(null)
    useCartContainerAnimation({productsListRef}, isOpen)

    return (
        <div ref={productsListRef}>
            {cartData.length && productData
                ?
                cartData.map((cartProduct) => {
                    const product: IProduct = productData.find(x => x.id === cartProduct.id) || defaultProduct;
                    const productWithCount: ICartProduct = {...product, count: cartProduct.count}

                    return <ProductCart key={product.id} product={productWithCount}/>
                }

                )
                : <NoContent>No Product in cart</NoContent>
            }
        </div>
    )
}