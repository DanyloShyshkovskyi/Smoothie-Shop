import styled from "styled-components";
import {device} from "@constants/mediaQuery.constants";

export const UserDetailsContainerStyle = styled.div`
  background: white;
  min-width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  text-align: left;
  border-radius: 5px;
  width: 100%;
  position: relative;
  min-height: 244px;
  overflow: hidden;

  ${device.tablet`
      flex-direction: column;
      min-width: 0;
    `}
`

export const UserNameStyle = styled.input`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  border: none;
  cursor: pointer;
  outline: none;
  
  &:focus {
    cursor: text;
    border-bottom: 2px solid black;
  }

  ${device.tablet`
      font-size: 20px;
      text-align: center;
    `}
`

export const UserEmailStyle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
  color: darkgrey;
  cursor: default;

  ${device.tablet`
      font-size: 16px;
      text-align: center;
    `}
`

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const LogOutButton = styled.div`
  background: transparent;
  border-radius: 10px;
  color: black;
  cursor: pointer;
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 10px 40px 10px 10px;
  
  ${device.tablet`
      background: transparent;
      color: transparent;
      text-align: center;
    `}

  &:after {
    content: '';
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzg0Ljk3MSAzODQuOTcxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzODQuOTcxIDM4NC45NzE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnIGlkPSJTaWduX091dCI+DQoJCTxwYXRoIGQ9Ik0xODAuNDU1LDM2MC45MUgyNC4wNjFWMjQuMDYxaDE1Ni4zOTRjNi42NDEsMCwxMi4wMy01LjM5LDEyLjAzLTEyLjAzcy01LjM5LTEyLjAzLTEyLjAzLTEyLjAzSDEyLjAzDQoJCQlDNS4zOSwwLjAwMSwwLDUuMzksMCwxMi4wMzFWMzcyLjk0YzAsNi42NDEsNS4zOSwxMi4wMywxMi4wMywxMi4wM2gxNjguNDI0YzYuNjQxLDAsMTIuMDMtNS4zOSwxMi4wMy0xMi4wMw0KCQkJQzE5Mi40ODUsMzY2LjI5OSwxODcuMDk1LDM2MC45MSwxODAuNDU1LDM2MC45MXoiLz4NCgkJPHBhdGggZD0iTTM4MS40ODEsMTg0LjA4OGwtODMuMDA5LTg0LjJjLTQuNzA0LTQuNzUyLTEyLjMxOS00Ljc0LTE3LjAxMSwwYy00LjcwNCw0Ljc0LTQuNzA0LDEyLjQzOSwwLDE3LjE3OWw2Mi41NTgsNjMuNDZIOTYuMjc5DQoJCQljLTYuNjQxLDAtMTIuMDMsNS40MzgtMTIuMDMsMTIuMTUxYzAsNi43MTMsNS4zOSwxMi4xNTEsMTIuMDMsMTIuMTUxaDI0Ny43NGwtNjIuNTU4LDYzLjQ2Yy00LjcwNCw0Ljc1Mi00LjcwNCwxMi40MzksMCwxNy4xNzkNCgkJCWM0LjcwNCw0Ljc1MiwxMi4zMTksNC43NTIsMTcuMDExLDBsODIuOTk3LTg0LjJDMzg2LjExMywxOTYuNTg4LDM4Ni4xNjEsMTg4Ljc1NiwzODEuNDgxLDE4NC4wODh6Ii8+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=);
    background-size: 16px;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 10px;
    top: 11px;
  }
`