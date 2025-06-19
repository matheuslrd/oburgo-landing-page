
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
  justify-content: center;
  align-items: center;
`;

const LogoPlaceholder = styled.div`
  background: #ffffcb;
  border: 3px dashed #bd0100;
  border-radius: 12px;
  padding: 1rem 2rem;
  color: #bd0100;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(189, 1, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.5rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <LogoPlaceholder>
          🍔 SUBSTITUA PELA SUA LOGO AQUI 🍔
        </LogoPlaceholder>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
