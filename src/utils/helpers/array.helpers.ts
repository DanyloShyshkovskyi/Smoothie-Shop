import {ICartIdProduct} from "../../types/product.types";

export const cartProductLength = (array: ICartIdProduct[]) => {
    let count = 0
    array.forEach(product => {
        count += product.count
    })
    return count
}