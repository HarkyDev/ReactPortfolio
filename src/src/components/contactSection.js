import React from "react";
import ContactForm from "./contactForm";
import "../styles/ContactSection.css"


function Hero() {
    return (
      <div class="contactSectionContainer">
        <div class="contactInfo">
            <p class="lineOne">Get in touch.</p>        
            <p class="lineTwo">send me and email.</p>        
        </div>         
        <ContactForm />
      </div>
    );
  }

  export default Hero;