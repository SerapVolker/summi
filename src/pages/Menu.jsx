// Menu.jsx
import React from 'react';
import styled from 'styled-components';
import Background from '../Photo/background1.png';
import { Link } from 'react-router-dom';
import Kitchen from '../Photo/Kitchen1.png';
import Kitchen1 from '../Photo/Kitchen2.png';
import Bar from '../Photo/Bar1.png';
import Bar1 from '../Photo/Bar2.png';
import Drink from '../Photo/Drink1.png'
import Drink1 from '../Photo/Drink2.png'
const Wrapper = styled.div`
  background-image: url(${Background}); 
  background-size: cover;
  background-position: center;
  width: 1905px; 
  height: 1000px;
  margin-top: 80px;   
`

const BorderedText = styled.div`
  border: ${props => props.borderWidth || '2px'} solid ${props => props.borderColor || '#ffffff'};
  padding: ${props => props.padding || '1px 170px'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  font-family: 'Cormorant Unicase', serif;
  display: inline-block;
  font-weight: 100;
  color: rgb(255, 255, 255);
  font-size: 65px;  
  margin-top: 80px;
  margin-left: 650px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 50px;
`

const StyledLink = styled(Link)`
margin-left: -50px;
  margin-top: 0px;
  width: 450px;
  height: 700px;
  position: relative;
  overflow: hidden;
    pointer-events: auto;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Kitchen});
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Kitchen1});
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
  }
  
  &:hover::before {
    opacity: 0;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
}
`
const StyledLink1 = styled(Link)`
margin-left: 10px;
  margin-top: 0px;
  width: 450px;
  height: 700px;
  position: relative;
  overflow: hidden;
    pointer-events: auto;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Bar});
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Bar1});
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
  }
  
  &:hover::before {
    opacity: 0;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
}
`
const StyledLink2 = styled(Link)`
margin-left: 0px;
  margin-top: 0px;
  width: 450px;
  height: 700px;
  position: relative;
  overflow: hidden;
    pointer-events: auto;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Drink});
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${Drink1});
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
  }
  
  &:hover::before {
    opacity: 0;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
}
`
const Menu = () => {
  return (
    <Wrapper>
      <BorderedText>МЕНЮ</BorderedText>
      <ButtonContainer>
        <StyledLink to="/Kitchen">
         
        </StyledLink>
        <StyledLink1 to="/Cocktails">
         
        </StyledLink1>
        <StyledLink2 to="/Drink">
         
        </StyledLink2>
      </ButtonContainer>
    </Wrapper>
  )
}

export default Menu;