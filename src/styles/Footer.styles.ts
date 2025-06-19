import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
    color: white;
    padding: 3rem 0 1.5rem;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

export const FooterContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

export const FooterSection = styled.div``;

export const FooterTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
`;

export const FooterText = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 1rem;
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const SocialLink = styled.a`
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

export const ContactInfo = styled.div``;

export const ContactItem = styled.p`
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const Copyright = styled.div`
    border-top: 1px solid rgba(255, 255, 203, 0.3);
    padding-top: 1.5rem;
    margin-top: 2rem;
    text-align: center;
    font-size: 0.9rem;
    opacity: 0.8;
`;

export const DeveloperCredit = styled.div`
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 203, 0.2);
    font-size: 0.85rem;
    opacity: 0.7;
`;

export const DeveloperLink = styled.a`
    color: #ffffcb;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        color: white;
        text-decoration: underline;
    }
`;
