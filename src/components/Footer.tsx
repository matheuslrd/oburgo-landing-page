import React from 'react';
import {
    FooterContainer,
    Container,
    FooterContent,
    FooterSection,
    FooterTitle,
    FooterText,
    SocialLinks,
    SocialLink,
    ContactInfo,
    ContactItem,
    Copyright,
    DeveloperCredit,
    DeveloperLink
} from '../styles/Footer.styles';

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
                            href='https://github.com/matheuslrd'
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
