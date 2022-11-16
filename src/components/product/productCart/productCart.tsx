import {
    ProductCartImage,
    ProductCartName,
    ProductCartPrice,
    ProductCartView,
    ProductCountButton,
    ProductCountContainer,
    ProductCounter
} from "./productCart.style";
import {ICartProduct} from "@customTypes/product.types";
import {useActions} from "@store/useActions";
import {useRef} from "react";
import {onMinusClick} from "./productCart.utils";

interface IProductCartComponent {
    product: ICartProduct
}

export const ProductCart = ({product}: IProductCartComponent) => {
    //Actions
    const {addToCart, removeFromCart} = useActions()

    // Refs
    const productCartRef = useRef<HTMLDivElement>(null)

    const onRemove = () => onMinusClick(productCartRef, product, ()=>removeFromCart(product.id))

    return (
        <ProductCartView ref={productCartRef}>
            <ProductCartImage src={product.src}/>
            <ProductCartName>{product.name}</ProductCartName>
            <ProductCountContainer>
                <ProductCountButton
                    plus
                    onClick={() => addToCart(product.id)}
                >
                    +
                </ProductCountButton>
                <ProductCounter>{product.count}</ProductCounter>
                <ProductCountButton
                    minus
                    onClick={onRemove}
                >
                    -
                </ProductCountButton>
                <ProductCartPrice>${product.price * product.count}</ProductCartPrice>
            </ProductCountContainer>
        </ProductCartView>
    )
}