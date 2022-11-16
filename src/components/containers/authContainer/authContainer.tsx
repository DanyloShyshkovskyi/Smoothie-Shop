import {LoginForm, RegisterForm} from "@components/forms";
import {
    AuthContainerStyle,
    FormSignUpStyle,
    FormSingInStyle,
    OverlayContainer,
    OverlayPanelLeft,
    OverlayPanelRight,
    OverlayStyle
} from "./authContainer.style";
import {useRef, useState} from "react";
import {useAuthContainerAnimation} from "@animation/authContainer.animation";
import OverlayPanel from "./utils/overlayPanel";
import {overlayPanelConstant} from "@constants/authForm.constants";

export const AuthContainer = () => {
    // React state
    const [rightPanelActive, setRightPanelActive] = useState(false)

    // Refs
    const formSingIn = useRef<HTMLDivElement>(null)
    const formSignUp = useRef<HTMLDivElement>(null)
    const overlay = useRef<HTMLDivElement>(null)
    const overlayContainer = useRef<HTMLDivElement>(null)
    const overlayPanelLeft = useRef<HTMLDivElement>(null)
    const overlayPanelRight = useRef<HTMLDivElement>(null)
    const allRefs = {formSingIn, formSignUp, overlay, overlayContainer, overlayPanelLeft, overlayPanelRight}

    // Animation
    useAuthContainerAnimation(allRefs, rightPanelActive)

    // Custom function
    const onPanelChange = () =>
        setRightPanelActive(prevState => !prevState)

    return (
        <AuthContainerStyle>
            <FormSignUpStyle ref={formSignUp}>
                <RegisterForm/>
            </FormSignUpStyle>
            <FormSingInStyle ref={formSingIn}>
                <LoginForm/>
            </FormSingInStyle>
            <OverlayContainer ref={overlayContainer}>
                <OverlayStyle ref={overlay}>
                    <OverlayPanelLeft ref={overlayPanelLeft}>
                        <OverlayPanel {...{...overlayPanelConstant.overlayPanelLeft, onClick: onPanelChange}}/>
                    </OverlayPanelLeft>
                    <OverlayPanelRight ref={overlayPanelRight}>
                        <OverlayPanel {...{...overlayPanelConstant.overlayPanelRight, onClick: onPanelChange}}/>
                    </OverlayPanelRight>
                </OverlayStyle>
            </OverlayContainer>
        </AuthContainerStyle>
    )

}