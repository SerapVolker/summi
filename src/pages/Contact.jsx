import styled from "styled-components"
import Photo from '../Photo/Phot.png'
import Lines from '../Photo/Rectangle 50.png'
 const Wrapper = styled.div`

`
const Text = styled.div`
color: #ffffff;
font-size: 35px;
margin-left:92px;
margin-top: 55px;
  font-family: 'Cormorant Unicase', serif;
`

const Text1 = styled.div`
color: #ffffff;
font-size: 35px;
margin-left:92px;
margin-top: 55px;
  font-family: 'Cormorant Unicase', serif;
`
const Photos = styled.div`
 z-index: -1;
 margin-top: 160px;
 margin-left: 500px;
`
const Text2 = styled.div`
color: #ffffff;
font-size: 35px;
margin-left:802px;
margin-top: -60px;
  font-family: 'Cormorant Unicase', serif;
`
const Line = styled. div`
background-color: #ffffff;
width: 1px;
height: 160px;
margin-top: -50px;
margin-left: 1200px;
 background-size: cover;
`
const Text3 = styled.div`
color: #ffffff;
font-size: 35px;
margin-left: 1230px;
margin-top: -60px;
font-family: 'Cormorant Unicase', serif;
`
const Text4 = styled.div`
color: #ffffff;
font-size: 35px;
margin-left: 1230px;
margin-top: -100px;
font-family: 'Cormorant Unicase', serif;
`
const Text5 = styled.div`
color: #ffffff;
font-size: 35px;
margin-left: 1230px;
margin-top: -100px;
font-family: 'Cormorant Unicase', serif;
`
const Maps = styled.div`
`
const Contact = () => {
     return (
        <Wrapper>
<Text>Часы работы:  <br/> 
Понедельник - четверг: 10:00 - 23:00 <br/> 
Пятница: 10:00 - 01:00 <br/> 
Суббота: 9:00 - 02:00 <br/> 
Воскресенье: 9:00 - 00:00<br/> 
</Text>
<Text1>
    Номер телефона: +79241794172
    Адрес: <br/>
    Пресненская набережная, 2А
</Text1>
<Photos>
<img src={Photo}/>
</Photos>
<Text2>summigustus@gmail.com</Text2>
<Line>
   
</Line>
   <Text3>Пользовательское соглашение</Text3>
    <Text4>Политика конфиденциальности</Text4>
     <Text5>Правила посещения ресторана</Text5>
        </Wrapper>
        )
}

export default Contact