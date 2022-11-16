import {CartCircle, IconsView, LogoView, NavBarLinksView, NavBarLinkView, NavBarView} from "./NavBar.styles";
import {cartIcon, userIcon} from "@assets/icons"
import {useRef} from "react";
import {useActions} from "@store/useActions";
import {useTypedSelector} from "@store/useTypedSelector";
import {useNavBarAnimation, useNavCountAnimation} from "@animation/navBar.animation";
import {cartProductLength} from "@helpers/array.helpers";
import {auth} from "@services/firebase/firebase.config";

export const NavBar = () => {
    // Refs
    const navRef = useRef<HTMLDivElement>(null);
    const navCountRef = useRef<HTMLDivElement>(null);

    // Actions
    const {openModal} = useActions()

    // Redux state
    const cartData = useTypedSelector(state => state.cart)

    // Animations
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
                    <IconsView src={userIcon} alt={'user-icon'}/>
                </NavBarLinkView>
                <NavBarLinkView onClick={() => openModal("cart")}>
                    <IconsView src={cartIcon} alt={'cart-icon'}/>
                    {cartProductLength(cartData) !== 0 &&
                    <CartCircle ref={navCountRef}>{cartProductLength(cartData)}</CartCircle>}
                </NavBarLinkView>
            </NavBarLinksView>
        </NavBarView>
    )
}