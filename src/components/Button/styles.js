import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`

export const ContainerButton = styled.a`
  font-family: "Roswell Four ITC Std";
  font-size: 2em;
  padding: 1rem;
  cursor: pointer;
  background-color: #0d0d0d;
  color: #ffffff;

  border: inset 2px rgb(198, 198, 241);
  border-radius: 1rem;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`
