import {LoginForm} from "../loginForm/loginForm";
import {RegisterForm} from "../registerForm/registerForm";
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
import {useAuthContainerAnimation} from "../../../utils/animation/authContainer.animation";

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
    const allRefs = {formSingIn,formSignUp,overlay,overlayContainer,overlayPanelLeft,overlayPanelRight}

    // Animation
    useAuthContainerAnimation(allRefs, rightPanelActive)

    return (
        <AuthContainerStyle /*rightPanelActive={rightPanelActive}*/>
            <FormSignUpStyle ref={formSignUp}>
                <RegisterForm/>
            </FormSignUpStyle>
            <FormSingInStyle ref={formSingIn}>
                <LoginForm/>
            </FormSingInStyle>
            <OverlayContainer ref={overlayContainer}>
                <OverlayStyle ref={overlay}>
                    <OverlayPanelLeft ref={overlayPanelLeft}>
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button onClick={()=>setRightPanelActive(!rightPanelActive)} className="ghost" id="signIn">Sign In</button>
                    </OverlayPanelLeft>
                    <OverlayPanelRight ref={overlayPanelRight}>
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button onClick={()=>setRightPanelActive(!rightPanelActive)} className="ghost" id="signUp">Sign Up</button>
                    </OverlayPanelRight>
                </OverlayStyle>
            </OverlayContainer>
        </AuthContainerStyle>
    )

}