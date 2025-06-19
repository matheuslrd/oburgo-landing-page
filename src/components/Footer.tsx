
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
  color: white;
  padding: 2rem 0 1rem;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterContent = styled.div`
  margin-bottom: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const FooterText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1.5rem 0;
`;

const SocialLink = styled.a`
  color: #ffffcb;
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
    color: white;
  }
`;

const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 203, 0.3);
  padding-top: 1rem;
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterTitle>🍔 Nossa Hamburgueria</FooterTitle>
          <FooterText>
            Sabores autênticos que fazem você se sentir em casa.
            <br />
            Venha nos visitar e faça parte da nossa família!
          </FooterText>
          
          <SocialLinks>
            <SocialLink 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              📱
            </SocialLink>
            <SocialLink 
              href="https://instagram.com/suahamburgueria" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Instagram"
            >
              📸
            </SocialLink>
            <SocialLink 
              href="tel:(11)999999999"
              title="Telefone"
            >
              📞
            </SocialLink>
          </SocialLinks>
        </FooterContent>
        
        <Copyright>
          © {currentYear} Hamburgueria. Todos os direitos reservados.
          <br />
          Desenvolvido com ❤️ para levar sabor até você!
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
