/* eslint-disable */
import React from "react"
import { Container, Phone, PhoneText, PhoneImg } from "./styles"
import CardGroup from "../../components/Alert_card"
import Photo from "../../assets/webdiet.png"

export default function Alert() {
  return (
    <Container>
      <CardGroup />
      <PhoneImg>
        <PhoneText>
          <Phone>
            <h1>ALÉM DA CONSULTA</h1>
          </Phone>
          <p>
            Todos os meus pacientes ganham acesso a uma plataforma online com
            aulas em formato de áudio, vídeo e texto, com materiais educativos
            dentro dos seus assuntos de interesse.
          </p>
        </PhoneText>
        <img src={Photo} alt="photo-fone" />
      </PhoneImg>
    </Container>
  )
}
