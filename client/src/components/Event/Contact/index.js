import React from 'react'
import './style.css';
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";


const ContactUsComponent = () => {
  return (
    <div><div className="container3">
      <div className="contact">
        <div className="contact-detail">
          <h2>How can I contact the organiser with any question</h2>
          <br />
          <p style={{ fontSize: "20px" }}>Please contact :-  <a href="#" style={{ textDecoration: "none" }}>+91989******9</a> for any event related query </p>
        </div>
      </div>
      <div className="socials">
        <div className="share">
          <h2>Share With Friends</h2>
        </div>
        <br />
        <div className="socials-logo">
          <a href="#" className="fa"><BsInstagram /></a>
          <a href="#" className="fa"><BsLinkedin /></a>
          <a href="#" className="fa"><BsTwitter /></a>
          <a href="#" className="fa"><BsFacebook /></a>
        </div>
      </div>
    </div></div>
  )
}

export default ContactUsComponent