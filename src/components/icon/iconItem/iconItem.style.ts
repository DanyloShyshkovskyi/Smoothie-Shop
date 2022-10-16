import styled from "styled-components";

export const IconItemStyle = styled.div`
  border: 1px solid darkgrey;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 80ms ease-in;
  box-sizing: border-box;
  
  &:hover {
    border: 1.5px solid rgba(15,107,12,1);
  }
  
  img {
    width: 20px;
    height: 20px;
  }
`