import React from 'react'
import styled from 'styled-components'
import Img from '../Photo/Rectangle 68.png'
import Img1 from '../Photo/Rectangle 69.svg'

const Wrapper = styled.div`
background-color: rgb(0, 0, 0);

`
const BorderedText = styled.div`
  border: ${props => props.borderWidth || '2px'} solid ${props => props.borderColor || '#ffffff'};
  padding: ${props => props.padding || '1px 100px'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  font-family: 'Cormorant Unicase', serif;
  display: inline-block;
   font-weight: 100;
 color:  rgb(255, 255, 255);
  font-size: 65px;  
  margin-top: 30px;
  margin-left: 710px;
`
const Text = styled.div`
font-family: 'Cormorant Unicase', serif;
font-size: 35px;
margin-top: 40px;
margin-left: 40px;

`
const Text1 = styled.div`
font-family: 'Cormorant Unicase', serif;
font-size: 40px;
margin-top: -580px;
margin-left: 1200px;
`
const Image = styled.div`
margin-left: 1030px;
`
const Image1 = styled.div`
margin-left: 1450px;
margin-top: -545px;
`
const Text2 = styled.div`
font-family: 'Cormorant Unicase', serif;
font-size: 40px;
margin-top:-10px;
margin-left: 1070px;
`
const Text3= styled.div`
font-family: 'Cormorant Unicase', serif;
font-size: 40px;
margin-top:-120px;
margin-left: 1470px;
`
const Text4 = styled.div`
font-size: 80px;
margin-top:-40px;
margin-left: 70px;
font-family: 'Abel', sans-serif;
`
const Text5 = styled.div`
font-size: 40px;
margin-top:-30px;
margin-left: 40px;
font-family: 'Cormorant Unicase', serif;
`
const Text6 = styled.div`
font-size: 80px;
margin-top: 20px;
margin-left: 80px;
font-family: 'Abel', sans-serif;
`
const Text7 = styled.div`
font-size: 40px;
margin-top:-30px;
margin-left: 105px;
font-family: 'Cormorant Unicase', serif;
`
const Text8 = styled.div`
font-size: 80px;
margin-top: 20px;
margin-left: 125px;
font-family: 'Abel', sans-serif;
`
const Text9 = styled.div`
font-size: 40px;
margin-top:-30px;
margin-left: 95px;
font-family: 'Cormorant Unicase', serif;
`
const Restaurant = () => {
  return (
 <Wrapper>
<BorderedText>РЕСТОРАН</BorderedText>
<Text>ВЫСШИЙ ВКУС — это не просто место, где можно<br/>
 вкусно поесть. Это гастрономическое путешествие, <br/>
 в котором каждый ужин превращается в <br/>
 незабываемое впечатление, а вкус становится <br/>
 основным языком общения между шеф-поваром <br/>
 и гостем.  <br/>
 В самом сердце европейского города, где<br/>
  старинные улочки переплетаются с современными <br/>
  проспектами, история ВЫСШИЙ ВКУС началась с <br/>
  мечты двух увлеченных людей: шеф-повара Марко <br/>
  Валентини и сомелье Софии Вебер.</Text>
  <Text1>ФОТОГРАФИЯ ОСНОВАТЕЛЕЙ</Text1>
<Image><img src={Img}/> </Image>
<Image1><img src={Img1}/> </Image1>
 <Text2>Шеф-повар Марко<br/>Валентини</Text2>
 <Text3>Сомелье София Вебер</Text3>
 <Text4>2019</Text4>
  <Text5>Год основания</Text5>
  <Text6>120</Text6>
  <Text7>Мест</Text7>
   <Text8>3</Text8>
  <Text9>Холла</Text9>
 </Wrapper>
     )
}

export default Restaurant