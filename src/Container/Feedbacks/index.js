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
            Irmão, fora de brincadeira agora, queria agradecer pelo excelente
            trabalho... Apesar de ainda n ver resultado mas só sua atenção já
            nos deixa muito mais confiantes! PARABENS! <br/>@eng.lucaslima59<br/>
          </Item>
          <Item>
            Tô me dedicando, estou muito satisfeita e perdi 2kg, porém tô
            ficando exausta 😂 <br/>@jofsorris0<br/>
          </Item>
          <Item>
            Todo mundo fala que eu tô mais sequinha e com corpão, eu nunca fui
            tão feliz na minha vida. Fome? Existe no momento, por que eu tô
            treinando direito, sinto que celulite diminuiu viu! No mais, espero
            que daqui pro carnaval o projeto musa fitness esteja 1% melhor do
            que hoje.
          </Item>
          <Item>
            Cara! estou muito feliz com meus resultados, muito mesmo. Meus
            músculos estão mais aparentementes, até as pessoas estão comentando
            sobre isso. Adorei a dieta que tu passou, o treino foi muito bom,
            tenho sentido o meu corpo trabalhar!
          </Item>
          <Item>
            Máximo respeito que eu perdi mais celulite na coxa,essa parte
            interna aí me incomodava horrores. Eu perdi mais barriga e bochecha.
          </Item>
          <Item>
            Começando com 89.5KG em menos de um mês de cutting, batemos 85.8KG
            pela manhã em jejum. O físico está extremamente mais seco, consigo
            ver os cortes do físico ISSO EM MENOS DE UM MÊS. Extremamente focado
            e determinado a bater essa minha meta. Valeu irmão, tmj. ÓTIMO
            TRABALHO.
          </Item>
          <Item>
            Bom dia Gustavo, hoje faz 8 meses que começamos o trabalho de 115kg
            pra 102kg , só glória.
            <br />
            <br /> <br />
            @diegoppersonal
          </Item>
        </ReactElasticCarousel>
      </ContainerItens>
    </Container>
  )
}
