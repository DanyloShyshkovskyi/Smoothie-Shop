import gsap from "gsap";
import {RefObject, useEffect} from 'react';

type TUseUserDetailsAnimation = {
    imageRef: RefObject<HTMLLabelElement>
    textRef: RefObject<HTMLDivElement>
    buttonRef: RefObject<HTMLDivElement>
}

const useUserDetailsAnimation = (refs: TUseUserDetailsAnimation, deps: boolean) => {
    useEffect(() => {
            if (!(refs.imageRef.current || refs.textRef.current || refs.buttonRef.current)) return
            gsap.fromTo(refs.imageRef.current, {
                x: -100,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 0.75,
                // ease: 'bounce.in'
            });
            gsap.fromTo(refs.textRef.current, {
                x: 100,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 0.75,
                // ease: 'bounce.in'
            });
            gsap.fromTo(refs.buttonRef.current, {
                x: 100,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 1,
                // ease: 'bounce.in'
            });
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [deps])
};

export default useUserDetailsAnimation;