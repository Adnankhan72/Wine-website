
import './Home.css'
import dogimage from './image/dogimage.png';
import wine from './image/wine.png';
import youtube_imgae from './image/youtube_imgae.jpg';
import GreenLSS from './image/GreenLSS.png';
import LittleSumpin from'./image/LittleSumpin.png'
import image1 from'./image/image1.png'
import image3 from'./image/image3.png'
import image2 from './image/image2.png'
import image4 from'./image/image4.png'
import splatblack from './image/splatblack.png';
import DTH_ProgramBanner from './image/DTH_ProgramBanner.jpg'
import React from 'react';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from "gsap/ScrollTrigger";









const Home = () => {
    useGSAP(()=>{
        
function show(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ?  "transform" : "fixed"
    });
}
    
    show()

     gsap.to("#bottle", {
            rotate: 1,
            scrollTrigger: {
              trigger: "#bottle",
              scroller: "#main",
              start: "top 5%",
              end: "top -416%",
              scrub: true,
              pin: true,
      
            }
          })
      
          gsap.to("#bottle", {
           scale: 0.5,
           scrollTrigger: {
            trigger: "#page5 h1",
            scroller: "#main",
            start: "top 430%",
            end: "top -430%",
          
            scrub: true,
            pin: true,
          
      
          }
          })
      
          let t1 = gsap.timeline() 
          t1.from("#main #page1_dog_image", {
            opacity: 0,
            duration: 1,
            scale: 0.1,
          })
      
          t1.from("#bottle", {
            opacity: 0,
            duration: 1,
            scale: 0.2,
          })
      
          t1.from("#nav_top>button", {
            xPrecent:200,
          })
      
          gsap.from("#page2_part1>button",{
            scrollTrigger: {
              trigger: ("#page2_part1>button"),
              scroller: ("#main"),
              start: "top 70%",
            },
            xPrecent:-300,
            duration:1,
          })
      
      
          gsap.from("#page6_part6>button",{
            scrollTrigger: {
              trigger: ("#page6_part2>button"),
              scroller: ("#main"),
              start: "top 70%",
            },
            xPrecent:600,
            duration:1,
           
          })

    })
  

  return (
    <>
     <div id="main">
        <img id="bottle" src={wine} />
    
        <div id="page1">
            <h1>unlimited release</h1>
            <img id="page1_dog_image" src={dogimage} />
        </div>
    
        <div id="page2">
                <div id="page2_part1">
                    <h3>unlimited release</h3>
                    <h1>India Pale Ale</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, 
                        officia error? Totam unde nulla ea repudiandae, corporis optio recusandae 
                        repellat asperiores minima voluptate soluta laboriosam debitis architecto 
                        quaerat fugiat nostrum aliquam. Minima ratione sequi omnis ipsa beatae ab odio 
                        id ad, voluptates fuga incidunt nisi.
                    </p>
                    <button>Buy Now!</button>
                </div>
                <div id="page2_part2">
                    <h3>ABV</h3>
                    <h5>Alcohole by valume</h5>
                    <div id="box">
                        <h2>6.2 <span>%</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia corporis facere 
                            ullam hic tempore unde quaerat quisquam
                        </p>
                    </div>
                    <h3>IBU</h3>
                    <h5>Isn't Reservation Units</h5>
                    <div id="box">
                        <h2>51 <span>.1</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia corporis facere 
                            ullam hic tempore unde quaerat quisquam 
                        </p>
                    </div>
                    <div id="page2_part2_text1">
                    <h3>ABV</h3>
                    <h5>Alcohole by valume</h5>
                    <div id="box">
                        <h2>6.2 <span>%</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia corporis facere 
                            ullam hic tempore unde quaerat quisquam
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div id="page3">
            <h1>MounthFeels</h1>
            <div id="page3_text">
                <div id="page3_text_part1">
                    <a href="">
                        <img src={youtube_imgae} />
                    </a>
                    <h5>Hear it from our beamonster jeremy marshall</h5>
                </div>
                <div id="page3_text_part2">
                    <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi officiis omnis fuga ipsum, molestias voluptates rem vitae perferendis, illo sit aliquid tenetur nisi.</h5>
                    <h2>STYLE</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est quaerat cumque veritatis, non nisi voluptatibus et veniam, excepturi illo neque! Quos, explicabo. Ad deserunt quos harum, ducimus explicabo doloribus.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est quaerat cumque veritatis, non nisi voluptatibus et veniam, excepturi illo neque! Quos, explicabo. Ad deserunt quos harum, ducimus explicabo doloribus.</p>
                </div>
            </div>
        </div>
    
        <div id="page4">
            <div id="page4_color1">
                <img id="page4_color_image1" src={GreenLSS} />
                <div id="page4_color_image1_text">
                    <h4>tropical</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum accusamus placeat distinctio iusto exercitationem labore nulla atque temporibus beatae?</p>
                </div>
            </div>
            <div id="page4_color2">
                <img id="page4_color_image2" src={GreenLSS} />
                <div id="page4_color_image2_text">
                    <h4>pink</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum accusamus placeat distinctio iusto exercitationem labore nulla atque temporibus beatae?</p>
                </div>
            </div>
            <div id="page4_color3">
                <img id="page4_color_image3" src={splatblack}/>
                <div id="page4_color_image3_text">
                    <h4>caramel-malt</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia harum accusamus placeat distinctio iusto exercitationem labore nulla atque temporibus beatae?</p>
                </div>
            </div>
            <img src={LittleSumpin}  id="page4_color_image4"/>
    
    
        </div>
        
    <div id="page5">
        <h5>Availability</h5>
        <h1>year round</h1>
        <div id="page5_image_box">
            <div class="page5_extraimage" id="page5_bottel">
                <img id="image11" src={image1} />
                <h4>On Top</h4>
            </div>
            <div id="page5_bottel">
                <img id="image22" src={image2} />
                <h4>22 oz Bottles</h4>
                <h6>6-PACK</h6>
            </div>
            <div id="page5_bottel">
                <img id="image33" src={wine} />
                <h4>22 oz Bottles</h4>
                <h6>6-PACK</h6>
            </div>
            <div id="page5_bottel">
                <img id="image44" src={image3} />
                <h4>21 oz Bottles</h4>
                
            </div>
            <div id="page5_bottel">
                <img id="image55" src={image4} alt=""/>
                <h4>33 oz Bottles</h4>
                
            </div>
        </div>

    </div>

    <div id="page6">
        <div id="page6_part1">
            <img src={DTH_ProgramBanner} alt=""/>
        </div>
        <div id="page6_part2">
            <h5>Recipes</h5>
            <h1>Beer Speaks. Bellies Grumble.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores saepe, ex magnam temporibus repellendus nobis doloremque voluptates quis ad fugit rem similique, porro, neque voluptate numquam quae? Repudiandae, ratione!</p>
            <button>Read More</button>
        </div>
    </div>



</div>
        <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.2/gsap.min.js" integrity="sha512-gsEItzcNkWxfxHjr4BaEZAd9YuRWYjxnj7c/yukcZ0/nWehUb5TjJNyyv1ApCU2DFH/qgw+stFZHPOKnoQnIuQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.2/ScrollTrigger.min.js" integrity="sha512-ko44b+LlYXwGZI6Gey6Tgrhew9JEPdSE6m7FqDyGGPDW+dDOjsCElEtiUIRRtCXRNHwKheBCnHCQSMdUz/pgkw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://kit.fontawesome.com/b90a16c0c9.js" crossorigin="anonymous"></script>
        <script src="script.js"></script> 

    </>
  )
}

export default Home
