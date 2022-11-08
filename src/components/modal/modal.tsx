import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {useTypedSelector} from "../../store/useTypedSelector";
import {useActions} from "../../store/useActions";
import {ModalTypes} from "./modal.types";
import {ModalContainer, ModalDialog, ModalVeil} from "./modal.style";

const Modal = () => {
    const {isOpen, type} = useTypedSelector(state => state.modal)
    const {closeModal} = useActions()
    const veilRef = useRef<HTMLDivElement>(null)
    const dialogRef = useRef<HTMLDivElement>(null)
    const modalTween = useRef<GSAPTimeline>();

    const keyDownHandler = (e: KeyboardEvent) => {
         if ( e.key === "Escape" ) onCloseModal();
    }

    useEffect(() => {
        modalTween.current = gsap.timeline({
            paused: true
        })
            .fromTo(veilRef.current,
                {duration: 0.2, opacity: 0},
                {duration: 0.2, opacity: 1})
            .fromTo(dialogRef.current,
                {y: 100, duration: 0.2, opacity: 0},
                {y: 0, opacity: 1, duration: 0.2}, )
            .reverse()


        window.addEventListener('keydown', keyDownHandler);

        return () => {

            window.removeEventListener('keydown', keyDownHandler);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        modalTween.current && modalTween.current.reversed(!isOpen);
    }, [isOpen]);

    const onCloseModal = () => {
        const duration = modalTween.current ? modalTween.current.reverse().duration() : 0
        gsap.delayedCall(duration, () => closeModal());
    };

    const ChildComponents = ModalTypes[type as keyof typeof ModalTypes];

    return (
        <ModalContainer show={isOpen}>
            <ModalVeil ref={veilRef} onClick={() => onCloseModal()}/>
            <ModalDialog type={type as keyof typeof ModalTypes} ref={dialogRef}>
                {type && <ChildComponents/>}
            </ModalDialog>
        </ModalContainer>
    );
};

export default Modal;
