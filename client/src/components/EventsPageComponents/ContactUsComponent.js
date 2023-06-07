import React from 'react'
import "./ContactUsComponent.css"
import { FaInstagram } from "react-icons/fa";

const ContactUsComponent = () => {
  return (
    <div><div className="container3">
    <div className="contact">
    <div className="contact-detail">
        <h2>How can I contact the organiser with any question</h2>
        <br/>
        <p style={{fontSize: "20px"}}>Please contact :-  <a href="#" style={{textDecoration: "none"}}>+91989******9</a> for any event related query </p>
    </div>
    </div>
    <div className="socials">
      <div className="share">
        <h2>Share With Friends</h2>
      </div>
      <br/>
      <div className="socials-logo">
        <a href="#" className="fa fa-instagram"></a>
        <a href="#" className="fa fa-linkedin"></a>
        <a href="#" className="fa fa-twitter"></a>
        <a href="#" className="fa fa-facebook"></a>
      </div>
    </div>
 </div></div>
  )
}

export default ContactUsComponent