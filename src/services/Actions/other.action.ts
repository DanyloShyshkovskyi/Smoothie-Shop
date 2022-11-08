import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import emailjs from "@emailjs/browser";

export const otherAction = createApi({
    reducerPath: "others",
    baseQuery: fakeBaseQuery(),
    endpoints: (build) => ({
        sendEmail: build.mutation<boolean, Record<string, unknown> | undefined>({
            async queryFn(templateParams) {
                try {
                    const response = await emailjs.send('service_0tyvu3c', 'template_5hw88ye', templateParams, '4spQlxMQI1DbVuk9O')
                    console.log('SUCCESS!', response.status, response.text);
                    return { data: true}
                } catch (e) {
                    return { error: {reason: 'Check email js log'}}
                }
            },
        }),
    }),
})

export const {useSendEmailMutation} = otherAction