import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  gap: 30px;

  height: 30vh;

  padding: 20px;

  text-align: center;
`

export const ContainerTitle = styled.div`
  background: ${props =>
    props.isColorNumber
      ? "#000000"
      : "linear-gradient(14deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  
  font-family: "Montserrat", sans-serif;

  font-size: 1.3rem;

  width: 20vw;
  height: 100vh;

  text-align: center;
  margin-top: 10%;

  


`

export const ContainerNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Montserrat", sans-serif;
  background: ${props =>
    props.isColorNumber
      ? "#000000"
      : "linear-gradient(14deg, rgba(26, 44, 144, 1) 20%, rgba(48, 93, 208, 1) 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.0rem;
  text-transform: uppercase;

  border-bottom: solid 4px #f26400;



`

export const ContainerText = styled.div`
  color: #ffffff;
  font-weight: 500;
  padding: 10px;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
`
