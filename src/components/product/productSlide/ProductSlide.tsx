import {
    ProductButton,
    ProductDescription,
    ProductFindText,
    ProductImg,
    ProductTitle,
    SliderCount
} from "./ProductSlide.style";
import {useRef, useState} from "react";
import {useProductAnimation} from "../../../utils/animation/product.animation";
import {IProduct} from "../../../types/product.types";
import {useActions} from "../../../store/useActions";
import {defaultProduct} from "../../../utils/constants/product.constants";
import gsap from "gsap";

type IProductSlide = {
    productDetails: IProduct | undefined
    counts: {
        count: number,
        maxCount: number
    }
}

export const ProductSlide = ({productDetails = defaultProduct, counts}: IProductSlide) => {
    const titleRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const priceRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const {closeLoader, addToCart} = useActions()
    const [disabled, setDisabled] = useState(false)

    useProductAnimation(
        {titleRef, descriptionRef, imageRef, priceRef},
        {productDetails, disabled}
    )


    const addToCartClick = () => {
        gsap.fromTo(imageRef.current,
            {y: 70},
            {
                y: -1000,
                ease: 'back.in(1.7)',
                duration: 0.5,
                overwrite: true,
                onStart: () => {
                    setDisabled(true)
                },
                onComplete: function () {
                    setTimeout(() => {
                        addToCart(productDetails.id)
                        setDisabled(false)
                    }, 400)
                }
            })
    }

    return (
        <>
            <nav>
                <SliderCount><span>{counts.count + 1}</span> / {counts.maxCount}</SliderCount>
                <ProductFindText><span ref={priceRef}>{productDetails?.price} $</span></ProductFindText>
                <div/>
            </nav>
            <ProductTitle ref={titleRef}>{productDetails?.name}</ProductTitle>
            <ProductImg
                ref={imageRef}
                src={productDetails?.src}
                alt={"product-img"}
                onLoad={() => closeLoader()}
            />
            <article>
                <ProductButton disabled={disabled} onClick={addToCartClick}>Add To Cart &#8593;</ProductButton>
                <ProductDescription>
                    <h1>Your <span>healthy</span> life start with us</h1>
                    <span ref={descriptionRef}>{productDetails?.description}</span>
                </ProductDescription>
            </article>
        </>
    )
}