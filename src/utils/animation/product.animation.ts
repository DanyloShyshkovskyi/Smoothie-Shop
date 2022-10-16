import {RefObject, useEffect} from "react";
import gsap from "gsap";
import {useTypedSelector} from "../../store/useTypedSelector";
import {IProduct} from "../../types/product.types";

type TUseProductAnimation = {
    titleRef: RefObject<HTMLDivElement>,
    descriptionRef: RefObject<HTMLDivElement>,
    imageRef: RefObject<HTMLImageElement>,
    priceRef: RefObject<HTMLDivElement>
}

type TDependencies = {
    productDetails: IProduct
    disabled: boolean
}

const vibeAnimation = (imageRef: TUseProductAnimation["imageRef"]) =>
    gsap.fromTo(imageRef.current, {
        y: 70,
    }, {
        y: -20,
        opacity: 1,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        duration: 2,
    });

export const useProductAnimation = (
    refs: TUseProductAnimation,
    dep: TDependencies
) => {
    const {isOpen} = useTypedSelector(state => state.mainLoader)
    useEffect(() => {
            if (!dep) return
            if (isOpen) return
            gsap.fromTo(refs.titleRef.current, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1,
                stagger: 0.2
            });
            gsap.fromTo(refs.descriptionRef.current, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1,
                stagger: 0.2
            });
            gsap.fromTo(refs.priceRef.current, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1,
                stagger: 0.2
            });
        },
        [dep.productDetails, isOpen]);

    useEffect(() => {
        if (!dep.productDetails) return
        if (dep.disabled) return
        if (isOpen) return
        gsap.fromTo(refs.imageRef.current, {
            y: -1000,
        }, {
            y: 70,
            opacity: 1,
            ease: 'expo',
            duration: 1,
            onComplete: () => {
                vibeAnimation(refs.imageRef)
            },
            overwrite: true,
        });
    },[dep.productDetails, dep.disabled, isOpen])
}