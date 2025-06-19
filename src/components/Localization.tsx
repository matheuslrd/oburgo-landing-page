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
    const endereco = 'Rua Adriano Dias, 132 - Morada do Vale 1 - Gravataí, RS';
    const mapSrc =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864.5576454769877!2d-51.06127987148191!3d-29.915263298430276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951973a5c0079e0d%3A0xdc0af0d4f328528c!2sR.%20Adriano%20Dias%2C%20132%20-%20Morada%20do%20Vale%20I%2C%20Gravata%C3%AD%20-%20RS%2C%2094110-020!5e0!3m2!1spt-BR!2sbr!4v1750363538985!5m2!1spt-BR!2sbr';

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
                        <strong>Peça já seu delivery!</strong>
                    </AddressDetails>
                </AddressInfo>
            </Container>
        </Section>
    );
};

export default Localization;
