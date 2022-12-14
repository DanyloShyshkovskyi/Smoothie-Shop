import styled  from 'styled-components'
import {HEADER_HEIGHT, ListReset, PADDING_DEFAULT, SPACE_DEFAULT} from "@helpers/style.helpers";
import {device} from "@constants/mediaQuery.constants";

export const NavBarView = styled.nav`
  background: white;
  width: 100%;
  top: 0;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: ${PADDING_DEFAULT}px;
  position: fixed;
  
  ${device.tablet`
        z-index: 2;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  `}
`

export const LogoView = styled.h1`
  font-size: 30px;
  font-weight: 800;
  text-transform: uppercase;

  ${device.tablet`
        font-size: 20px;
  `}
`

export const NavBarLinksView = styled(ListReset)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${SPACE_DEFAULT*2}px;

  ${device.tablet`
      gap: 20px
    `}
`

export const NavBarLinkView = styled.li`
  font-size: 14px;
  position: relative;
  cursor: pointer;
  
  &.userLink {
    img {
      display: none;
    }
    
    ${device.tablet`
        span {
          display: none;
        }
        
        img {
          display: block;
        }
    `}
  }
`

export const IconsView = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`
export const CartCircle = styled.div`
  width: 15px;
  height: 15px;
  background: #7fba41;
  position: absolute;
  border-radius: 50%;
  left: 10px;
  top: -5px;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  cursor: pointer;
`
