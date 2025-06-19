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
`;

export const HorariosCard = styled.div`
    background: white;
    padding: 3rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    max-width: 700px;
    margin: 0 auto;
    border: 2px solid #f0f0f0;
`;

export const HorariosTitle = styled.h3`
    color: #bd0100;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    font-weight: bold;
`;

export const HorariosList = styled.div`
    margin-bottom: 2rem;
`;

export const HorarioItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 0;
    border-bottom: 1px solid #eee;
    font-size: 1.1rem;

    &:last-child {
        border-bottom: none;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
    }
`;

export const Dia = styled.span`
    font-weight: bold;
    color: #333;
`;

export const Horario = styled.span`
    color: #bd0100;
    font-weight: bold;
`;

export const StatusContainer = styled.div`
    margin-top: 2rem;
`;

export const StatusAberto = styled.div<{ isOpen: boolean }>`
    background: ${(props) =>
        props.isOpen
            ? 'linear-gradient(135deg, #28a745 0%, #20c997 100%)'
            : 'linear-gradient(135deg, #dc3545 0%, #e63946 100%)'};
    color: white;
    padding: 1.2rem 2rem;
    border-radius: 50px;
    font-weight: bold;
    font-size: 1.2rem;
    display: inline-block;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;
