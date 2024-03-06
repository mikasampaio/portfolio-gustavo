/* eslint-disable */
import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 40px;
  min-height: 150vh;

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
 
`

export const ContainerItens = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    

`

export const CardBody = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 65px;

    background-color: #0057dc;
    border-radius: 15%;
    text-align: center;
    height: 60vh;
    width: 25vw;
    padding: 0px 20px 0px 20px;

    li{
        list-style: none;
        list-style-type: " ✔ ";
        text-align: left;
    }


h5{
    
    color: #ffffff;
    font-weight: bolder;
    font-size: 20px;
    border-bottom: #000 2px solid;
}

p{
    color: #ffffff;
    font-weight: bolder;
    font-size: 15px;
}

`

export const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;


    width: 25vw;
    height: 10vh;
    font-weight: bolder;
    background-color: #f26400;

`

