import React from 'react';
import {
    HeroContainer,
    HeroContent,
    TextContent,
    Badge,
    HeroTitle,
    HeroSubtitle,
    ButtonContainer,
    PrimaryButton,
    SecondaryButton,
    HeroImage,
    ImagePlaceholder,
    LogoText,
    NewBadge
} from '../styles/HeroSection.styles';

const HeroSection = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToLocation = () => {
        document.getElementById('localization')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <HeroContainer id='home'>
            <HeroContent>
                <TextContent>
                    <Badge>Artesanal • Autêntico • Irresistível</Badge>
                    <HeroTitle>
                        OS MELHORES
                        <br />
                        HAMBÚRGUERES
                        <br />
                        DE GRAVATAÍ!
                    </HeroTitle>
                    <HeroSubtitle>
                        Hambúrgueres artesanais feitos com ingredientes frescos e muito amor. Venha
                        descobrir por que somos a hamburgueria favorita de Gravataí!
                    </HeroSubtitle>
                    <ButtonContainer>
                        <PrimaryButton onClick={scrollToContact}>😋 Faça Seu Pedido</PrimaryButton>
                        <SecondaryButton onClick={scrollToLocation}>
                            📍 Nossa Localização
                        </SecondaryButton>
                    </ButtonContainer>
                </TextContent>

                <HeroImage>
                    <img src='img/oburgo-logotype.png' />
                    <NewBadge>🔥 Novo!</NewBadge>
                </HeroImage>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
