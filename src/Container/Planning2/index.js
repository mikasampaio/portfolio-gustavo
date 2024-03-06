import React from "react"

import Card from "../../components/CardPlanning2"
import Title from "../../components/Title"
import { Container, ContainerItens } from "./styles"

export default function Planning() {
  const objects = [
    {
      id: "Avulso",
      title: "1x R$320,00",
      label:
        "1 Consultoria por vídeo chamada"
    },
    {
      id: "Trimestral",
      title: "3x R$ 250,00 ou R$700 no pix (3 reuniões + check-ins)",
      label:
        "3 Consultorias por vídeo chamada"
    },
    {
      id: "Semestral",
      title: "6X R$ 230,00 ou R$1320 no pix (6 reuniões + check-ins)",
      label:
      "6 Consultorias por vídeo chamada."
    }
  ]

  return (
    <Container>
      <Title label="Plano e Valores" span="INDIVIDUALIZADO" />
      <ContainerItens>
        {objects.map(({ id, title, label }, index) => (
          <Card key={index} number={id} title={title} label={label} />
        ))}
      </ContainerItens>
    </Container>
  )
}
