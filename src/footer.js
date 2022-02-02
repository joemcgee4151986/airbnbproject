import './App.css';
import React from 'react';
import Bike from './bike.png';
import Wedding from './wedding.png';
import Swimmer from './swimmer.png';

//import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
//import styled, { css } from 'styled-components';

export default function Footer(){
  //  const Container = styled.div`
//width: 300px;
//  height: 150px;
//  `;
   // const CarouselUI = ({ children }) => <Container>{children}</Container>;
//const Carousel = makeCarousel(CarouselUI);

    return(
      //  <Carousel defaultWait={1000} >
        <div>
        <Slide right>
          
                
        <img src = {Swimmer} className="swim" alt="Swimmer" />
   
        </Slide>
          <Slide right>
              
             <img src = {Wedding} className="marriage" alt="Wedding" />
            
             </Slide>
            
             <Slide right>
             <img src = {Bike} className="bicycle" alt="Bike" />
             </Slide>
             </div>
        // </Carousel>
        //<img src = {Wedding} className="marriage" alt="Wedding" />
    //<img src = {Bike} className="bicycle" alt="Bike" />

      
    
    )
}