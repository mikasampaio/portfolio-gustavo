import React from "react"

import Card from "../../components/CardPlanning"
import Title from "../../components/Title"
import { Container, ContainerItens } from "./styles"

export default function PlanAndV() {
  const objects = [
    {
      id: "01",
      title: "Objetivos saudáveis",
      label:
        "Utilizando plataformas online de sua preferência, como o Whatsapp ou o Meet, vamos agendar uma reunião exclusiva."
    },
    {
      id: "02",
      title: "Resultado desejado",
      label:
        "Durante essa reunião personalizada, vou mergulhar profundamente em seus hábitos alimentares e rotina diária."
    },
    {
      id: "03",
      title: "Praticidade na rotina",
      label:
        "Com base nas informações coletadas, iremos desenvolver um plano alimentar sob medida para você."
    }
  ]

  return (
    <Container>
      <Title label="PLANEJAMENTO ALIMENTAR" span="INDIVIDUALIZADO" />
      <ContainerItens>
        {objects.map(({ id, title, label }, index) => (
          <Card key={index} number={id} title={title} label={label} />
        ))}
      </ContainerItens>
    </Container>
  )
}
