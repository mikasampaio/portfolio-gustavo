import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 50px 0;

  /* display: flex;
  margin-top: 40px;
  gap: 40px; */

  @media screen and (max-width: 430px) {
    flex-direction: column;
    gap: 15px;
  }
  /* 
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
`

export const ContainerItens = styled.div`
  display: flex;
  align-items: center;


`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 90vh;
  padding: 20px 30px;


`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #0067e4;
  border-radius: 0 0 30px 30px;
  text-align: center;
  width: 30vw;
  height: 70vh;
  padding: 0px 0px 20px 0;

  li {
    list-style: none;
    list-style-type: " ✔ ";
    text-align: left;
  }

  h5 {
    color: #ffffff;
    font-weight: bolder;
    font-size: 0.9rem;
    border-bottom: #000 2px solid;
    padding-bottom: 5px;
  }

  p {
    color: #ffffff;
    font-weight: bolder;
    font-size: 0.9rem;
  }

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10vh;
  width: 30vw;
  padding: 10px;
  font-weight: bolder;
  background-color: #f26400;

  @media screen and (max-width: 430px) {
    width: 100%;
  }
`
