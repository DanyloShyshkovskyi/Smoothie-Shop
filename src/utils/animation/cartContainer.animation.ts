import {RefObject, useEffect} from "react";
import {gsap} from "gsap";

type TUseCartContainerAnimation = {
    productsListRef: RefObject<HTMLDivElement>
}


export const useCartContainerAnimation = (refs: TUseCartContainerAnimation, dep: boolean) => {
    useEffect(() => {
        gsap.fromTo(
            refs.productsListRef.current?.children || refs.productsListRef.current,
            {
                x: -20,
                opacity: 0,
                duration: 1,
            }, {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                overwrite: true,
            })
    }, [dep])
}