import {
    ContainerColumn,
    LogOutButton,
    UserDetailsContainerStyle,
    UserEmailStyle,
    UserNameStyle
} from "./userDetailsContainer.style";
import {useGetUserDataQuery, useLogOutMutation, useUpdateDataMutation} from "@services/Actions/auth.action";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@services/firebase/firebase.config";
import {useEffect, useRef, useState} from "react";
import {BottleLoaderSvg} from "@components/loaders";
import useUserDetailsAnimation from "@animation/userDetails.animation";
import {UserPicture} from "@components/userPicture/userPicture";

export const UserDetailsContainer = () => {
    // auth response
    const [user] = useAuthState(auth);

    // RTK Query response
    const {data: userData, isLoading: userDataLoading} = useGetUserDataQuery(user?.uid || "", {skip: !user})
    const [updateData] = useUpdateDataMutation()
    const [logOut, {isLoading: logoutLoading}] = useLogOutMutation()

    // React state
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

    return (
        <UserDetailsContainerStyle>
            {(userDataLoading || logoutLoading || !userData)
                ? <BottleLoaderSvg fullAbsolute/>
                : <>
                    <UserPicture
                        onChange={(url) => updateUserData({image: url})}
                        url={userData.image}
                        ref={imageRef}
                    />
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