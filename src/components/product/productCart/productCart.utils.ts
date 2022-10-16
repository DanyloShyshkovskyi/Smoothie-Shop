import {RefObject} from "react";
import {gsap} from "gsap";

export const removeWithAnimation = (productCartRef: RefObject<HTMLDivElement>) =>
    gsap.to(productCartRef.current,
    {
        x: -20,
        opacity: 0,
        duration: 0.2,
        autoAlpha: 0,
    }
)