import {
    ContainerColumn,
    LogOutButton,
    UserDetailsStyle,
    UserEmailStyle,
    UserImageStyle,
    UserNameStyle
} from "./userDetails.style";
import {useGetUserDataQuery, useLogOutMutation} from "../../services/Actions/auth.action";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../services/firebase/firebase.config";

export const UserDetails = () => {
    const [user] = useAuthState(auth);
    const {data: userData} = useGetUserDataQuery(user?.uid || "", {skip: !user})
    const [logOut] = useLogOutMutation()

    return (
        <UserDetailsStyle>
            <UserImageStyle/>
            <ContainerColumn>
                <UserNameStyle>{userData?.name}</UserNameStyle>
                <UserEmailStyle>{userData?.email}</UserEmailStyle>
                <LogOutButton onClick={() => logOut(null)}>Log Out</LogOutButton>
            </ContainerColumn>
        </UserDetailsStyle>
    )
}