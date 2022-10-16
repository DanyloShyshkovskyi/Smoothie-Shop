import {useEffect} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase/firebase.config";
import {useGetUserDataQuery, useUpdateDataMutation} from "../Actions/auth.action";
import {useTypedSelector} from "../../store/useTypedSelector";

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
   },[cartData])
};

export default useUpdateCart;