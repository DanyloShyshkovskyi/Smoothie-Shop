import React, {useState} from 'react';
import {ProductContainerView, SliderArrow} from "./productContainer.style";
import {useGetProductsQuery} from "@services/Actions/product.action";
import {PrevArrowSrc, NextArrowSrc} from "@assets/icons"
import {BottleLoaderSvg} from "@components/loaders";
import {Leaves} from "@components/leaves/leaves";
import useUpdateCart from "@services/hooks/useUpdateCart";
import {useSwipeable} from "react-swipeable";
import { ProductSlide } from '@components/product';

const infinity = true // set to false to remove infinity slide

export const ProductContainer = () => {
    // RTK Query response
    const {data: productData} = useGetProductsQuery(null)

    // React state
    const [count, setCount] = useState<number>(0)
    const [imageLoading, setImageLoading] = useState(true)

    // Custom Hook to update users cart data
    useUpdateCart()

    // Increase decrease count functions
    const increaseCount = () =>
        setCount(prev => (productData && prev === productData.length - 1) ? 0 : prev + 1)

    const decreaseCount = () =>
        setCount(prev => (productData && prev === 0) ? productData.length - 1 : prev - 1)

    // Swappable function (mobile)
    const handlers = useSwipeable({
        onSwipedLeft: increaseCount,
        onSwipedRight: decreaseCount,
    });

    return (
        <ProductContainerView {...handlers}>
            {imageLoading && <BottleLoaderSvg/>}
            <>
                <SliderArrow
                    next
                    src={NextArrowSrc}
                    disabled={!infinity && productData && count === productData.length - 1}
                    onClick={increaseCount}
                />
                <Leaves loaded={imageLoading}/>
                <ProductSlide
                    loadingParams={{setImageLoading, imageLoading}}
                    productDetails={productData && productData[count]}
                    counts={{
                        count,
                        maxCount: productData ? productData.length : 0
                    }}
                />
                <SliderArrow
                    prev
                    src={PrevArrowSrc}
                    disabled={!infinity && productData && count === 0}
                    onClick={decreaseCount}
                />
            </>
        </ProductContainerView>
    );
};