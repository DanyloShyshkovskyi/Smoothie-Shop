import {DefaultForm} from "../defaultForm/defaultForm";
import {LOGIN_FORM_ELEMENTS} from "../../../utils/constants/form.constants";
import {useLoginMutation} from "../../../services/Actions/auth.action";

export const LoginForm = () => {
    const [logIn] = useLoginMutation();

    return (
        <DefaultForm
            onSubmit={(e, formData) => logIn(formData)}
            submitLabel={'Sign In'}
            title={'Sign In'}
            options={'or use your account'}
            formElements={LOGIN_FORM_ELEMENTS}
        >
        </DefaultForm>
    )
}