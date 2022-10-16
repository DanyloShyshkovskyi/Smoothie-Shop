import styled from "styled-components";

export const LeavesStyle = styled.img`
    position: fixed!important;

  &.leaf {
    &--01 {
      top: 45%!important;
      left: 60%!important;
    }
    &--02 {
      top: 10%!important;
      left: 10%!important;
    }
    &--03 {
      top: 10%!important;
      left: 70%!important;
    }
    &--04 {
      top: 80%!important;
      left: 20%!important;
    }
    &--05 {
      top: 65%!important;
      left: 75%!important;
    }
  }
`

export const LeavesScene = styled.div`
  position: fixed!important;
  height: 100vh;
  width: 100vw;
`