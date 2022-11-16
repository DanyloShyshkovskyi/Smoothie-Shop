import {DefaultForm} from "../defaultForm";
import {FORM_STRINGS, LOGIN_FORM_ELEMENTS} from "@constants/form.constants";
import {useLoginMutation} from "@services/Actions/auth.action";
import {putErrorMessage} from "@helpers/validation.helpers";

export const LoginForm = () => {
    // RTK mutation
    const [logIn, {isLoading, error}] = useLoginMutation();

    return (
        <DefaultForm
            onSubmit={(e, formData) => logIn(formData)}
            isLoading={isLoading}
            errorMessage={putErrorMessage(error)}
            strings={FORM_STRINGS.login}
            formElements={LOGIN_FORM_ELEMENTS}
        >
        </DefaultForm>
    )
}