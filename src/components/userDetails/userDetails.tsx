import {
    ContainerColumn,
    LogOutButton,
    UserDetailsStyle,
    UserEmailStyle,
    UserImageStyle,
    UserNameStyle
} from "./userDetails.style";
import {useGetUserDataQuery, useLogOutMutation, useUpdateDataMutation} from "../../services/Actions/auth.action";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../services/firebase/firebase.config";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {BottleLoaderSvg} from "../loaders/bottleLoader/bottleLoader.svg";
import {uploadImage} from "../../services/upload/upload.image";
import gsap from "gsap";
import defaultUserLogo from "../../assets/icons/peep.svg"

export const UserDetails = () => {
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

    useEffect(()=> {
        gsap.fromTo(imageRef.current, {
            x: -100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.75,
            // ease: 'bounce.in'
        });
        gsap.fromTo(textRef.current, {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.75,
            // ease: 'bounce.in'
        });
        gsap.fromTo(buttonRef.current, {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 1,
            // ease: 'bounce.in'
        });
    },[userDataLoading])

    useEffect(() => {
        userData && setName(userData.name)
    }, [userData])

    const uploadImageFunc = (e: ChangeEvent<HTMLInputElement>) => {
        if (!userData) return
        setImageLoading(true)
        uploadImage(
            e,
            setImageLoading,
            (url => updateData({id: userData.keyId, data: {image: url, uid: userData.uid}}))
        )
    }

    return (
        <UserDetailsStyle>
            {(userDataLoading || logoutLoading)
                ? <BottleLoaderSvg fullAbsolute/>
                : <>
                    <input id="file-upload" accept="image/*" onChange={uploadImageFunc} type="file"/>
                    <UserImageStyle ref={imageRef} backgroundImage={userData?.image} htmlFor="file-upload">
                        {imageLoading && <BottleLoaderSvg fullAbsolute/>}
                        <img onLoad={() => setImageLoading(false)} src={userData?.image || defaultUserLogo} alt={'user'}/>
                    </UserImageStyle>
                    <ContainerColumn ref={textRef}>
                        <UserNameStyle
                            value={userData ? name : "Loading..."}
                            onChange={(e) => setName(e.target.value)}
                            onBlur={() => {
                                updateData({id: userData?.keyId || "", data: {name, uid: userData?.uid}})
                            }}
                        />
                        <UserEmailStyle>{userData ? userData.email : "Loading..."}</UserEmailStyle>
                    </ContainerColumn>
                    <LogOutButton ref={buttonRef} onClick={() => logOut(null)}>Log Out</LogOutButton>
                </>
            }
        </UserDetailsStyle>
    )
}