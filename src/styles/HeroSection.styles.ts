import styled from 'styled-components';

export const HeroContainer = styled.section`
    background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
    min-height: 80vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

export const HeroContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    width: 100%;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
        padding: 2rem 1rem;
    }
`;

export const TextContent = styled.div`
    color: white;
`;

export const Badge = styled.div`
    background: #ffffcb;
    color: #bd0100;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-size: 0.9rem;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const HeroTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const HeroSubtitle = styled.p`
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.9;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const PrimaryButton = styled.button`
    background: #ffffcb;
    color: #bd0100;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 255, 203, 0.4);
    }
`;

export const SecondaryButton = styled.button`
    background: transparent;
    color: white;
    border: 2px solid white;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        background: white;
        color: #bd0100;
        transform: translateY(-2px);
    }
`;

export const HeroImage = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        order: -1;
    }
`;

export const ImagePlaceholder = styled.div`
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 203, 0.1);
    border: 3px dashed #ffffcb;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffcb;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    transform: rotate(45deg);

    @media (max-width: 768px) {
        width: 250px;
        height: 250px;
        font-size: 1rem;
    }
`;

export const LogoText = styled.div`
    transform: rotate(-45deg);
    padding: 2rem;
`;

export const NewBadge = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    background: #ffffcb;
    color: #bd0100;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;
