import {FormStyle} from "./defaultForm.style";
import {IconList} from "@components/icon";
import {useState} from "react";
import {IAuthForm, IDefaultForm} from "@customTypes/auth.types";
import {CustomInput} from "@components/forms";
import {createFormState, onFormInputChange} from "@helpers/form.helpers";
import {BottleLoaderSvg} from "@components/loaders";

export const DefaultForm = ({onSubmit, children, strings, formElements, errorMessage, isLoading}: IDefaultForm) => {
    // React State
    const [formData, setFormData] = useState<IAuthForm>(createFormState(formElements))
    const {title, options, submitLabel} = strings

    return (
        <FormStyle onSubmit={(e) => {
            onSubmit(e, formData)
            e.preventDefault()
        }}>
            {title && <h1>{title}</h1>}
            <IconList/>
            {options && <span>{options}</span>}
            {children}
            {formElements.map((inputAttribute, index) =>
                <CustomInput
                    key={inputAttribute.name + index}
                    id={inputAttribute.name + index}
                    required={true}
                    onChange={(event => onFormInputChange(event, setFormData))}
                    {...inputAttribute}
                />
            )}
            {errorMessage && <p>{errorMessage}</p>}
            <input type={"submit"} value={submitLabel}/>
            {isLoading && <BottleLoaderSvg fullAbsolute/>}
        </FormStyle>
    )
}