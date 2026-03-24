import styled from "styled-components";
import CocktailsBack from '../Component/CoctailsBack';
import Card from "../CocktailsCard/Card";
import Card1 from "../CocktailsCard/Card1";
import Card2 from "../CocktailsCard/Card2";
import Card3 from "../CocktailsCard/Card3";

const Wrapper = styled.div`

`
const Text = styled.div`
font-size: 65px;
margin-left: 800px;
margin-top: 20px;
`

const Line = styled.div`
background-color: white;
 width: 1920px; 
  height: 1px;
margin-top: 25px;   
`
const Cocktails = () => {
     return (
          <div>
               <CocktailsBack/>
<Wrapper>
<Text>КОКТЕЙЛИ</Text>
  <Line>
  </Line>
<Card/>
<Card1/>
<Card2/>
<Card3/>


</Wrapper>
 </div>
)
}

export default Cocktails