
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Rest from './images/Restaurant';
import Banner from './components/Banner';
import About from './components/About';
import Today from './components/TodaySpecial';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
import Header from './components/Header/header';
import Ourmenu from './components/OurMenu/ourmenu';
import { Icon } from '@mui/material';
import Index from './components/OurMenu';
// import { ReactDOM } from 'react';
function App() {
  return (
    <Router>
      <Header></Header>
      <Banner></Banner>
	    <About></About>
      <Today></Today>
      <Ourmenu></Ourmenu>
      <Reservation></Reservation>
      <Footer></Footer>
     
      
    </Router>
  //  <Rest/>
  );
}

export default App;
