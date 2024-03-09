import React from "react"

import Card from "../../components/CardPlanning"
import Title from "../../components/Title"
import { Container, ContainerItens } from "./styles"

export default function PlanAndValue() {
  const objects = [
    {
      // id: "01",
      title: "Avulso",
      subtitle: "1X R$ 320,00",
      label: "1 Consultoria por vídeo chamada"
    },
    {
      // id: "02",
      title: "Trimestral",
      subtitle: "3X R$ 250,00 OU R$700 NO PIX ",
      label:
        "(3 consultorias por vídeo chamada + CHECK-INS)"
    },
    {
      // id: "03",
      title: "Semestral",
      subtitle: "6X R$ 230,00 OU R$1320 NO PIX",

      label:
        "(6 Consultorias por vídeo chamada + CHECK-INS)"
    },
    {
      // id: "03",
      title: "Pix ou boleto",
      label:
        "Caso opte pelo pagamento via Pix ou Boleto, deve ser feito integralmente na primeira consulta. Parcelamento somente via cartão de crédito.",
    }
  ]

  return (
    <Container>
      <Title label="" span="PLANOS E VALORES" />
      <ContainerItens>
        {objects.map(({ id, title, label, subtitle }, index) => (
          <Card
            key={index}
            number={id}
            title={title}
            subTitle={subtitle}
            label={label}
          />
        ))}
      </ContainerItens>
    </Container>
  )
}
