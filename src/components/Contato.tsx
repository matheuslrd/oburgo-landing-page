
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #ffffcb 0%, #fff8a3 100%);
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContactCard = styled.a`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(189, 1, 0, 0.2);
  }
`;

const ContactIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ContactTitle = styled.h3`
  color: #bd0100;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const ContactInfo = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.5;
`;

const Contato = () => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const phoneNumber = "(11) 9999-9999"; // Substitua pelo número real
  const instagramHandle = "@suahamburgueria"; // Substitua pelo handle real

  return (
    <Section id="contato">
      <Container>
        <SectionTitle>Entre em Contato</SectionTitle>
        <ContactGrid>
          <ContactCard 
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactIcon>📱</ContactIcon>
            <ContactTitle>WhatsApp</ContactTitle>
            <ContactInfo>
              Clique aqui para conversar conosco no WhatsApp!
              <br />
              Pedidos e dúvidas
            </ContactInfo>
          </ContactCard>

          <ContactCard href={`tel:${phoneNumber}`}>
            <ContactIcon>📞</ContactIcon>
            <ContactTitle>Telefone</ContactTitle>
            <ContactInfo>
              {phoneNumber}
              <br />
              Ligue diretamente para nós
            </ContactInfo>
          </ContactCard>

          <ContactCard 
            href={`https://instagram.com/${instagramHandle.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ContactIcon>📸</ContactIcon>
            <ContactTitle>Instagram</ContactTitle>
            <ContactInfo>
              {instagramHandle}
              <br />
              Siga-nos e veja nossas novidades!
            </ContactInfo>
          </ContactCard>
        </ContactGrid>
      </Container>
    </Section>
  );
};

export default Contato;
