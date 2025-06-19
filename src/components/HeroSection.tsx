
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, #ffffcb 0%, #fff8a3 100%);
  padding: 4rem 0;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: #bd0100;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(189, 1, 0, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(189, 1, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Bem-vindos à Nossa Hamburgueria!</HeroTitle>
        <HeroSubtitle>
          Sabores autênticos que fazem você se sentir em casa
        </HeroSubtitle>
        <CTAButton onClick={scrollToContact}>
          Entre em Contato
        </CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
