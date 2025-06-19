import React from 'react';
import {
    Section,
    Container,
    SectionTitle,
    SectionSubtitle,
    HorariosCard,
    HorariosTitle,
    HorariosList,
    HorarioItem,
    Dia,
    Horario,
    StatusContainer,
    StatusAberto
} from '../styles/Hours.styles';

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
