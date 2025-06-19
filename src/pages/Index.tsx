import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhoIAm from '../components/WhoIAm';
import Contact from '../components/Contact';
import Localization from '../components/Localization';
import Hours from '../components/Hours';
import Footer from '../components/Footer';
import { AppContainer, ScrollToTopButton } from '../styles/Index.styles';

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
