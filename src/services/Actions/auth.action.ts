import {IAuthData, IAuthLogin, IAuthRegister, IUpdateData} from "@customTypes/auth.types";
import {IData} from "@customTypes/global.types";
import {ICartIdProduct} from "@customTypes/product.types";
import {userDataFromLoginServices} from '@helpers/auth.helpers';
import {firebaseErrorReturn} from "@helpers/validation.helpers";
import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {auth, db} from "@services/firebase/firebase.config";
import {cartAction} from "@store/cart";
import {modalAction} from "@store/ui/modal";
import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import {addDoc, collection, doc, getDocs, query, updateDoc, where} from "firebase/firestore";

export const authAction = createApi({
    reducerPath: "auth",
    tagTypes: ['User'],
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
            providesTags: ['User'],
            async onQueryStarted(arg: string, {dispatch, queryFulfilled}) {
                try {
                    const {data: updatedPost} = await queryFulfilled
                    dispatch(cartAction.concatCarts(updatedPost.cart || []))
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
                    await addDoc(collection(db, "users"), authData);
                    return {data: authData}
                } catch (error) {
                    return firebaseErrorReturn(error)
                }
            },
            async onQueryStarted(arg: IAuthRegister & IData<ICartIdProduct[]>, {dispatch, queryFulfilled}) {
                try {
                    dispatch(cartAction.clearCart())
                    await queryFulfilled
                    dispatch(modalAction.openModal('accountDetails'))
                } catch {
                }
            }
        }),
        login: build.mutation<string, IAuthLogin>({
            async queryFn({email, password}) {
                try {
                    await signInWithEmailAndPassword(auth, email, password);
                    return {data: "done"}
                } catch (error) {
                    return firebaseErrorReturn(error)
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
        loginBySocialMedia: build.mutation<string, { provider: GoogleAuthProvider | FacebookAuthProvider, cart: ICartIdProduct[] }>({
            async queryFn({provider, cart}) {
                try {
                    const defaultReturnValue = {data: "done"}
                    const result = await signInWithPopup(auth, provider)
                    const userData = userDataFromLoginServices(result, cart)
                    if (userData) return defaultReturnValue
                    await addDoc(collection(db, "users"), userData);

                    return defaultReturnValue
                } catch (err) {
                    console.error(err);
                    return {error: {reason: 'Somethig went wrong'}}
                }
            },
            async onQueryStarted(arg: { provider: GoogleAuthProvider | FacebookAuthProvider, cart: ICartIdProduct[] }, {
                dispatch,
                queryFulfilled
            }) {
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
                    dispatch(cartAction.clearCart())
                    dispatch(modalAction.openModal('auth'))
                } catch {
                }
            }
        }),
        updateData: build.mutation<IUpdateData, IUpdateData>({
            async queryFn({id, data}) {
                try {
                    await updateDoc(doc(db, 'users', id), {...data});
                    return {data: {id, data}}
                } catch (err) {
                    console.error(err);
                    return {error: {reason: 'Somethig went wrong'}}
                }
            },
            onQueryStarted(arg: IUpdateData, {dispatch, queryFulfilled}) {
                const patchedData = dispatch(
                    authAction.util.updateQueryData("getUserData", arg.data.uid, (draft) => {
                        return Object.assign(draft, arg.data)
                    }))
                queryFulfilled.catch(patchedData.undo)
            }
        }),
    }),
})

export const {
    useLoginBySocialMediaMutation,
    useRegisterMutation,
    useLoginMutation,
    useGetUserDataQuery,
    useLogOutMutation,
    useUpdateDataMutation
} = authAction