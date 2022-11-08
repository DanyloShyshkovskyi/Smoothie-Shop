import facebook from "../../assets/icons/facebook.svg"
import google from "../../assets/icons/google.svg"
import linkedIn from "../../assets/icons/linkedin.svg"
import {facebookAuth, googleAuth} from "../../services/firebase/firebase.config";

export const FORM_ICONS = [
    {
        alt: 'facebook',
        scr: facebook,
        provider: facebookAuth
    },
    {
        alt: 'google',
        scr: google,
        provider: googleAuth
    },
    {
        alt: 'linkedIn',
        scr: linkedIn,
        provider: null
    }
]