import {RefObject} from "react";
import {gsap} from "gsap";
import {ICartIdProduct} from "@customTypes/product.types";

export const removeWithAnimation = (productCartRef: RefObject<HTMLDivElement>) =>
    gsap.to(productCartRef.current,
    {
        x: -20,
        opacity: 0,
        duration: 0.2,
        autoAlpha: 0,
    }
)

export const onMinusClick = (ref: RefObject<HTMLDivElement>, product: ICartIdProduct, removeFromCart: () => void) => {
    if (product.count !== 1) {
        removeFromCart()
        return
    }

    gsap.delayedCall(removeWithAnimation(ref).duration(), () => removeFromCart());
}