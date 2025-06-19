import React from 'react';
import {
    Section,
    Container,
    SectionTitle,
    SectionSubtitle,
    ContactGrid,
    ContactCard,
    PhoneCard,
    ContactIcon,
    ContactTitle,
    ContactInfo,
    ContactButton
} from '../styles/Contact.styles';

const Contact = () => {
    const whatsappNumber = '5551994962837';
    const phoneNumber = '(51) 99496-2837';
    const instagramHandle = '@oburgoficial';

    return (
        <Section id='contact'>
            <Container>
                <SectionTitle>Fale Conosco</SectionTitle>
                <SectionSubtitle>
                    Estamos sempre prontos para atendê-lo da melhor forma
                </SectionSubtitle>
                <ContactGrid>
                    <ContactCard>
                        <ContactIcon>📱</ContactIcon>
                        <ContactTitle>WhatsApp</ContactTitle>
                        <ContactInfo>
                            Faça seu pedido pelo WhatsApp!
                            <br />
                            Atendimento rápido e personalizado
                        </ContactInfo>
                        <ContactButton
                            href={`https://wa.me/${whatsappNumber}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Enviar Mensagem
                        </ContactButton>
                    </ContactCard>

                    <PhoneCard href={`tel:${phoneNumber}`}>
                        <ContactIcon>📞</ContactIcon>
                        <ContactTitle>Telefone</ContactTitle>
                        <ContactInfo>
                            {phoneNumber}
                            <br />
                            Ligue e tire suas dúvidas
                        </ContactInfo>
                    </PhoneCard>

                    <ContactCard>
                        <ContactIcon>📸</ContactIcon>
                        <ContactTitle>Instagram</ContactTitle>
                        <ContactInfo>
                            {instagramHandle}
                            <br />
                            Acompanhe nossas novidades e promoções!
                        </ContactInfo>
                        <ContactButton
                            href={`https://instagram.com/${instagramHandle.replace('@', '')}`}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Seguir no Instagram
                        </ContactButton>
                    </ContactCard>
                </ContactGrid>
            </Container>
        </Section>
    );
};

export default Contact;
