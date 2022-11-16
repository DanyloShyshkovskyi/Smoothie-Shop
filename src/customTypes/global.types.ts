export interface IData<T> {
    data: T
}

export interface ICommunicate {
    isSuccess: boolean
    isError: boolean
}

export interface IError {
    error: {reason: string}
}