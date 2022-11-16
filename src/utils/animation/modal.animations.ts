import {MutableRefObject, RefObject, useEffect} from "react";
import {gsap} from "gsap";

interface IUseModalAnimations {
    modalTween: MutableRefObject<GSAPTimeline | null>
    veilRef: RefObject<HTMLDivElement>
    dialogRef: RefObject<HTMLDivElement>
}

const useModalAnimations = (refs: IUseModalAnimations, onCloseModal: () => void) => {

    const keyDownHandler = (e: KeyboardEvent) => {
        if ( e.key === "Escape" ) onCloseModal();
    }

    useEffect(() => {
        refs.modalTween.current = gsap.timeline({
            paused: true
        })
            .fromTo(refs.veilRef.current,
                {duration: 0.2, opacity: 0},
                {duration: 0.2, opacity: 1})
            .fromTo(refs.dialogRef.current,
                {y: 100, duration: 0.2, opacity: 0},
                {y: 0, opacity: 1, duration: 0.2}, )
            .reverse()

        window.addEventListener('keydown', keyDownHandler);

        return () => {
            window.removeEventListener('keydown', keyDownHandler);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useModalAnimations;