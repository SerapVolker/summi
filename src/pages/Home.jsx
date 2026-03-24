import React from "react";
import MainPage from './MainPage';
import Restaurant from './Restaurant';
import Menu from './Menu';
import News from './News'
import Contact from './Contact';
import Header from '../Component/Header'
import Buttons from '../Component/Buttons'
import GoogleMapComponent  from '../Component/GoogleMapComponent'
const Home = () => {
     return (
<div className="app-wrapper">
      <Header />
      
      {/* Секция MainPage с ID */}
      <section id="main">
        <MainPage />
      </section>
      
      {/* Секция Restaurant с ID */}
      <section id="restaurant">
        <Restaurant />
      </section>
      
      {/* Секция Menu с ID */}
      <section id="menu">
        <Menu />
      </section>
      
      {/* Секция News с ID */}
      <section id="news">
        <News />
      </section>
      
      {/* Секция Contact с ID */}
      <section id="contacts">
        <Contact />
      </section>
      
      <GoogleMapComponent />
      <Buttons />
    </div>
  );
}

export default Home

