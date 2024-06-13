import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets';


const Footer = () => {

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <a href="#"><img src={assets.logo} alt="" /></a>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab unde, ducimus nulla debitis illum fugiat rem deserunt at commodi repellat enim ea vel tempora, recusandae accusamus error! Officiis, deserunt incidunt.</p>
          <div className="footer-social-icons">
            <a href=""><img src={assets.facebook_icon} alt="" /></a>
            <a href=""><img src={assets.twitter_icon} alt="" /></a>
            <a href="https://www.linkedin.com/in/debashishpandey"> <img src={assets.linkedin_icon} alt="" /></a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9098427449 / 9109827957</li>
            <li>debashish2rudra@gmail.com</li>
          </ul>
        </div>

      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 ⓒ Devashish Tomato.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer;
