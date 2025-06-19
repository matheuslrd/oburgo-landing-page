
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 5rem 0;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #bd0100;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  text-align: center;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ImagePlaceholder = styled.div`
  background: linear-gradient(135deg, #ffffcb 0%, #fff8a3 100%);
  border: 2px dashed #bd0100;
  border-radius: 15px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bd0100;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    height: 250px;
    font-size: 1rem;
  }
`;

const QuemSomos = () => {
  return (
    <Section id="quem-somos">
      <Container>
        <SectionTitle>Sobre Nossa História</SectionTitle>
        <SectionSubtitle>
          Conheça a paixão por trás de cada hambúrguer que servimos
        </SectionSubtitle>
        <Content>
          <TextContent>
            <Paragraph>
              Somos uma hamburgueria familiar que nasceu da paixão por criar 
              experiências gastronômicas únicas e acolhedoras. Cada hambúrguer 
              é preparado com ingredientes frescos e selecionados, porque 
              acreditamos que você merece o melhor.
            </Paragraph>
            <Paragraph>
              Nossa missão é simples: oferecer sabores autênticos em um 
              ambiente descontraído, onde cada cliente se sinta parte da 
              nossa família. Aqui, não servimos apenas hambúrgueres, 
              criamos momentos especiais.
            </Paragraph>
            <HighlightBox>
              <strong>
                "Venha conhecer nosso espaço e descobrir por que somos a 
                hamburgueria preferida do bairro!"
              </strong>
            </HighlightBox>
          </TextContent>
          <ImageContainer>
            <ImagePlaceholder>
              🍔 ESPAÇO PARA FOTO<br />DA HAMBURGUERIA 📸
            </ImagePlaceholder>
          </ImageContainer>
        </Content>
      </Container>
    </Section>
  );
};

export default QuemSomos;
