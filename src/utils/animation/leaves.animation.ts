import {RefObject, useEffect} from "react";
import {gsap} from "gsap";

interface IUseLeavesAnimation {
    sceneRef: RefObject<HTMLDivElement>
}

const useLeavesAnimation = (refs: IUseLeavesAnimation, dep: boolean) => {
    useEffect(() => {
        if (dep) return
        gsap.fromTo(refs.sceneRef.current,
            {
                y: -1000,
                duration: 0.5
            },
            {
                y: 0,
                duration: 0.5,
                ease: 'expo',
                delay: 0.5
            }
        )
    }, [dep])
};

export default useLeavesAnimation;