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

const ProductContainer = () => {
    const {isOpen: isLoading} = useTypedSelector(state => state.mainLoader)
    const {data: productData} = useGetProductsQuery(null)
    const [count, setCount] = useState<number>(0)

    useUpdateCart()

    return (
            <ProductContainerView>
                {isLoading && <BottleLoaderSvg/>}
                <>
                    <SliderArrow
                        next
                        src={NextArrowSrc}
                        disabled={productData && count === productData.length - 1}
                        onClick={() => setCount(prev => prev + 1)}
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
                        disabled={productData && count === 0}
                        onClick={() => setCount(prev => prev - 1)}
                    />
                    <Leaves loaded={isLoading}/>
                </>
            </ProductContainerView>
    );
};

export default ProductContainer;