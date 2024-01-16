import React from 'react'
import "../css/components/imageSlider.css";

const ImageSlider = () => {

   let marginLeft=0;
   function next(){
       let firstImg=document.getElementById("first-img");
       if(marginLeft===300){
           marginLeft=-100;
       }
       firstImg.style.marginLeft=`-${marginLeft+100}%`
       marginLeft=marginLeft+100;
       updateCoolBtns();
   }
   function previous(){
       let firstImg=document.getElementById("first-img");
       if(marginLeft===0){
           marginLeft=400;
       }
       firstImg.style.marginLeft=`-${marginLeft-100}%`;
       marginLeft=marginLeft-100;
       updateCoolBtns();
   }
   const updateCoolBtns=()=>{
    let eachNavBtns=document.querySelectorAll(".eachNavBtn");
    eachNavBtns.forEach((eachNavBtn,index)=>{
        if(marginLeft===0 && index===0){
            eachNavBtn.style.backgroundColor="white";             
        }
        else if(marginLeft===100 && index===1){
            eachNavBtn.style.backgroundColor="white";             
        }
        else if(marginLeft===200 && index===2){
            eachNavBtn.style.backgroundColor="white";             
        }
        else if(marginLeft===300 && index===3){
            eachNavBtn.style.backgroundColor="white";             
        }
        else{
            eachNavBtn.style.backgroundColor="black";
        }  
    })
   }
   function btn1Func(){
      let firstImg=document.getElementById("first-img");
      firstImg.style.marginLeft="0%";
      marginLeft=0;
      updateCoolBtns();
   }
   function btn2Func(){
       let firstImg=document.getElementById("first-img");       
       firstImg.style.marginLeft="-100%";
       marginLeft=100;
       updateCoolBtns();
   }
   function btn3Func(){
       let firstImg=document.getElementById("first-img");   
       firstImg.style.marginLeft="-200%";
       marginLeft=200;
       updateCoolBtns();
   }
   function btn4Func(){
       let firstImg=document.getElementById("first-img");
       firstImg.style.marginLeft="-300%";
       marginLeft=300;
       updateCoolBtns();
   }
   updateCoolBtns();
  
  return (
    <section id="imageSliderSection" className="imageSlider">
    <div className="prenextBtns">
        <button id="prevBtn" onClick={()=>previous()}><i className="fa fa-chevron-left"></i></button>
        <button id="nextBtn" onClick={()=>next()}><i className="fa fa-chevron-right"></i></button>
    </div>
    <div className="navBtns">
        <div className="navBtnsInner">
          <div id="navBtn1" className="eachNavBtn" onClick={()=>btn1Func()}></div>
          <div id="navBtn2" className="eachNavBtn" onClick={()=>btn2Func()}></div>
          <div id="navBtn3" className="eachNavBtn" onClick={()=>btn3Func()}></div>
          <div id="navBtn4" className="eachNavBtn" onClick={()=>btn4Func()}></div>
        </div>
    </div>
    <div className="images">
        <img src="https://www.boat-lifestyle.com/cdn/shop/files/Wave-Neo-Plus_Web_1440x.jpg?v=1692692816" className="eachSlide" id="first-img" alt=""/>
        <img src="https://www.boat-lifestyle.com/cdn/shop/files/Ring_Desktop_1440x.png?v=1692696307" className="eachSlide" alt=""/>
        <img src="https://www.boat-lifestyle.com/cdn/shop/files/IM161_WEB_1440x.jpg?v=1692686111" className="eachSlide" alt=""/>
        <img src="https://www.boat-lifestyle.com/cdn/shop/files/Wave_sigma_WEB_1440x.jpg?v=1692726820" className="eachSlide" alt=""/>
    </div>
</section>
  )
}

export default ImageSlider