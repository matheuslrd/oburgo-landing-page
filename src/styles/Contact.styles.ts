import styled from 'styled-components';

export const Section = styled.section`
    padding: 5rem 0;
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
    margin-bottom: 1rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const SectionSubtitle = styled.p`
    text-align: center;
    color: #666;
    font-size: 1.2rem;
    margin-bottom: 4rem;
`;

export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`;

export const ContactCard = styled.div`
    background: #f8f9fa;
    padding: 2.5rem 2rem;
    border-radius: 20px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-10px);
        border-color: #bd0100;
        box-shadow: 0 15px 35px rgba(189, 1, 0, 0.15);
    }
`;

export const PhoneCard = styled.a`
    background: #f8f9fa;
    padding: 2.5rem 2rem;
    border-radius: 20px;
    text-decoration: none;
    color: inherit;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-10px);
        border-color: #bd0100;
        box-shadow: 0 15px 35px rgba(189, 1, 0, 0.15);

        &::before {
            transform: translateX(0);
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        z-index: -1;
    }

    &:hover * {
        color: white;
    }
`;

export const ContactIcon = styled.div`
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;
`;

export const ContactTitle = styled.h3`
    color: #bd0100;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    font-weight: bold;
    transition: color 0.3s ease;
`;

export const ContactInfo = styled.p`
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
    transition: color 0.3s ease;
    margin-bottom: 1.5rem;
`;

export const ContactButton = styled.a`
    background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    margin-top: auto;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(189, 1, 0, 0.3);
    }
`;
