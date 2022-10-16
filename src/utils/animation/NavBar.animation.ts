import {RefObject, useEffect, useLayoutEffect} from "react";
import gsap from "gsap";
import {ICartIdProduct} from "../../types/product.types";

type TUseNavBarAnimation = {
    navRef: RefObject<HTMLDivElement>
}

type TUseNavCountAnimation = {
    navCountRef: RefObject<HTMLDivElement>
}

export const useNavBarAnimation = (refs: TUseNavBarAnimation) => {
    useLayoutEffect(() => {
        gsap.fromTo(refs.navRef.current, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1,
            stagger: 0.2
        });
    },[]);
}

export const useNavCountAnimation = (refs: TUseNavCountAnimation, array: ICartIdProduct[]) => {
    useEffect(() => {
        gsap.fromTo(refs.navCountRef.current, {
            scale: 1.2
        }, {
            scale: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: 'bounce.in'
        });
    },[array]);
}