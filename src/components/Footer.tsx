import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
    color: white;
    padding: 3rem 0 1.5rem;
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

const FooterContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
`;

const FooterText = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const SocialLink = styled.a`
    background: rgba(255, 255, 203, 0.2);
    color: #ffffcb;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        background: #ffffcb;
        color: #bd0100;
        transform: translateY(-3px);
    }
`;

const ContactInfo = styled.div``;

const ContactItem = styled.p`
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

const Copyright = styled.div`
    border-top: 1px solid rgba(255, 255, 203, 0.3);
    padding-top: 1.5rem;
    margin-top: 2rem;
    text-align: center;
    font-size: 0.9rem;
    opacity: 0.8;
`;

const DeveloperCredit = styled.div`
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 203, 0.2);
    font-size: 0.85rem;
    opacity: 0.7;
`;

const DeveloperLink = styled.a`
    color: #ffffcb;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        color: white;
        text-decoration: underline;
    }
`;

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <Container>
                <FooterContent>
                    <FooterSection>
                        <FooterTitle>🍔 OBurgo</FooterTitle>
                        <FooterText>
                            Sabores autênticos que fazem você se sentir em casa. Venha nos visitar e
                            faça parte da nossa família!
                        </FooterText>
                        <SocialLinks>
                            <SocialLink
                                href='https://wa.me/5511999999999'
                                target='_blank'
                                rel='noopener noreferrer'
                                title='WhatsApp'
                            >
                                📱
                            </SocialLink>
                            <SocialLink
                                href='https://instagram.com/suahamburgueria'
                                target='_blank'
                                rel='noopener noreferrer'
                                title='Instagram'
                            >
                                📸
                            </SocialLink>
                            <SocialLink href='tel:(11)999999999' title='Telefone'>
                                📞
                            </SocialLink>
                        </SocialLinks>
                    </FooterSection>

                    <FooterSection>
                        <FooterTitle>Contato</FooterTitle>
                        <ContactInfo>
                            <ContactItem>📞 (11) 9999-9999</ContactItem>
                            <ContactItem>📱 WhatsApp disponível</ContactItem>
                            <ContactItem>📧 contato@oburgo.com.br</ContactItem>
                            <ContactItem>📍 Gravataí, RS</ContactItem>
                        </ContactInfo>
                    </FooterSection>

                    <FooterSection>
                        <FooterTitle>Horários</FooterTitle>
                        <ContactInfo>
                            <ContactItem>🕐 Segunda a Sexta: 12h-15h e 18h-23h</ContactItem>
                            <ContactItem>🕐 Sábado: 12h-15h e 18h-23h</ContactItem>
                            <ContactItem>🕐 Domingo: Fechado</ContactItem>
                        </ContactInfo>
                    </FooterSection>
                </FooterContent>

                <Copyright>
                    © {currentYear} OBurgo - Hamburgueria. Todos os direitos reservados.
                    <br />
                    Desenvolvido com ❤️ para levar sabor até você!
                    <DeveloperCredit>
                        Website desenvolvido por{' '}
                        <DeveloperLink
                            href='https://github.com/matheuslaurindo'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Matheus Laurindo
                        </DeveloperLink>{' '}
                        - Desenvolvedor Web
                    </DeveloperCredit>
                </Copyright>
            </Container>
        </FooterContainer>
    );
};

export default Footer;
