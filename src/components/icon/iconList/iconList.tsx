import {FORM_ICONS} from "../../../utils/constants/iconList.constants";
import {IconItem} from "../iconItem/iconItem";
import {IconListStyle} from "./iconList.style";

export const IconList = () => {
    return (
        <IconListStyle>
            {FORM_ICONS.map((icon, index)=>
        <IconItem key={index} src={icon.scr} alt={icon.alt}/>
    )}
        </IconListStyle>)
}