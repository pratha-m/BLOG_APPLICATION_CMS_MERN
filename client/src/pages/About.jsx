import React from 'react'
import "../css/pages/about.css";

const About = () => {
  return (
    <section className="about" id="aboutPage">
        <div className="aboutUsHead">About <span>Us</span></div>
        <div className="aboutUsMainContent">
           <div className="aboutUsImage">
               <img src="https://img.freepik.com/free-psd/3d-illustration-people-working-marketing_23-2150417382.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1704931200&semt=ais" alt=""/>
           </div>
           <div className="aboutUsTextContent">
               <p>
                    Explore the world of ideas with us at BLOGII. From tech insights
                    to lifestyle tips, we curate content that informs and inspires. Join our community
                     of avid readers, and let's embark on a journey of discovery together. Welcome to
                      a space where words come alive, making everyday moments extraordinary.
               </p>
               <span className="socialLinks">
                  
               </span>
           </div>
        </div>
   </section>
  )
}

export default About