import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {useTypedSelector} from "@store/useTypedSelector";
import {useActions} from "@store/useActions";
import {ModalTypes} from "@customTypes/modal.types";
import {ModalContainer, ModalDialog, ModalVeil} from "./modal.style";
import useModalAnimations from "@animation/modal.animations";

const Modal = () => {
    // Redux state
    const {isOpen, type} = useTypedSelector(state => state.modal)

    // Actions
    const {closeModal} = useActions()

    // Refs
    const veilRef = useRef<HTMLDivElement>(null)
    const dialogRef = useRef<HTMLDivElement>(null)
    const modalTween = useRef<GSAPTimeline>(null);

    useEffect(() => {
        modalTween.current && modalTween.current.reversed(!isOpen);
    }, [isOpen]);

    const onCloseModal = () => {
        const duration = modalTween.current ? modalTween.current.reverse().duration() : 0
        gsap.delayedCall(duration, closeModal);
    };

    // Animation
    useModalAnimations({veilRef, dialogRef, modalTween}, onCloseModal)

    const ChildComponents = ModalTypes[type as keyof typeof ModalTypes];

    return (
        <ModalContainer data-testid={"modalContainer"} show={isOpen}>
            <ModalVeil data-testid={"modalVeil"} ref={veilRef} onClick={onCloseModal}/>
            <ModalDialog data-testid={"modalDialog"} type={type as keyof typeof ModalTypes} ref={dialogRef}>
                {type && <ChildComponents/>}
            </ModalDialog>
        </ModalContainer>
    );
};

export default Modal;
