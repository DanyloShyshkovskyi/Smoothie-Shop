

export const LOGIN_FORM_ELEMENTS = [
    {
        label: "Email",
        placeholder: "Email",
        name: "email",
        type: "email",
    },
    {
        label: "Password",
        placeholder: "Password",
        name: "password",
        type: "password",
    }
]

export const REGISTER_FORM_ELEMENTS = [
    {
        label: "User name",
        placeholder: "User name",
        name: "name",
        type: "name",
    },

    ...LOGIN_FORM_ELEMENTS,

    // {
    //     label: "Password Repeat",
    //     placeholder: "Password Repeat",
    //     name: "password_repeat",
    //     type: "password",
    // },
]