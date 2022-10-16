import {DefaultForm} from "../defaultForm/defaultForm";
import {REGISTER_FORM_ELEMENTS} from "../../../utils/constants/form.constants";
import {useRegisterMutation} from "../../../services/Actions/auth.action";
import {useTypedSelector} from "../../../store/useTypedSelector";

export const RegisterForm = () => {
    const [registerUser] = useRegisterMutation()
    const cartData = useTypedSelector(state => state.cart)

    return (
        <DefaultForm
            onSubmit={(e, formData)=>{
                registerUser({...formData, data: cartData})
            }}
            submitLabel={'Sign Up'}
            title={'Create Account'}
            options={'or use your email for registration'}
            formElements={REGISTER_FORM_ELEMENTS}
        />
    )
}