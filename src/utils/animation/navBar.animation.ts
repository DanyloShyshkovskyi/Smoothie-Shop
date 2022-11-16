import {RefObject, useEffect, useLayoutEffect} from "react";
import gsap from "gsap";
import {ICartIdProduct} from "@customTypes/product.types";

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
}

export const useNavCountAnimation = (refs: TUseNavCountAnimation, array: ICartIdProduct[]) => {
    useEffect(() => {
        if (array.length === 0) return
        gsap.fromTo(refs.navCountRef.current, {
            scale: 1.2
        }, {
            scale: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: 'bounce.in'
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[array]);
}