import {facebook, google, linkedIn} from "@assets/icons"
import {facebookAuth, googleAuth} from "@services/firebase/firebase.config";

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