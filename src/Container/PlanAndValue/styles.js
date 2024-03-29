import styled from "styled-components"

export const Container = styled.div`
  padding-bottom: 50px;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerItens = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
  align-items: center;
  grid-gap: 10px;

  @media screen and (min-width: 1351px) {
    grid-template-columns: repeat(4, 350px);
    grid-gap: 30px;
  }

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 350px);
    grid-gap: 30px;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
  }
`
