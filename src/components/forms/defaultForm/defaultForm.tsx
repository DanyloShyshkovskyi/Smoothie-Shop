import {FormStyle} from "./defaultForm.style";
import {IconList} from "../../icon/iconList/iconList";
import {FormEvent, useState} from "react";
import {IFormElement} from "../../../types/auth.types";
import {CustomInput} from "../customInput/customInput";
import {createFormState, onFormInputChange} from "../../../utils/helpers/form.helpers";

interface IDefaultForm {
    onSubmit: (e: FormEvent<HTMLFormElement>, formData: any) => void,
    children?: JSX.Element | JSX.Element[],
    submitLabel: string,
    title?: string
    options?: string,
    formElements: IFormElement[]
}

export const DefaultForm = ({onSubmit, submitLabel, children, title, options, formElements}: IDefaultForm) => {
    const [formData, setFormData] = useState<any>(createFormState(formElements))

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
            <input type={"submit"} value={submitLabel}/>
        </FormStyle>
    )
}