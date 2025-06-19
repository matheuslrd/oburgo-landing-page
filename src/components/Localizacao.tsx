
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #bd0100;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const MapContainer = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const MapFrame = styled.iframe`
  width: 100%;
  height: 400px;
  border: none;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const AddressInfo = styled.div`
  background: linear-gradient(135deg, #ffffcb 0%, #fff8a3 100%);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Address = styled.h3`
  color: #bd0100;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const AddressDetails = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Localizacao = () => {
  const endereco = "Rua Exemplo, 123 - Bairro - São Paulo, SP";
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1075!2d-46.6333824!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890";

  return (
    <Section id="localizacao">
      <Container>
        <SectionTitle>Nossa Localização</SectionTitle>
        <MapContainer>
          <MapFrame
            src={mapSrc}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Hamburgueria"
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

export default Localizacao;
