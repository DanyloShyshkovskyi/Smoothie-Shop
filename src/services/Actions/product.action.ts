import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react'
import {db} from "@services/firebase/firebase.config";
import {collection, getDocs} from "firebase/firestore"
import {IProduct} from "@customTypes/product.types";

export const productAction = createApi({
    reducerPath: "products",
    baseQuery: fakeBaseQuery(),
    endpoints: (build) => ({
        getProducts: build.query<IProduct[], null>({
            async queryFn() {
                try {
                    const productsCollection = collection(db, "products");
                    const result = await getDocs(productsCollection);
                    const convertResult = result.docs.map((doc) => ({...doc.data() as IProduct}))
                    return {data: convertResult}
                } catch (e) {
                    return {error: {reason: 'too cold'}}
                }
            },
            async onQueryStarted(arg: null, {queryFulfilled}) {
                try {
                    const {data: productData} = await queryFulfilled
                    const imageSrcs = productData.map(product => product.src)
                    const randomStr = Math.random().toString(32).slice(2) + Date.now();
                    window.usePreloadImagesData = window.usePreloadImagesData ?? {};
                    window.usePreloadImagesData[randomStr] = [];
                    for (const src of imageSrcs) {
                        const img = new Image();
                        img.src = src;
                        window.usePreloadImagesData[randomStr].push(img);
                    }
                } catch {
                }
            }
        }),
    }),
})

export const {useGetProductsQuery} = productAction