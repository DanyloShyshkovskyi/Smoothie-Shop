import {DefaultForm} from "../defaultForm/defaultForm";
import {LOGIN_FORM_ELEMENTS} from "../../../utils/constants/form.constants";
import {useLoginMutation} from "../../../services/Actions/auth.action";
import {putErrorMessage} from "../../../utils/helpers/validation.helpers";

export const LoginForm = () => {
    const [logIn, {isLoading, error}] = useLoginMutation();

    return (
        <DefaultForm
            onSubmit={(e, formData) => logIn(formData)}
            submitLabel={'Sign In'}
            isLoading={isLoading}
            errorMessage={putErrorMessage(error)}
            title={'Sign In'}
            options={'or use your account'}
            formElements={LOGIN_FORM_ELEMENTS}
        >
        </DefaultForm>
    )
}