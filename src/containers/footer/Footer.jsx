import React from 'react'

import './footer.css';
import gpt3Logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='gpt__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step in to future before others
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="gpt3 Logo" />
          <p>Developed with 🔥💛 by 
            <a href='https://github.com/AmirmahdiSattari'
             className='github-link gradient__text'
             target="_blank"> AmirmahdiSattari</a>
          </p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Iran,Karaj</p>
          <p>09121212121</p>
          <p>amirmahdisattariams@gmail.com</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
      <p>©️ 2023 GPT-3, All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer