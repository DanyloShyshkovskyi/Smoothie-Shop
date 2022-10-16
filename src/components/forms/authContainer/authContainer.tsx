import {LoginForm} from "../loginForm/loginForm";
import {RegisterForm} from "../registerForm/registerForm";
import {
    AuthContainerStyle,
    FormSignUpStyle,
    FormSingInStyle,
    OverlayContainer, OverlayPanelLeft, OverlayPanelRight,
    OverlayStyle
} from "./authContainer.style";
import {useEffect, useState} from "react";
import {useTypedSelector} from "../../../store/useTypedSelector";

export const AuthContainer = () => {

    const [rightPanelActive, setRightPanelActive] = useState(false)

    const {isOpen} = useTypedSelector(state => state.modal)

    useEffect(()=> {

    }, [isOpen])

    return (
        <AuthContainerStyle rightPanelActive={rightPanelActive}>
            <FormSignUpStyle>
                <RegisterForm/>
            </FormSignUpStyle>
            <FormSingInStyle>
                <LoginForm/>
            </FormSingInStyle>
            <OverlayContainer>
                <OverlayStyle>
                    <OverlayPanelLeft>
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button onClick={()=>setRightPanelActive(!rightPanelActive)} className="ghost" id="signIn">Sign In</button>
                    </OverlayPanelLeft>
                    <OverlayPanelRight>
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button onClick={()=>setRightPanelActive(!rightPanelActive)} className="ghost" id="signUp">Sign Up</button>
                    </OverlayPanelRight>
                </OverlayStyle>
            </OverlayContainer>
        </AuthContainerStyle>
    )

}