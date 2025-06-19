import React, { useState } from 'react';
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

const MobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: #ffffcb;
    font-size: 1.5rem;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
    display: none;

    @media (max-width: 768px) {
        display: ${(props) => (props.isOpen ? 'block' : 'none')};
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
        box-shadow: 0 4px 10px rgba(189, 1, 0, 0.3);
        padding: 1rem;
        z-index: 99;
    }
`;

const MobileNavLink = styled.a`
    display: block;
    color: #ffffcb;
    text-decoration: none;
    font-weight: 500;
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 203, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        color: white;
        background: rgba(255, 255, 203, 0.1);
    }

    &:last-child {
        border-bottom: none;
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false); // Fecha o menu após navegar
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
                <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    ☰
                </MobileMenuButton>
                <MobileMenu isOpen={mobileMenuOpen}>
                    <MobileNavLink onClick={() => scrollToSection('inicio')}>Início</MobileNavLink>
                    <MobileNavLink onClick={() => scrollToSection('quem-somos')}>
                        Sobre Nós
                    </MobileNavLink>
                    <MobileNavLink onClick={() => scrollToSection('localizacao')}>
                        Localização
                    </MobileNavLink>
                    <MobileNavLink onClick={() => scrollToSection('contato')}>
                        Contato
                    </MobileNavLink>
                </MobileMenu>
            </NavContainer>
        </HeaderContainer>
    );
};

export default Header;
