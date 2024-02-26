/* eslint-disable */

import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 31px;
  border: solid 1px red;
  color: #ffffff;

  @media (min-width: 768px) {
    flex-direction: row;  
  }
`;

export const PhoneText = styled.div`
  margin: 10px;
  text-align: center;
  width: 100%;
  color: #ffffff;

  @media (min-width: 768px) {
    width: 50%;  
  }
`;

export const PhoneImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid 1px red;
  width: 100%;  

  @media (min-width: 768px) {
    width: 50%;  
  }
`;

