import {
    ContainerColumn,
    LogOutButton,
    UserDetailsContainerStyle,
    UserEmailStyle,
    UserImageStyle,
    UserNameStyle
} from "./userDetailsContainer.style";
import {useGetUserDataQuery, useLogOutMutation, useUpdateDataMutation} from "@services/Actions/auth.action";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@services/firebase/firebase.config";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {BottleLoaderSvg} from "@components/loaders";
import {imageUpload} from "@services/upload/image.upload";
import useUserDetailsAnimation from "@animation/userDetails.animation";

export const UserDetailsContainer = () => {
    // auth response
    const [user] = useAuthState(auth);

    // RTK Query response
    const {data: userData, isLoading: userDataLoading} = useGetUserDataQuery(user?.uid || "", {skip: !user})
    const [updateData] = useUpdateDataMutation()
    const [logOut, {isLoading: logoutLoading}] = useLogOutMutation()

    // React state
    const [imageLoading, setImageLoading] = useState<boolean>(true)
    const [name, setName] = useState<string>('')

    // Refs
    const imageRef = useRef<HTMLLabelElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    // Animation
    useUserDetailsAnimation({imageRef, textRef, buttonRef}, userDataLoading)

    useEffect(() => {
        userData && setName(userData.name)
    }, [userData])

    const updateUserData = (updatedEl: { image: string } | { name: string }) =>
        userData && updateData({id: userData.keyId, data: {...updatedEl, uid: userData.uid}})

    const uploadImageFunc = (e: ChangeEvent<HTMLInputElement>) =>
        imageUpload(e, setImageLoading, (url => updateUserData({image: url})))

    return (
        <UserDetailsContainerStyle>
            {(userDataLoading || logoutLoading || !userData)
                ? <BottleLoaderSvg fullAbsolute/>
                : <>
                    <input id="file-upload" accept="image/*" onChange={uploadImageFunc} type="file"/>
                    <UserImageStyle ref={imageRef} backgroundImage={userData.image} htmlFor="file-upload">
                        {imageLoading && <BottleLoaderSvg fullAbsolute/>}
                        <img onLoad={() => setImageLoading(false)} src={userData.image} alt={'user'}/>
                    </UserImageStyle>
                    <ContainerColumn ref={textRef}>
                        <UserNameStyle
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={() => updateUserData({name})}
                        />
                        <UserEmailStyle>{userData.email}</UserEmailStyle>
                    </ContainerColumn>
                    <LogOutButton ref={buttonRef} onClick={() => logOut(null)}>Log Out</LogOutButton>
                </>
            }
        </UserDetailsContainerStyle>
    )
}