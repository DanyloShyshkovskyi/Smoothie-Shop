import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {auth, db} from "../firebase/firebase.config";
import {addDoc, collection, doc, getDocs, query, updateDoc, where} from "firebase/firestore";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {IAuthData, IAuthLogin, IAuthRegister, IUpdateData} from "../../types/auth.types";
import {ICartIdProduct} from "../../types/product.types";
import {IData} from "../../types/global.types";
import {cartSlice} from "../../store/cart/cart.slice";
import {modalAction} from "../../store/ui/modal/modal.slice";

export const authAction = createApi({
    reducerPath: "auth",
    baseQuery: fakeBaseQuery(),
    endpoints: (build) => ({
        getUserData: build.query<IAuthData, string>({
            async queryFn(uid) {
                try {
                    const q = query(collection(db, "users"), where("uid", "==", uid));
                    const doc = await getDocs(q);
                    const data = doc.docs[0].data() as IAuthData;
                    const keyId = doc.docs[0].id
                    return {data: {...data, keyId}}
                } catch (e) {
                    return {error: {reason: 'too cold'}}
                }
            },
            keepUnusedDataFor: 0,
            async onQueryStarted(arg: string, {dispatch, queryFulfilled}) {
                try {
                    const {data: updatedPost} = await queryFulfilled
                    dispatch(cartSlice.actions.concatCarts(updatedPost.cart || []))
                } catch {
                }
            }
        }),
        register: build.mutation<IAuthData, IAuthRegister & IData<ICartIdProduct[]>>({
            async queryFn({name, email, password, data}) {
                try {
                    const res = await createUserWithEmailAndPassword(auth, email, password);
                    const user = res.user;
                    const authData = {
                        uid: user.uid,
                        name,
                        email,
                        cart: data
                    } as IAuthData
                    const newData = await addDoc(collection(db, "users"), authData);
                    return {data: authData}
                } catch (err) {
                    return {error: {reason: 'Somethig went wrong'}}
                }
            },
            async onQueryStarted(arg: IAuthRegister & IData<ICartIdProduct[]>, {dispatch, queryFulfilled}) {
                try {
                    dispatch(cartSlice.actions.clearCart())
                    await queryFulfilled
                    dispatch(modalAction.openModal('accountDetails'))
                } catch {
                }
            }
        }),
        login: build.mutation<string, IAuthLogin>({
            async queryFn({email, password}) {
                try {
                    const data = await signInWithEmailAndPassword(auth, email, password);
                    return {data: "done"}
                } catch (err) {
                    console.error(err);
                    return {error: {reason: 'Somethig went wrong'}}
                }
            },
            async onQueryStarted(arg: IAuthLogin, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled
                    dispatch(modalAction.openModal('accountDetails'))
                } catch {
                }
            }
        }),
        logOut: build.mutation<string, null>({
            async queryFn() {
                try {
                    await signOut(auth);
                    return {data: "done"}
                } catch (err) {
                    console.error(err);
                    return {error: {reason: 'Somethig went wrong'}}
                }
            },
            async onQueryStarted(arg: null, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled
                    dispatch(cartSlice.actions.clearCart())
                    dispatch(modalAction.openModal('auth'))
                } catch {
                }
            }
        }),
        updateData: build.mutation<string, IUpdateData>({
            async queryFn({id, data}) {
                try {
                    await updateDoc(doc(db, 'users', id), {...data});
                    return {data: "done"}
                } catch (err) {
                    console.error(err);
                    return {error: {reason: 'Somethig went wrong'}}
                }
            },
        }),
    }),
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useGetUserDataQuery,
    useLogOutMutation,
    useUpdateDataMutation
} = authAction