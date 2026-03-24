import React, { useState } from "react";
import styled from "styled-components";
import Photo from '../Photo/Photonews.png'
import Photo1 from '../Photo/Photonews1.png'


const cardsData = [
  {
    id: 1,
    title: "ВЫСШИЙ ВКУС",
    subtitle: "ОТКРЫТИЕ РЕСТОРАНА ВЫСШИЙ ВКУС!",
    description:
      <p>В честь открытия ресторана ВЫСШИЙ ВКУС.<br/>  Чтобы отпраздновать это событие, <br/> мы дарим скидку 5%.</p>,
    background: `url(${Photo})`, 
  },
  {
    id: 2,
    title: "ВЫСШИЙ ВКУС",
    subtitle: <p>КОКТЕЙЛИ В ЧЕСТЬ ОТКРЫТИЯ РЕСТОРАНА!</p>,
    description:
      <p>скидка 40% на коктейли в честь открытия ресторана. </p>,
     background: `url(${Photo1})`, 
  },
];

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentCard = cardsData[currentIndex];

  return (
    <CarouselContainer>
      <CardWrapper>
        
        <Arrow onClick={goToPrevious} position="left">
          &#10094;
        </Arrow>

        
        <Card background={currentCard.background}>
          <CardContent>
            <Title>{currentCard.title}</Title>
            <Subtitle>{currentCard.subtitle}</Subtitle>
            <Description>{currentCard.description}</Description>
            <DetailsButton>ДЕТАЛИ</DetailsButton>
          </CardContent>
        </Card>

     
        <Arrow onClick={goToNext} position="right">
          &#10095;
        </Arrow>
      </CardWrapper>

     
      <DotsContainer>
        {cardsData.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default News;



const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #000000;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-sizing: border-box;
`;

const CardWrapper = styled.div`
  position: relative;
  
  
`;

const Card = styled.div`
  background: ${(props) => props.background};
  border-radius: 0px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  color: white;
  padding: 40px 30px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s ease;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 30px 20px;
    min-height: 250px;
  }
`;

const CardContent = styled.div`
  width: 1805px;
  height: 900px;
`;

const Title = styled.h2`
  border: ${props => props.borderWidth || '2px'} solid ${props => props.borderColor || '#ffffff'};
  padding: ${props => props.padding || '1px 80px'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  font-family: 'Cormorant Unicase', serif;
  display: inline-block;
    font-weight: 100;
 color:  rgb(255, 255, 255);
  font-size: 65px;  
  margin-top: 60px;
  margin-left: 0px;
  }
`;

const Subtitle = styled.h3`
  font-size: 40px;
  margin: 0 0 15px 0;
  font-weight: 100;
  opacity: 0.9;
  line-height: 1.4;
  font-family: 'Cormorant Unicase', serif;
  }
`;

const Description = styled.p`
  font-size: 40px;
  font-weight: 100;
  margin: 1 0 25px 0;
  line-height: 1.6;
  opacity: 0.8;
    
  font-family: 'Cormorant Unicase', serif;
 
  }
`;

const DetailsButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  border: solid white;
  color: white;
  padding: 30px 200px;
  font-size: 30px;
   font-family: 'Cormorant Unicase', serif;
  font-weight: Thin;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 0px;
;

  &:hover {
    background-color: white;
    color: #000000;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 14px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.position === "left" ? "left: -px;" : "right: 0px;")}
  font-size: 40px;
  margin-top: 300px;
  color: #ffffff;
  cursor: pointer;
  user-select: none;
  z-index: 10;

  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0);
  transition: all 0.3s ease;

  &:hover {
    background-color: white;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 30px;
    ${(props) => (props.position === "left" ? "left: -20px;" : "right: -20px;")}
  }

`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 12px;
`;

const Dot = styled.div`
  width: 12px;
  margin-top:-150px;
  z-index: 10;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#ffffff" : "#00000000")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0a0a0a00;
    transform: scale(1.2);
  }
`;