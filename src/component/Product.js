import React from 'react';
import './Product.css';
import wine from './image/wine.png';
import pinkwine from './image/pinkwine.png';
import wine3 from './image/wine3.png';
import gold from './image/gold.png';
import purple from './image/purple.png';
import wine4 from './image/wine4.png';
import wine5 from './image/wine5.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Product = () => {
  useGSAP(() => {
    gsap.to("#wine", {
      x: 820,
      y: 650,
      scrollTrigger: {
        trigger: ".part2",
        start: "0% 95%",
        end: "50% 50%",
        scrub: 1,
      }
    });

    gsap.to("#wine2", {
      rotate: 0,
      x: -820,
      y: 1150,
      delay: 2,
      duration: 15,
      scrollTrigger: {
        trigger: ".part2",
        start: "60% 90%",
        end: "180% 110%",
        scrub: 1,
      }
    });
    gsap.to("#wine3", {
      y: 1650,
      delay:15,
      duration:10,
    
  
      scrollTrigger: {
        trigger: ".part1",
        scroller: "body",
        start: "40%",
        end: "180%  210%",
        scrub: true,  // Adding delay to slow down the animation
        pin: true,
       
    
      }
    });
    
    gsap.to("#wine3",{
      scale:0.7,
      
      scrollTrigger: {
          trigger: ".part3",
          scroller: "body",
          start:"40%",
          end:"60%",
       
          scrub:3,
      }
    })
   
  });

  return (
    <>
      <div className="content">
        <h1>OUR PRODUCT</h1>
        <div className="box">
          <div className="box1">
            <img src={wine} id="wine" alt="Wine Bottle 1" />
          </div>
          <div className="box2">
            <img src={pinkwine} id="wine3" alt="Wine Bottle 2" />
          </div>
          <div className="box3">
            <img src={wine3} id="wine2" alt="Wine Bottle 3" />
          </div>
        </div>
      </div>
      <div className="part2">
        <div className="left">
          <h2>Best wine</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, impedit autem ipsam molestias ipsa debitis assumenda maxime ea, eveniet dicta obcaecati error odio ullam voluptatum alias, eius commodi recusandae laborum dignissimos dolores reprehenderit enim?</p>
        </div>
        <div className="right">
          <div className="box4"></div>
        </div>
      </div>
      <div className="part3">
        <div className="left3">
          <div className="box5"></div>
        </div>
        <div className="right3">
          <h2>Best wine</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, impedit autem ipsam molestias ipsa debitis assumenda maxime ea, eveniet dicta obcaecati error odio ullam voluptatum alias, eius commodi recusandae laborum dignissimos dolores reprehenderit enim?</p>
        </div>
      </div>
      <div className="part4">
        <div className="box6">
          <img src={gold} alt="Gold Bottle" />
        </div>
        <div className="box7">
          <img src={purple} alt="Purple Bottle" />
        </div>
        <div className="box8">
          <img src="" alt="" />
        </div>
        <div className="box9">
          <img src={wine4} alt="Wine Bottle 4" />
        </div>
        <div className="box10">
          <img src={wine5} alt="Wine Bottle 5" />
        </div>
      </div>
    </>
  );
}

export default Product;
