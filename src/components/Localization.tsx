import React from 'react';
import {
    Section,
    Container,
    SectionTitle,
    MapContainer,
    MapFrame,
    AddressInfo,
    Address,
    AddressDetails
} from '../styles/Localization.styles';

const Localization = () => {
    const endereco = 'Rua Exemplo, 123 - Bairro - São Paulo, SP';
    const mapSrc =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1075!2d-46.6333824!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890';

    return (
        <Section id='localization'>
            <Container>
                <SectionTitle>Nossa Localização</SectionTitle>
                <MapContainer>
                    <MapFrame
                        src={mapSrc}
                        allowFullScreen={false}
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        title='Localização da Hamburgueria'
                    />
                </MapContainer>
                <AddressInfo>
                    <Address>📍 Encontre-nos aqui!</Address>
                    <AddressDetails>
                        {endereco}
                        <br />
                        <br />
                        <strong>Fácil acesso e estacionamento disponível</strong>
                    </AddressDetails>
                </AddressInfo>
            </Container>
        </Section>
    );
};

export default Localization;
