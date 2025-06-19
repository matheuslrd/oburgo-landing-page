
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #ffffcb 0%, #fff8a3 100%);
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

const HorariosCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
`;

const HorariosTitle = styled.h3`
  color: #bd0100;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const HorarioItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
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

const StatusAberto = styled.div`
  background: linear-gradient(135deg, #bd0100 0%, #d41e1e 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 2rem;
  display: inline-block;
`;

const Horarios = () => {
  const isOpen = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay(); // 0 = domingo, 1 = segunda, etc.
    
    // Verifica se é domingo (fechado)
    if (day === 0) return false;
    
    // Verifica horários de funcionamento
    return (hour >= 12 && hour < 15) || (hour >= 18 && hour < 23);
  };

  return (
    <Section id="horarios">
      <Container>
        <SectionTitle>Horários de Funcionamento</SectionTitle>
        <HorariosCard>
          <HorariosTitle>🕐 Quando Estamos Abertos</HorariosTitle>
          
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
          
          <StatusAberto>
            {isOpen() ? '🟢 Aberto Agora!' : '🔴 Fechado no Momento'}
          </StatusAberto>
        </HorariosCard>
      </Container>
    </Section>
  );
};

export default Horarios;
