
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(189, 1, 0, 0.3);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: #ffffcb;
  font-size: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoIcon = styled.div`
  background: #ffffcb;
  color: #bd0100;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #ffffcb;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: white;
    transform: translateY(-2px);
  }
`;

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo>
          <LogoIcon>🍔</LogoIcon>
          <span>OBurgo</span>
        </Logo>
        <NavMenu>
          <NavLink onClick={() => scrollToSection('inicio')}>Início</NavLink>
          <NavLink onClick={() => scrollToSection('quem-somos')}>Sobre Nós</NavLink>
          <NavLink onClick={() => scrollToSection('localizacao')}>Localização</NavLink>
          <NavLink onClick={() => scrollToSection('contato')}>Contato</NavLink>
        </NavMenu>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
