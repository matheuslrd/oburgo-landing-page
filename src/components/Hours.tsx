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
        const date = new Date();
        const day = date.getDay();
        const hour = date.getHours();

        if (day === 1) return false;
        
        if (day === 0) {
            return hour >= 19 && hour < 23;
        }
        
        return hour >= 19 && (hour < 24 || hour === 0);
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
                            <Dia>Segunda</Dia>
                            <Horario>Fechado</Horario>
                        </HorarioItem>

                        <HorarioItem>
                            <Dia>Terça a Sábado</Dia>
                            <Horario>19h às 00h</Horario>
                        </HorarioItem>

                        <HorarioItem>
                            <Dia>Domingo</Dia>
                            <Horario>19h às 23h</Horario>
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
