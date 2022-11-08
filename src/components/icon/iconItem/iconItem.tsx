import {IconItemStyle} from "./iconItem.style";

interface IIconItem {
    src: string,
    alt: string,
    onClick: () => void
}

export const IconItem = ({src, alt, onClick}: IIconItem) => {
    return (
        <IconItemStyle onClick={onClick}>
            <img src={src} alt={alt}/>
        </IconItemStyle>

    )
}