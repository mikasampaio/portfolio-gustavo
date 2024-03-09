import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  h1 {
    text-align: center;
    color: #ffffff;
    margin-top: 20px;
    border: solid 1px red;
  }
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

`

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-family: "Roswell Four ITC Std";
  font-size: 5rem;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 3rem;
  }
`

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    align-items: center;

  }
`

export const PhotoEnd = styled.div`
  img {
    -webkit-mask-image: linear-gradient(to top, transparent 5%, black 100%);
    width: 20rem;
  }
`
