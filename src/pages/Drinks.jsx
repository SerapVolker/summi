import React from "react";
import CocktailsBack from '../Component/DrinkBack';
import Card from '../DrinkCard/Card';
import Card1 from '../DrinkCard/Card1';
import Card2 from '../DrinkCard/Card2';
import Card3 from '../DrinkCard/Card3';

import styled from "styled-components";
const Wrapper = styled.div`

`
const Text = styled.div`
font-size: 65px;
margin-left: 810px;
margin-top: 20px;
`

const Line = styled.div`
background-color: white;
 width: 1920px; 
  height: 1px;
margin-top: 25px;   
`
const Drinks = () => {
  return (
          <div>
<CocktailsBack/>
<Wrapper>
<Text>НАПИТКИ</Text>
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

export default Drinks 