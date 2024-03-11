import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  img {
    width: 50%;
    -webkit-mask-image: linear-gradient(to top, transparent 7%, black 30%);
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;

    img{
      width: 85vw;
      height: 50vh;
    }

    
  }
`

export const SubPhoto = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  img {
    width: 30vw;
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 70vw;
      height: 50vh;
    }

    
  }


`
