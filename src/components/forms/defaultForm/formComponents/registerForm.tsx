import {DefaultForm} from "../defaultForm";
import {FORM_STRINGS, REGISTER_FORM_ELEMENTS} from "@constants/form.constants";
import {useRegisterMutation} from "@services/Actions/auth.action";
import {useTypedSelector} from "@store/useTypedSelector";
import {putErrorMessage} from "@helpers/validation.helpers";
import {IAuthRegister} from "@customTypes/auth.types";

export const RegisterForm = () => {
    // RTK mutation
    const [registerUser, {isLoading,error}] = useRegisterMutation()

    // Redux state
    const cartData = useTypedSelector(state => state.cart)

    return (
        <>
            <DefaultForm
                onSubmit={(e, formData) =>
                    registerUser({...formData as IAuthRegister, data: cartData})
                }
                isLoading={isLoading}
                errorMessage={putErrorMessage(error)}
                strings={FORM_STRINGS.register}
                formElements={REGISTER_FORM_ELEMENTS}
            />
        </>
    )
}