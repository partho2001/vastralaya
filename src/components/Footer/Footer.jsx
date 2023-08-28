import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compares</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            We Vastralaya are pioneer in providing world class and best clothes. Its a one stop place for wearables.
            Our clothes are of top notch quality and are affordable too. All types of wearables are available. Come and pick your favourites
            clothes and be more fashionable and stylish.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Phone: (+91) 9000004784
          </span>
          <span>
            Drop us Mail at: vastralaya_cares@gmail.com
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">VASTRALAYA</span>
          <span className="copyright">
           © Copyright 2023. All rights preserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
