import React from 'react';
import {EmailCommunicateStyle} from "./email.communicate.style";
import {ICommunicate} from "../../../types/global.types";

export interface IEmailCommunicate extends ICommunicate{
    email: string
}

const EmailCommunicate = ({email, ...statusHandler}: IEmailCommunicate) => {
    return (
        <EmailCommunicateStyle {...statusHandler}>
            <h2>
                {statusHandler.isSuccess && <>Successfully Sent on Email: <span>{email}</span></>}
                {statusHandler.isError && "Something went wrong, please try again later"}
            </h2>
        </EmailCommunicateStyle>
    );
};

export default EmailCommunicate;