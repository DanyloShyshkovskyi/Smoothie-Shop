import {RefObject, useEffect, useRef} from "react";
import {gsap} from "gsap";

type TUseAuthContainerAnimation = {
    formSingIn: RefObject<HTMLDivElement>
    formSignUp: RefObject<HTMLDivElement>
    overlay: RefObject<HTMLDivElement>
    overlayContainer: RefObject<HTMLDivElement>
    overlayPanelLeft: RefObject<HTMLDivElement>
    overlayPanelRight: RefObject<HTMLDivElement>
}

const animationJSON = {
    formSingIn: {
        from: {x: "0"},
        to: {x: "100%"}
    },
    formSignUp: {
        from: {x: "0", opacity: 0, zIndex: 1},
        to: {x: "100%", opacity: 1, zIndex: 5}
    },
    overlay: {
        from: {x: "0"},
        to: {x: "50%"}
    },
    overlayContainer: {
        from: {x: "0"},
        to: {x: "-100%"}
    },
    overlayPanelLeft: {
        from: {x: "-20%"},
        to: {x: "0"}
    },
    overlayPanelRight: {
        from: {x: "0"},
        to: {x: "20%"}
    }
}


export const useAuthContainerAnimation = (refs: TUseAuthContainerAnimation, isReversed: boolean) => {
    const modalTween = useRef<GSAPTimeline>();
    useEffect(() => {
        modalTween.current = gsap
            .timeline({
                paused: true,
                defaults: {ease: "expo.inOut", duration: 1}
            })
        for (const [key, value] of Object.entries(animationJSON)) {
            modalTween.current.fromTo(
                refs[key as keyof TUseAuthContainerAnimation].current, {...value.to}, {...value.from}, 0).reverse()
        }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    useEffect(() => {
        isReversed ? modalTween.current?.reverse() : modalTween.current?.play()
    },[isReversed])
}