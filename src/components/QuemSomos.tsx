
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
  background: white;
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
  margin-bottom: 3rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
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

const ImagePlaceholder = styled.div`
  background: linear-gradient(135deg, #ffffcb 0%, #fff8a3 100%);
  border: 2px dashed #bd0100;
  border-radius: 15px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bd0100;
  font-weight: bold;
  font-size: 1.1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    height: 200px;
    font-size: 1rem;
  }
`;

const QuemSomos = () => {
  return (
    <Section id="quem-somos">
      <Container>
        <SectionTitle>Quem Somos</SectionTitle>
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
            <Paragraph>
              Venha conhecer nosso espaço e descobrir por que somos a 
              hamburgueria preferida do bairro!
            </Paragraph>
          </TextContent>
          <ImagePlaceholder>
            🍔 ESPAÇO PARA FOTO DA HAMBURGUERIA 📸
          </ImagePlaceholder>
        </Content>
      </Container>
    </Section>
  );
};

export default QuemSomos;
