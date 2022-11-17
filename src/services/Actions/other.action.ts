import emailjs from "@emailjs/browser";
import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {cartAction} from "@store/cart";

export const otherAction = createApi({
    reducerPath: "others",
    baseQuery: fakeBaseQuery(),
    endpoints: (build) => ({
        sendEmail: build.mutation<boolean, Record<string, unknown> | undefined>({
            async queryFn(templateParams) {
                try {
                    const response = await emailjs.send(
                        process.env.REACT_APP_SERVICE_ID as string,
                        process.env.REACT_APP_TEMPLATE_ID as string,
                        templateParams,
                        process.env.REACT_APP_PUBLIC_KEY as string
                    )
                    console.log('SUCCESS!', response.status, response.text);
                    return {data: true}
                } catch (e) {
                    return {error: {reason: 'Check email js log'}}
                }
            },
            async onQueryStarted(arg: Record<string, unknown>, {dispatch, queryFulfilled}) {
                try {
                    await queryFulfilled
                    dispatch(cartAction.clearCart())
                } catch (error) {
                    console.log(error)
                }
            }
        }),
    }),
})

export const {useSendEmailMutation} = otherAction