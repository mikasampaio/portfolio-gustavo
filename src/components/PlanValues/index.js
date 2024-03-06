/* eslint-disable */
import React from 'react';
import { Container, ContainerItens, CardBody, CardBodySecond, Icon, CardBottom, ItensSecond} from "./styles"
import CardPlanning from '../CardPlanning';



const CardGroup = () => {
    return (

        <Container>
        <ContainerItens>
                <CardBody>
                    <h5 className="card-title">Consulta Avulsa</h5>
                    <p className="card-text">1x R$ 320,00</p>
                    <CardBodySecond>
                        <Icon>+</Icon>
                        <p className="card-text"><small className="text-body-secondary">1 Consultoria por vídeo chamada</small></p>
                    </CardBodySecond>
                </CardBody>
            </ContainerItens>

            <ContainerItens>

                <CardBody>
                    <h5 className="card-title">Trimestral</h5>
                    <p className="card-text">3x R$ 250,00 ou R$700 no pix (3 reuniões + check-ins)</p>
                    <CardBodySecond>
                    <Icon>+</Icon>
                    <p className="card-text"><small className="text-body-secondary">3 Consultoria por vídeo chamada</small></p>
                    </CardBodySecond>
                    
                </CardBody>
            </ContainerItens>

            <ContainerItens>
                <CardBody>
                    <h5 className="card-title">Semestral</h5>
                    <p className="card-text">6X R$ 230,00 ou R$1320 no pix (6 reuniões + check-ins)</p>
                    <CardBodySecond>
                    <Icon>+</Icon>
                    <p className="card-text"><small className="text-body-secondary">6 Consultoria por vídeo chamada</small></p>

                    </CardBodySecond>
                </CardBody>
            </ContainerItens>


            <ItensSecond>
                <CardBottom>
                    <h5 className="card-title">PIX ou Boleto</h5>
                    <p className="card-text">Caso opte pelo pagamento via pix ou boleto, de ser feito integralmente na primeira consulta.</p>
                    <p className="card-text"><small className="text-body-secondary">Parcelamento somente via cartão de crédito</small></p>
                </CardBottom>
            </ItensSecond>


        </Container>
    );
};

export default CardGroup;
