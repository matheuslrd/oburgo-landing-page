import styled from 'styled-components';

export const Section = styled.section`
    padding: 4rem 0;
    background: white;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    color: #bd0100;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const MapContainer = styled.div`
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
`;

export const MapFrame = styled.iframe`
    width: 100%;
    height: 400px;
    border: none;

    @media (max-width: 768px) {
        height: 300px;
    }
`;

export const AddressInfo = styled.div`
    background: linear-gradient(135deg, #ffffcb 0%, #fff8a3 100%);
    padding: 2rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

export const Address = styled.h3`
    color: #bd0100;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
`;

export const AddressDetails = styled.p`
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
`;
