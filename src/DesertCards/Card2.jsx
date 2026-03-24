import React from 'react';
import styled, { keyframes } from 'styled-components';
import Backs from '../Photo/Rectangle 85 (7).png';

// Плавное появление карточки
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ---- СТИЛИ ----
const CardContainer = styled.div`
  max-width: 1520px;
  width: 100%;
    max-height: 300px;
  height: 100%;  
  margin: 2rem auto;
  background: #212121;
  border-radius: 36px;
  overflow: hidden;
  box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeInUp} 0.5s ease-out;
 font-family: 'Cormorant Unicase', serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 32px 55px -15px rgba(0, 0, 0, 0.3);
  }
`;

const ImageSection = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  max-width: 420px;
  width: 100%;
  background: #2c3e2f;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: 300px;
  }
`;

const DishImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);

  ${CardContainer}:hover & {
    transform: scale(1.03);
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 6px 14px;
  border-radius: 60px;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  z-index: 2;
`;

const Content = styled.div`
  padding: 2rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    padding: 1.6rem 1.8rem 2rem 1.8rem;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  margin-left: -300px;
   
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 0.75rem;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  margin: 0;
  color: #ffffff;
  letter-spacing: -0.3px;
  line-height: 1.2;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  &::before {
    content: '₽';
    font-size: 1.3rem;
    font-weight: 600;
    margin-right: 2px;
    color: #ffffff;
  }
`;

const Description = styled.p`
  font-size: 30px;
  margin-left: -300px;
  line-height: 1.5;
  color: #e4e4e4b7;

`;

const Specs = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eef2f4;
  padding-bottom: 1.2rem;
`;

const SpecItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #f4f6f9;
  padding: 6px 14px;
  border-radius: 40px;
  font-size: 0.8rem;
  font-weight: 500;
  color: #000000;
`;

// ---- КОМПОНЕНТ КАРТОЧКИ ----
const Card = () => {
  return (
    <CardContainer>
      <ImageSection>
        <DishImage 
          src={Backs}
          alt="Стейк Рибай"
        />
        <Badge>🔥 ШЕФ-РЕКОМЕНДАЦИЯ</Badge>
      </ImageSection>
      
      <Content>
        <HeaderRow>
          <Title>КРЕМ ТИРАМИСУ</Title>
          <Price>1080</Price>
        </HeaderRow>
        
        <Description>Крем тирамису, какао-пудра, бисквитное печенье “савоярди”, кофе эспрессо, кофе, желатин.
        </Description>
        
        <Specs>
          <SpecItem>⚖️ 350 г</SpecItem>
          <SpecItem>🔥 720 ккал</SpecItem>
          <SpecItem>⏱️ 20-25 мин</SpecItem>
         
        </Specs>
      </Content>
    </CardContainer>
  );
};

export default Card;