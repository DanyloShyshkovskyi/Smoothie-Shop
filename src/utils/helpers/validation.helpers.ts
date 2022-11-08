import {IError} from "../../types/global.types";
import {FirebaseError} from "@firebase/util";

const isErrorReason = (
    error: unknown
): error is {reason: string} =>
    typeof error === 'object' && error != null && 'reason' in error

export const putErrorMessage = (
    error: unknown
): string => isErrorReason(error) ? error.reason : ""

export const firebaseErrorReturn = (
    error: unknown
): IError => {
    let errorMessage = 'Somethig went wrong'
    if (error instanceof FirebaseError) {
        errorMessage = error.code.split('/')[1].split("-").join(" ")
    }
    return {error: {reason: errorMessage}}
}