import {DefaultForm} from "../defaultForm/defaultForm";
import {REGISTER_FORM_ELEMENTS} from "../../../utils/constants/form.constants";
import {useRegisterMutation} from "../../../services/Actions/auth.action";
import {useTypedSelector} from "../../../store/useTypedSelector";
import {putErrorMessage} from "../../../utils/helpers/validation.helpers";

export const RegisterForm = () => {
    const [registerUser, {isLoading,error}] = useRegisterMutation()
    const cartData = useTypedSelector(state => state.cart)

    return (
        <>
            <DefaultForm
                onSubmit={(e, formData)=>{
                    registerUser({...formData, data: cartData})
                }}
                isLoading={isLoading}
                errorMessage={putErrorMessage(error)}
                submitLabel={'Sign Up'}
                title={'Create Account'}
                options={'or use your email for registration'}
                formElements={REGISTER_FORM_ELEMENTS}
            />
        </>
    )
}