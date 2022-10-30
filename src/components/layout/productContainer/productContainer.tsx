import React, {useState} from 'react';
import {ProductContainerView, SliderArrow} from "./productContainer.style";
import {useGetProductsQuery} from "../../../services/Actions/product.action";
import {ProductSlide} from "../../product/productSlide/ProductSlide";
import PrevArrowSrc from "../../../assets/icons/left-arrow.png"
import NextArrowSrc from "../../../assets/icons/right-arrow.png"
import {BottleLoaderSvg} from "../../loaders/bottleLoader/bottleLoader.svg";
import {useTypedSelector} from "../../../store/useTypedSelector";
import {Leaves} from "../../leaves/leaves";
import useUpdateCart from "../../../services/hooks/useUpdateCart";

const infinity = true // set to false to remove infinity slide

const ProductContainer = () => {
    // RTK Query response
    const {data: productData} = useGetProductsQuery(null)

    // Redux state
    const {isOpen: isLoading} = useTypedSelector(state => state.mainLoader)

    // React state
    const [count, setCount] = useState<number>(0)

    // Custom Hook to update users cart data
    useUpdateCart()

    // Increase decrease functions
    const increaseCount = () =>
        setCount(prev => (productData && prev === productData.length - 1) ? 0 : prev + 1)

    const decreaseCount = () =>
        setCount(prev => (productData && prev === 0) ? productData.length - 1 : prev - 1)

    return (
            <ProductContainerView>
                {isLoading && <BottleLoaderSvg/>}
                <>
                    <SliderArrow
                        next
                        src={NextArrowSrc}
                        disabled={!infinity && productData && count === productData.length - 1}
                        onClick={increaseCount}
                    />
                    <ProductSlide
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
                    <Leaves loaded={isLoading}/>
                </>
            </ProductContainerView>
    );
};

export default ProductContainer;