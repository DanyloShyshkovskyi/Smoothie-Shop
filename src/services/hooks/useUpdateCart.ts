import {useGetUserDataQuery, useUpdateDataMutation} from "@services/Actions/auth.action";
import {auth} from "@services/firebase/firebase.config";
import {useTypedSelector} from "@store/useTypedSelector";
import {useEffect} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";

const useUpdateCart = () => {
    //getUserData
    const [user] = useAuthState(auth);
    const {data: userData} = useGetUserDataQuery(user?.uid || "", {skip: !user})

    //getCartData
    const cartData = useTypedSelector(state => state.cart)
    const [updateData] = useUpdateDataMutation()

    useEffect(() => {
            if (!(userData && auth.currentUser)) return
            updateData({id: userData.keyId, data: {cart: cartData}})
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [cartData])
};

export default useUpdateCart;