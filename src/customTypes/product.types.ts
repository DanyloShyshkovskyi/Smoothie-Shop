export interface IProduct {
    name: string,
    price: number,
    ingredients: [string],
    description: string,
    src: string,
    id: string
}

export interface ICartProduct extends IProduct {
    count: number;
}

export interface ICartIdProduct {
    id: IProduct['id']
    count: number;
}