import React from 'react';
import {
    Section,
    Container,
    SectionTitle,
    SectionSubtitle,
    Content,
    TextContent,
    Paragraph,
    HighlightBox,
    ImageContainer,
    ImagePlaceholder
} from '../styles/WhoIAm.styles';

const QuemSomos = () => {
    return (
        <Section id='whoiam'>
            <Container>
                <SectionTitle>Sobre Nossa História</SectionTitle>
                <SectionSubtitle>
                    Conheça a paixão por trás de cada hambúrguer que servimos
                </SectionSubtitle>
                <Content>
                    <TextContent>
                        <Paragraph>
                            Nascemos da união de dois primos que se juntaram
                            para criar a melhor hamburgueria de Gravataí. Fundada em abril de 2021,
                            a OBurgo rapidamente se tornou uma referência local em hambúrgueres artesanais
                            de qualidade e atendimento acolhedor.
                        </Paragraph>
                        <Paragraph>
                            Nossa jornada teve uma pausa quando o negócio foi vendido para terceiros em 2023.
                            Mas a história não terminaria ali - em 2025, os primeiros idealizadores da OBurgo
                            retomaram o comando, trazendo de volta a essência e os sabores que conquistaram
                            Gravataí desde o início.
                        </Paragraph>
                        <HighlightBox>
                            <strong>
                                "Estamos de volta às nossas raízes, com o mesmo compromisso de qualidade
                                e a mesma paixão pelo hambúrguer perfeito!"
                            </strong>
                        </HighlightBox>
                    </TextContent>
                    <ImageContainer>
                        <img src='img/burgo.png' alt='O Burgo Hamburgueria' />
                    </ImageContainer>
                </Content>
            </Container>
        </Section>
    );
};

export default QuemSomos;
