import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
 margin-left: 100px;
 margin-top:100px;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MainButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #ff6b6b;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 2;
  position: relative;
  
  &:hover {
    transform: scale(1.1);
    background: #ff5252;
  }
`;

const IconsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
  opacity: ${props => props.isOpen ? 1 : 0};
  transform: translate(-50%, -50%) 
    ${props => props.isOpen 
      ? `translate(${props.position.x}px, ${props.position.y}px)` 
      : 'translate(0, 0)'};
  
  &:hover {
    transform: translate(-50%, -50%) 
      ${props => props.isOpen 
        ? `translate(${props.position.x}px, ${props.position.y}px) scale(1.1)` 
        : 'translate(0, 0)'};
    border-color: #ff6b6b;
  }
`;

// Компонент с background images
const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const icons = [
    { 
      x: 80, y: 0, 
      imageUrl: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png', // Instagram
      alt: 'instagram'
    },
    
    { 
      x: 70, y: 70, 
      imageUrl: '   https://cdn-icons-png.freepik.com/512/1603/1603076.png?uid=R236568904&ga=GA1.1.911711407.1773078230', // Telegram
      alt: 'telegram'
    }
    
  ];

  return (
    <Container>
      <ButtonContainer>
        <MainButton onClick={() => setIsOpen(!isOpen)}>
          <span style={{ fontSize: '24px', color: 'white' }}>
            {isOpen ? '✕' : '☰'}
          </span>
        </MainButton>
        
        <IconsContainer>
          {icons.map((icon, index) => (
            <Icon
              key={index}
              isOpen={isOpen}
              position={icon}
              imageUrl={icon.imageUrl}
              onClick={() => console.log(`Clicked on ${icon.alt}`)}
              title={icon.alt}
            />
          ))}
        </IconsContainer>
      </ButtonContainer>
    </Container>
  );
};

export default Button;