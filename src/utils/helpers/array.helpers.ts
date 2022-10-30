import {ICartIdProduct, ICartProduct, IProduct} from "../../types/product.types";
import {defaultProduct} from "../constants/product.constants";

export const cartProductLength = (array: ICartIdProduct[]) => {
    let count = 0
    array.forEach(product => {
        count += product.count
    })
    return count
}

export const summaryPrice = (array: ICartProduct[]) => {
    let summaryPrice = 0
    array.forEach(product => {
        summaryPrice += product.count * product.price
    })
    return summaryPrice
}

export const fromIdToProduct = (cartProduct: ICartIdProduct, productData: IProduct[]): ICartProduct => {
    const product: IProduct = productData.find(x => x.id === cartProduct.id) || defaultProduct;
    return  {...product, count: cartProduct.count}
}

export const fromIdArrayToProduct = (cartProducts: ICartIdProduct[], productData: IProduct[]): ICartProduct[] =>
    cartProducts.map(cartProduct => fromIdToProduct(cartProduct, productData))