import React, { useRef } from "react"
import ReactElasticCarousel from "react-elastic-carousel"

import Title from "../../components/Title"
import { Container, ContainerItens, Item } from "./styles"

export default function Feedback() {
  return (
    <Container>
      <Title label="DEPOIMENTOS" span="" />
      <ContainerItens>
        <ReactElasticCarousel enableAutoPlay autoPlaySpeed={6000}>
          <Item>
            Nutri bom dia, todo mundo me falando que estou mais magra.
            Fui me pesar e já perdi 3kg e só têm 1 mês eu seguindo a dieta.
          </Item>
          <Item>
            Você é foda! Brigadão pela atenção, pela parceria. Já tô ansioso pra ir no mercado comprar tudo novo.
          </Item>
          <Item>
            Todo mundo fala que eu tô mais sequinha e com corpão, eu nunca fui tão feliz na minha vida.
            Fome? Existe no momento, por que eu tô treinando direito, sinto que celulite diminuiu viu! No mais, espero que daqui
            pro carnaval o projeto musa fitness esteja 1% melhor do que hoje.
          </Item>
          <Item>
            Cara! estou muito feliz com meus resultados, muito mesmo. Meus músculos estão mais aparentementes, até as pessoas
            estão comentando sobre isso. 
            Adorei a dieta que tu passou, o treino foi muito bom, tenho sentido o meu corpo trabalhar!
          </Item>
          <Item>
            Máximo respeito que eu perdi mais celulite na coxa,essa parte interna aí me incomodava horrores.
            Eu perdi mais barriga e bochecha.
          </Item>
          <Item>
            Começando com 89.5KG em menos de um mês de cutting, batemos 85.8KG pela manhã em jejum.
            O físico está extremamente mais seco, consigo ver os cortes do físico ISSO EM MENOS DE UM MÊS.
            Extremamente focado e determinado a bater essa minha meta. Valeu irmão, tmj. ÓTIMO TRABALHO.
          </Item>
        </ReactElasticCarousel>
      </ContainerItens>
    </Container>
  )
}
