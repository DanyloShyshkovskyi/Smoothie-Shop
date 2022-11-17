import {gsap} from "gsap";
import {RefObject, useEffect} from "react";

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
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [dep])
}