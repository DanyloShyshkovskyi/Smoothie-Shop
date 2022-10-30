import {ICartProduct} from "../../types/product.types";
import {EMAIL_TEMPLATE_END, EMAIL_TEMPLATE_START} from "../templates/email.templeate";
import {summaryPrice} from "./array.helpers";

export const ProductListTemplate = (productData: ICartProduct[]) => {
    let ProductListString = EMAIL_TEMPLATE_START
    productData.forEach(item => {
        ProductListString += `
            <li>
                <img src="${item.src}" alt="${item.name}"/>
                <h1>${item.name}</h1>
                <p class="count">Count: <span>${item.count}</span></p>
                <p class="price">${item.price * item.count}$</p>
            </li>`
    })
    ProductListString += `</ul>`
    ProductListString += `<h2>Total price: <span>${summaryPrice(productData)}$</span></h2>`
    ProductListString += EMAIL_TEMPLATE_END
    return ProductListString
}
