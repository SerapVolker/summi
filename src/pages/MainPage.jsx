import React from 'react'
import styled from 'styled-components'
import Background from '../Photo/background.svg'
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
 background-image: url(${Background}); 
 background-size: cover;
  background-position: absolute;
  width: 1905px; 
  height: 1000px;   

`

const BorderedText = styled.div`
  border: ${props => props.borderWidth || '2px'} solid ${props => props.borderColor || '#ffffff'};
  padding: ${props => props.padding || '1px 40px'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  display: inline-block;
   font-weight: 100;
  font-family: 'Cormorant Unicase', serif;
  color:  rgb(255, 255, 255);
  font-size: 65px;  
  margin-top: 160px;
  margin-left: 92px;
`
const Text = styled.p`
font-size: 35px;
margin-left:92px;
margin-top: 55px;
  font-family: 'Cormorant Unicase', serif;

`
const Text2 = styled.p`
margin-left:700px;
margin-top: -45px;
font-size: 30px;
  font-family: 'Cormorant Unicase', serif;
`
const Button = styled(Link)`
margin-left: 92px;
font-size: 40px;

button{
 background: rgba(255, 255, 255, 0);
   border: ${props => props.borderWidth || '2px'} solid ${props => props.borderColor || '#ffffff'};
  padding: ${props => props.padding || '15px 40px'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  border-radius: 0px;
    font-weight: Thin;
  cursor: pointer;
  transition: background-color 0.8s ease;
    font-family: 'Cormorant Unicase', serif;
}
  button:hover{ 
background-color: rgb(255, 255, 255); 
  color: #000000;
  font-weight: Thin;
  transition: background-color 0.8s ease;
    font-family: 'Cormorant Unicase', serif;
}
`
const MainPage = () => {
  return (
    <Wrapper>

<BorderedText>ВЫСШИЙ ВКУС</BorderedText>
<Text>Шеф-повара — мастера искусства и вкуса, их призвание —<br/>
создавать произведения искусства на кухне и делать<br/> невозможное, используя такое простое понятие, как вкус.<br/>
 Искусство вкуса и безупречное обслуживание — это<br/> 
 высшее наслаждение.</Text>
 <Text2>(Марко Валентини)</Text2>
 <Button to="/Booking"><button> ЗАБРОНИРОВАТЬ СТОЛИК</button></Button>
</Wrapper>

  )
}

export default MainPage