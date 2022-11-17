import {IAuthData} from "@customTypes/auth.types";
import {ICartIdProduct} from "@customTypes/product.types";
import {getAdditionalUserInfo, UserCredential} from "firebase/auth";

export const userDataFromLoginServices = (result: UserCredential, cart: ICartIdProduct[]) => {
    const details = getAdditionalUserInfo(result)
    if (!details?.isNewUser) return
    const profile = details.profile
    if (!profile) return
    const picture = profile.picture as { data: { url: string } }

    let authData = {uid: result.user.uid, email: profile.email, cart} as IAuthData

    if (details.providerId === "facebook.com")
        authData = {
            ...authData,
            name: profile.name as string,
            image: picture.data.url
        }

    if (details.providerId === "google.com")
        authData = {
            ...authData,
            name: profile.given_name as string,
            image: profile.picture as string
        }

    return authData
}