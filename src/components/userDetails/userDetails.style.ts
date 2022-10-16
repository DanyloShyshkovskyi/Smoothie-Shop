import styled from "styled-components";

export const UserDetailsStyle = styled.div`
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
`

export const UserImageStyle = styled.img`
  background: darkgrey;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

export const UserNameStyle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
`

export const UserEmailStyle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const LogOutButton = styled.div`
  background: black;
  padding: 10px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
  padding-right: 40px;
  
  &:after {
    content: '';
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjI4OCIgaGVpZ2h0PSIyODgiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjg4IiBoZWlnaHQ9IjI4OCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzg0Ljk3MSAzODQuOTcxIiB2aWV3Qm94PSIwIDAgMzg0Ljk3MSAzODQuOTcxIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTgwLjQ1NSwzNjAuOTFIMjQuMDYxVjI0LjA2MWgxNTYuMzk0YzYuNjQxLDAsMTIuMDMtNS4zOSwxMi4wMy0xMi4wM3MtNS4zOS0xMi4wMy0xMi4wMy0xMi4wM0gxMi4wMwoJCQlDNS4zOSwwLjAwMSwwLDUuMzksMCwxMi4wMzFWMzcyLjk0YzAsNi42NDEsNS4zOSwxMi4wMywxMi4wMywxMi4wM2gxNjguNDI0YzYuNjQxLDAsMTIuMDMtNS4zOSwxMi4wMy0xMi4wMwoJCQlDMTkyLjQ4NSwzNjYuMjk5LDE4Ny4wOTUsMzYwLjkxLDE4MC40NTUsMzYwLjkxeiIgY2xhc3M9ImNvbG9yMDAwIHN2Z1NoYXBlIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTM4MS40ODEsMTg0LjA4OGwtODMuMDA5LTg0LjJjLTQuNzA0LTQuNzUyLTEyLjMxOS00Ljc0LTE3LjAxMSwwYy00LjcwNCw0Ljc0LTQuNzA0LDEyLjQzOSwwLDE3LjE3OWw2Mi41NTgsNjMuNDZIOTYuMjc5CgkJCWMtNi42NDEsMC0xMi4wMyw1LjQzOC0xMi4wMywxMi4xNTFjMCw2LjcxMyw1LjM5LDEyLjE1MSwxMi4wMywxMi4xNTFoMjQ3Ljc0bC02Mi41NTgsNjMuNDZjLTQuNzA0LDQuNzUyLTQuNzA0LDEyLjQzOSwwLDE3LjE3OQoJCQljNC43MDQsNC43NTIsMTIuMzE5LDQuNzUyLDE3LjAxMSwwbDgyLjk5Ny04NC4yQzM4Ni4xMTMsMTk2LjU4OCwzODYuMTYxLDE4OC43NTYsMzgxLjQ4MSwxODQuMDg4eiIgY2xhc3M9ImNvbG9yMDAwIHN2Z1NoYXBlIi8+PC9zdmc+PC9zdmc+);
    background-size: 16px;
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    position: absolute;
  }
`