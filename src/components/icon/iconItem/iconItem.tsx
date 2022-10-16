import {IconItemStyle} from "./iconItem.style";

interface IIconItem {
    src: string,
    alt: string
}

export const IconItem = ({src, alt}: IIconItem) => {
    return (
        <IconItemStyle>
            <img src={src} alt={alt}/>
        </IconItemStyle>

    )
}