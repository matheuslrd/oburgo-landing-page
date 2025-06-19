import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 5rem 0;
    background: #f8f9fa;
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
    margin-bottom: 1rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const SectionSubtitle = styled.p`
    text-align: center;
    color: #666;
    font-size: 1.2rem;
    margin-bottom: 4rem;
`;

const HorariosCard = styled.div`
    background: white;
    padding: 3rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    max-width: 700px;
    margin: 0 auto;
    border: 2px solid #f0f0f0;
`;

const HorariosTitle = styled.h3`
    color: #bd0100;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    font-weight: bold;
`;

const HorariosList = styled.div`
    margin-bottom: 2rem;
`;

const HorarioItem = styled.div`
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

const Dia = styled.span`
    font-weight: bold;
    color: #333;
`;

const Horario = styled.span`
    color: #bd0100;
    font-weight: bold;
`;

const StatusContainer = styled.div`
    margin-top: 2rem;
`;

const StatusAberto = styled.div<{ isOpen: boolean }>`
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

const Horarios = () => {
    const isOpen = () => {
        const now = new Date();
        const hour = now.getHours();
        const day = now.getDay();

        if (day === 0) return false;

        return (hour >= 12 && hour < 15) || (hour >= 18 && hour < 23);
    };

    return (
        <Section id='horarios'>
            <Container>
                <SectionTitle>Horários de Funcionamento</SectionTitle>
                <SectionSubtitle>Confira quando estamos prontos para atendê-lo</SectionSubtitle>
                <HorariosCard>
                    <HorariosTitle>🕐 Quando Estamos Abertos</HorariosTitle>

                    <HorariosList>
                        <HorarioItem>
                            <Dia>Segunda a Sexta</Dia>
                            <Horario>12h às 15h • 18h às 23h</Horario>
                        </HorarioItem>

                        <HorarioItem>
                            <Dia>Sábado</Dia>
                            <Horario>12h às 15h • 18h às 23h</Horario>
                        </HorarioItem>

                        <HorarioItem>
                            <Dia>Domingo</Dia>
                            <Horario>Fechado</Horario>
                        </HorarioItem>
                    </HorariosList>

                    <StatusContainer>
                        <StatusAberto isOpen={isOpen()}>
                            {isOpen() ? '🟢 Aberto Agora!' : '🔴 Fechado no Momento'}
                        </StatusAberto>
                    </StatusContainer>
                </HorariosCard>
            </Container>
        </Section>
    );
};

export default Horarios;
