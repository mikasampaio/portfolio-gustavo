import React from "react"

import {
  Container,
  ContainerItens,
  CardBody,
  CardBodySecond,
  Icon,
  CardBottom,
  ItensSecond,
  ContainerText
} from "./styles"

const CardGroup = () => {
  return (
    <Container>
      <ContainerItens>
        <CardBody>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="66"
              height="40"
              fill="currentColor"
              className="bi bi-exclamation-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
            </svg>
          </Icon>
          <ContainerText>
            <h5 className="card-title">
              Receba alertas com lembrete de refeições, consumo de água, e um
              guia com a quantidade exata para a substituição dos alimentos que
              escolhermos trabalhar em nosso plano!
            </h5>
            <p className="card-text">
              É válido lembrar que também entregamos em versão PDF para os que
              desejarem imprimir o plano e colar na geladeira, por exemplo.
            </p>
          </ContainerText>
        </CardBody>
      </ContainerItens>

      <ContainerItens>
        <CardBody>
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="66"
              height="40"
              fill="currentColor"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
          </Icon>
          <ContainerText>
            {" "}
            <h5 className="card-title">
              Envio de formulários interativos avaliando:
            </h5>
            <p className="card-text">
              <ul>
                <li>✔ Sono</li>
                <li>✔ Hidratação</li>
                <li>✔ Mastigação</li>
                <li>✔ Frequência de treinos</li>
              </ul>
            </p>
            <p>
              Isso permite ficar inteirado da situação e saber se precisamos
              fazer alterações no planejamento em prol de alguma melhoria
              necessária.
            </p>
          </ContainerText>
        </CardBody>
      </ContainerItens>
    </Container>
  )
}

export default CardGroup
