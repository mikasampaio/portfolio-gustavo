import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 20vw;
    border-radius: 10%;
  }

  @media screen and (max-width: 420px) {
    img {
      width: 100%;
    }
  }
`

export const ContainerItens = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 100%;

  @media screen and (max-width: 767px) {
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  width: 50vw;

  h1 {
    font-family: "Roswell Four ITC Std";
    font-size: 5rem;
  }

  p {
      font-size: 1rem;
    }

  @media screen and (max-width: 420px) {
    width: 100%;
    text-align: center;

    p {
      font-size: 0.9rem;
    }
  }
`