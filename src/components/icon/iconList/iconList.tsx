import {FORM_ICONS} from "../../../utils/constants/iconList.constants";
import {IconItem} from "../iconItem/iconItem";
import {IconListStyle} from "./iconList.style";
import {FacebookAuthProvider} from "firebase/auth";
import {useLoginBySocialMediaMutation} from "../../../services/Actions/auth.action";
import {useTypedSelector} from "../../../store/useTypedSelector";
import {toast} from "react-toastify";

export const IconList = () => {
    const [signInBySM] = useLoginBySocialMediaMutation()
    const cart = useTypedSelector(state => state.cart)

    const signIn = async (provider: FacebookAuthProvider | null) => {
        if (!provider) {
            console.log("fdas")
            toast.info("This auth method is not ready yet")
            return
        }
        signInBySM({provider, cart})
    }

    return (
        <IconListStyle>
            {FORM_ICONS.map((icon, index) =>
                <IconItem key={index} src={icon.scr} alt={icon.alt} onClick={()=>signIn(icon.provider)}/>
            )}
        </IconListStyle>)
}