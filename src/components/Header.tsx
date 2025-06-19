import React, { useState } from 'react';
import {
    HeaderContainer,
    NavContainer,
    Logo,
    LogoIcon,
    NavMenu,
    MobileMenuButton,
    MobileMenu,
    MobileNavLink,
    NavLink
} from '../styles/Header.styles';

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
                    <img src='img/oburgo-logotype.png' />
                    <span>OBurgo</span>
                </Logo>
                <NavMenu>
                    <NavLink onClick={() => scrollToSection('home')}>Início</NavLink>
                    <NavLink onClick={() => scrollToSection('whoiam')}>Sobre Nós</NavLink>
                    <NavLink onClick={() => scrollToSection('localization')}>Localização</NavLink>
                    <NavLink onClick={() => scrollToSection('contact')}>Contato</NavLink>
                </NavMenu>
                <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    ☰
                </MobileMenuButton>
                <MobileMenu isOpen={mobileMenuOpen}>
                    <MobileNavLink onClick={() => scrollToSection('home')}>Início</MobileNavLink>
                    <MobileNavLink onClick={() => scrollToSection('whoiam')}>
                        Sobre Nós
                    </MobileNavLink>
                    <MobileNavLink onClick={() => scrollToSection('localization')}>
                        Localização
                    </MobileNavLink>
                    <MobileNavLink onClick={() => scrollToSection('contact')}>
                        Contato
                    </MobileNavLink>
                </MobileMenu>
            </NavContainer>
        </HeaderContainer>
    );
};

export default Header;
