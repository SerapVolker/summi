import React from 'react';
import styled from 'styled-components';

const Header = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <HeaderContainer>
      <Nav>
        <NavItem onClick={() => handleScroll('main')}>ГЛАВНАЯ</NavItem>
        <NavItem onClick={() => handleScroll('restaurant')}>РЕСТОРАН</NavItem>
        <NavItem onClick={() => handleScroll('menu')}>МЕНЮ</NavItem>
        <NavItem onClick={() => handleScroll('news')}>НОВОСТИ</NavItem>
        <NavItem onClick={() => handleScroll('contacts')}>КОНТАКТЫ</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;

  @media (max-width: 768px) {
    padding: 15px 20px;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 15px;
    flex-direction: column;
  }
`;

const NavItem = styled.button`
  color: #333333;
  background: none;
  border: none;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  cursor: pointer;
  white-space: nowrap;
  
  /* Стиль Abel */
  font-family: 'Abel', sans-serif;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    width: 100%;
    text-align: center;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
    
    &:last-child {
      border-bottom: none;
    }
  }

  &:hover {
    color: #c9a86c;
  }

  &:active {
    color: #b38b5a;
  }
`;

export default Header;