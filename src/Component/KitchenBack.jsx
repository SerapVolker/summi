import styled from "styled-components";
import Background from '../Photo/Rectangle 15.png'
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
 background-image: url(${Background}); 
 background-size: cover;
  background-position: absolute;
  width: 1920px; 
  height: 500px;   

`
const BorderedText = styled(Link)`
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
  margin-left: 682px;
`
const Line = styled.div`
background-color: white;
 width: 1920px; 
  height: 1px;
margin-top: 235px;   
`
const KitchenBack = () => {
     return (
<Wrapper>
<BorderedText to="/" >ВЫСШИЙ ВКУС</BorderedText>
<Line></Line>
</Wrapper>

)
}

export default KitchenBack