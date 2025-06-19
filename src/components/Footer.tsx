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
                            Sabores autênticos que fazem você se sentir em casa. Peça já e
                            faça parte da nossa família!
                        </FooterText>
                        <SocialLinks>
                            <SocialLink
                                href='https://wa.me/5551994962837'
                                target='_blank'
                                rel='noopener noreferrer'
                                title='WhatsApp'
                            >
                                📱
                            </SocialLink>
                            <SocialLink
                                href='https://instagram.com/oburgo'
                                target='_blank'
                                rel='noopener noreferrer'
                                title='Instagram'
                            >
                                📸
                            </SocialLink>
                            <SocialLink href='tel:(51)994962837' title='Telefone'>
                                📞
                            </SocialLink>
                        </SocialLinks>
                    </FooterSection>

                    <FooterSection>
                        <FooterTitle>Contato</FooterTitle>
                        <ContactInfo>
                            <ContactItem>📞 (51) 99496-2837</ContactItem>
                            <ContactItem>📱 WhatsApp disponível</ContactItem>
                            <ContactItem>📍 Gravataí, RS</ContactItem>
                        </ContactInfo>
                    </FooterSection>

                    <FooterSection>
                        <FooterTitle>Horários</FooterTitle>
                        <ContactInfo>
                            <ContactItem>🕐 Segunda: Fechado</ContactItem>
                            <ContactItem>🕐 Terça a Sábado: 19h-00h</ContactItem>
                            <ContactItem>🕐 Domingo: 19h-23h</ContactItem>
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
