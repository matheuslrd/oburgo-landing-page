import styled from 'styled-components';

export const Section = styled.section`
    padding: 5rem 0;
    background: #f8f9fa;
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
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

export const TextContent = styled.div`
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
`;

export const Paragraph = styled.p`
    margin-bottom: 1.5rem;
`;

export const HighlightBox = styled.div`
    background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
    color: white;
    padding: 2rem;
    border-radius: 15px;
    margin: 2rem 0;
    text-align: center;
`;

export const ImageContainer = styled.div`
    position: relative;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 15px;
    }
`;

export const ImagePlaceholder = styled.div`
    background: linear-gradient(135deg, #ffffcb 0%, #fff8a3 100%);
    border: 2px dashed #bd0100;
    border-radius: 15px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #bd0100;
    font-weight: bold;
    font-size: 1.1rem;
    text-align: center;

    @media (max-width: 768px) {
        height: 250px;
        font-size: 1rem;
    }
`;
