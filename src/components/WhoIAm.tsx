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
                            Somos uma hamburgueria familiar que nasceu da paixão por criar
                            experiências gastronômicas únicas e acolhedoras. Cada hambúrguer é
                            preparado com ingredientes frescos e selecionados, porque acreditamos
                            que você merece o melhor.
                        </Paragraph>
                        <Paragraph>
                            Nossa missão é simples: oferecer sabores autênticos em um ambiente
                            descontraído, onde cada cliente se sinta parte da nossa família. Aqui,
                            não servimos apenas hambúrgueres, criamos momentos especiais.
                        </Paragraph>
                        <HighlightBox>
                            <strong>
                                "Venha conhecer nosso espaço e descobrir por que somos a
                                hamburgueria preferida do bairro!"
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
