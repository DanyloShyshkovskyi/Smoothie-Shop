import {CartCircle, IconsView, LogoView, NavBarLinksView, NavBarLinkView, NavBarView} from "./NavBar.styles";
// import searchIcon from "../../../../assets/icons/search-icon.svg"
import cartIcon from "../../../../assets/icons/cart-icon.png"
import userIcon from "../../../../assets/icons/user.png"
import {useRef} from "react";
import {useActions} from "../../../../store/useActions";
import {useTypedSelector} from "../../../../store/useTypedSelector";
import {useNavBarAnimation, useNavCountAnimation} from "../../../../utils/animation/navBar.animation";
import {cartProductLength} from "../../../../utils/helpers/array.helpers";
import {auth} from "../../../../services/firebase/firebase.config";

export const NavBar = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const navCountRef = useRef<HTMLDivElement>(null);
    const {openModal} = useActions()
    const cartData = useTypedSelector(state => state.cart)

    useNavBarAnimation({navRef})
    useNavCountAnimation({navCountRef}, cartData)

    const openMyAccount = () =>
        auth.currentUser ? openModal("accountDetails") : openModal("auth")

    return (
        <NavBarView ref={navRef}>
            <LogoView>Smoothie shop</LogoView>
            <NavBarLinksView>
                {/*<NavBarLinkView>*/}
                {/*    <IconsView src={searchIcon} alt={'search-icon'} />*/}
                {/*</NavBarLinkView>*/}
                <NavBarLinkView className={'userLink'} onClick={openMyAccount}>
                    <span>My account</span>
                    <IconsView src={userIcon} alt={'user-icon'} />
                </NavBarLinkView>
                <NavBarLinkView onClick={()=>openModal("cart")}>
                    <IconsView src={cartIcon} alt={'cart-icon'} />
                    {cartProductLength(cartData) !== 0 && <CartCircle ref={navCountRef}>{cartProductLength(cartData)}</CartCircle>}
                </NavBarLinkView>
            </NavBarLinksView>
        </NavBarView>
    )
}