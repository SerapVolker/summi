import styled from "styled-components";
import KitchenBack from "../Component/KitchenBack";
import Card from "../FoodCards/Card";
import Card1 from "../FoodCards/Card1";
import Card2 from "../FoodCards/Card2";
import Card3 from "../FoodCards/Card3";
import Card4 from "../FoodCards/Card4";
import Card5 from "../DesertCards/Card";
import Card6 from "../DesertCards/Card1";
import Card7 from "../DesertCards/Card2";
import Card8 from "../DesertCards/Card3";
import Card9 from "../DesertCards/Card4";
const Wrapper = styled.div`

`
const Text = styled.div`
font-size: 65px;
margin-left: 650px;
margin-top: 20px;
`

const Line = styled.div`
background-color: white;
 width: 1920px; 
  height: 1px;
margin-top: 25px;   
`
const Text1 = styled.div`
font-size: 65px;
margin-left: 830px;
margin-top: 20px;
`

const Line1 = styled.div`
background-color: white;
 width: 1920px; 
  height: 1px;
margin-top: 25px;   
`

const Kitchen = () => {
     return (
<div>
<KitchenBack/>
<Wrapper>
  <Text>ОСНОВНЫЕ БЛЮДА</Text>
  <Line>

  </Line>
<Card/>
<Card1/>
<Card2/>
<Card3/>
<Card4/>
  <Text1>ДЕСЕРТЫ</Text1>
  <Line1></Line1>
  <Card5/>
  <Card6/>
   <Card7/>
     <Card8/>
       <Card9/>
</Wrapper>

</div>

)
}

export default Kitchen