import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  margin-top: 80px;
  margin-bottom: 70px;
`

export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
  height: 85%;

  .rec.rec-arrow {
    background-color: #fff;
    color: #0067e4;
  }

  .rec.rec-arrow:hover {
    background-color: #0067e4;
    color: #fff;
  }

  .rec.rec-dot {
    box-shadow: 0 0 1px 3px #0067e4;
  }
`

export const Item = styled.div`
  color: #ffffff;
  font-size: 1.3rem;
  text-align: center;
  white-space: pre-line;

  @media screen and (min-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`
