import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: -webkit-center;
  width: auto;
  background-color: rgb(0, 87, 220, 0.1);
  border-image: linear-gradient(
      14deg,
      rgba(26, 44, 144, 1) 30%,
      rgba(48, 93, 208, 1) 100%
    )
    30;
  border-width: 2px;
  border-style: solid;

  border: solid 1px red;
  height: 30vh;

  text-align: center;
`

export const ContainerTitle = styled.div`
  background: ${props =>
    props.isColorNumber
      ? "#000000"
      : "linear-gradient(14deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Roswell Four ITC Std";
  font-size: 2.5rem;
  text-transform: uppercase;
`

export const ContainerNumber = styled.div`
  font-family: "Montserrat", sans-serif;
  background: ${props =>
    props.isColorNumber
      ? "#000000"
      : "linear-gradient(14deg, rgba(26, 44, 144, 1) 20%, rgba(48, 93, 208, 1) 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
`

export const ContainerText = styled.div`
  color: #ffffff;
  font-weight: 600;
  padding: 10px;
  font-size: 0.9rem;
  text-align: center;
`
