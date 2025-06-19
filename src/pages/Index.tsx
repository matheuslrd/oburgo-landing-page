import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhoIAm from '../components/WhoIAm';
import Contact from '../components/Contact';
import Localization from '../components/Localization';
import Hours from '../components/Hours';
import Footer from '../components/Footer';

const AppContainer = styled.div`
    font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
        'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
`;

const ScrollToTopButton = styled.button`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(189, 1, 0, 0.3);
    transition: all 0.3s ease;
    z-index: 99;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(189, 1, 0, 0.4);
    }

    @media (max-width: 768px) {
        width: 45px;
        height: 45px;
        font-size: 1.2rem;
        bottom: 1rem;
        right: 1rem;
    }
`;

const Index = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AppContainer>
            <Header />
            <HeroSection />
            <WhoIAm />
            <Contact />
            <Localization />
            <Hours />
            <Footer />
            <ScrollToTopButton onClick={scrollToTop} title='Voltar ao topo'>
                ↑
            </ScrollToTopButton>
        </AppContainer>
    );
};

export default Index;
