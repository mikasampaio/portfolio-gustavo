import React from "react"

import {
  Container,
  ContainerNumber,
  ContainerSubtitle,
  ContainerText,
  ContainerTitle
} from "./styles"

export default function CardPlanning({ number, title, subTitle, label, isColor }) {
  return (
    <Container>
      <ContainerNumber isColor={isColor}>{number}</ContainerNumber>
      <ContainerTitle isColor={isColor}>{title}</ContainerTitle>
      <ContainerSubtitle>{subTitle}</ContainerSubtitle>
      <ContainerText>{label}</ContainerText>
    </Container>
  )
}
