import {
    ProductButton,
    ProductDescription,
    ProductFindText,
    ProductImg,
    ProductTitle,
    SliderCount
} from "./ProductSlide.style";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import {addToCartAnimation, useProductAnimation} from "@animation/product.animation";
import {IProduct} from "@customTypes/product.types";
import {useActions} from "@store/useActions";
import {defaultProduct} from "@constants/product.constants";

type IProductSlide = {
    productDetails: IProduct | undefined
    counts: {
        count: number,
        maxCount: number
    }
    loadingParams: {
        setImageLoading: Dispatch<SetStateAction<boolean>>
        imageLoading: boolean
    }
}

export const ProductSlide = ({productDetails = defaultProduct, counts, loadingParams}: IProductSlide) => {
    //Refs
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const priceRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    // Actions
    const {addToCart} = useActions()

    // React state
    const [disabled, setDisabled] = useState(false)
    const {setImageLoading, imageLoading} = loadingParams

    // Animations
    useProductAnimation(
        {titleRef, descriptionRef, imageRef, priceRef},
        {productDetails, disabled},
        imageLoading
    )

    const onAnimationStart = () => setDisabled(true)
    const onAnimationEnd = () =>
        setTimeout(() => {
            setDisabled(false)
            addToCart(productDetails.id)
        }, 400)

    const addToCartClick = () =>
        addToCartAnimation(imageRef, onAnimationStart, onAnimationEnd)

    return (
        <>
            <nav>
                <SliderCount data-testid={'productMaxCount'}><span
                    data-testid={'productCount'}>{counts.count + 1}</span> / {counts.maxCount}</SliderCount>
                <ProductFindText data-testid={'productPrice'}><span
                    ref={priceRef}>{productDetails?.price} $</span></ProductFindText>
                <div/>
            </nav>
            <ProductTitle data-testid={'productTitle'} ref={titleRef}>{productDetails?.name}</ProductTitle>
            <ProductImg
                data-testid={'productImage'}
                ref={imageRef}
                src={productDetails?.src}
                alt={"product-img"}
                onLoad={() => setImageLoading(false)}
            />
            <article>
                <ProductButton data-testid={'productButton'} disabled={disabled} onClick={addToCartClick}>Add To
                    Cart &#8593;</ProductButton>
                <ProductDescription>
                    <h1>Your <span>healthy</span> life start with us</h1>
                    <span ref={descriptionRef}>{productDetails?.description}</span>
                </ProductDescription>
            </article>
        </>
    )
}