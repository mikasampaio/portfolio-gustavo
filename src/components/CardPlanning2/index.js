import React from "react"

import {
  Container,
  ContainerNumber,
  ContainerText,
  ContainerTitle
} from "./styles"

export default function CardPlanning({ number, title, label, isColor }) {
  return (
    <Container>
      <ContainerNumber isColor={isColor}>{number}</ContainerNumber>
      <ContainerTitle isColor={isColor}>{title}</ContainerTitle>
      <ContainerText>{label}</ContainerText>
    </Container>
  )
}
