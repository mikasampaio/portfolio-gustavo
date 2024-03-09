import React from "react"

import Photo from "../../assets/webdiet.png"
import CardGroup from "../../components/Alert_card"
import {
  Container,
  ContainerItens,
  ContainerText,
} from "./styles"

export default function Alert() {
  return (
    <Container>
      <CardGroup />
      <ContainerItens>
        <ContainerText>
          {" "}
          <h1>ALÉM DA CONSULTA</h1>
          <p>
            Todos os meus pacientes ganham acesso a uma plataforma online com
            aulas em formato de áudio, vídeo e texto, com materiais educativos
            dentro dos seus assuntos de interesse.
          </p>
        </ContainerText>

        <img src={Photo} alt="photo-fone" />
      </ContainerItens>
    </Container>
  )
}
