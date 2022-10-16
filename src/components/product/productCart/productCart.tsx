import {
    ProductCartImage,
    ProductCartName, ProductCartPrice,
    ProductCartView,
    ProductCountButton,
    ProductCountContainer,
    ProductCounter
} from "./productCart.style";
import {ICartIdProduct, ICartProduct} from "../../../types/product.types";
import {useActions} from "../../../store/useActions";
import {RefObject, useRef} from "react";
import {gsap} from "gsap";
import {removeWithAnimation} from "./productCart.utils";

interface IProductCartComponent {
    product: ICartProduct
}

export const ProductCart = ({product}: IProductCartComponent) => {
    const {addToCart, removeFromCart} = useActions()

    const onMinusClick = (ref: RefObject<HTMLDivElement>, product: ICartIdProduct) => {
        if (product.count !== 1) {
            removeFromCart(product.id)
            return
        }

        gsap.delayedCall(removeWithAnimation(ref).duration(), ()=>removeFromCart(product.id));
    }

    const productCartRef = useRef<HTMLDivElement>(null)

    return (
        <ProductCartView ref={productCartRef}>
            <ProductCartImage src={product.src}/>
            <ProductCartName>{product.name}</ProductCartName>
            <ProductCountContainer>
                <ProductCountButton
                    plus
                    onClick={()=>addToCart(product.id)}
                >
                    +
                </ProductCountButton>
                <ProductCounter>{product.count}</ProductCounter>
                <ProductCountButton
                    minus
                    onClick={()=>onMinusClick(productCartRef, product)}
                >
                    -
                </ProductCountButton>
                <ProductCartPrice>${product.price * product.count}</ProductCartPrice>
            </ProductCountContainer>
        </ProductCartView>
    )
}