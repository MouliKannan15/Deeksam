import React from "react";
import BasicExample from "../navbar";
import Foot from '../footer';

import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, } from "react-icons/fa";



import './aboutus.css';

function About(){

    return(
        <>
      <BasicExample/>
      <div class="container">
        <div class="row">
            <div class="col-md-4">
            <div class="con1"><h6 className="some" data-aos="fade-left">SOME WORDS ABOUT US</h6>
            <h1 className="speak" data-aos="fade-left">Well-coordinated teamwork speaks About Us</h1></div>
            </div>

            <div class="col-md-3">
                <p className="split" data-aos="fade-right"><div className="splithead">Our Vision</div>We want everyone to know about our amazing products. By spreading the word and promoting our coconut and groundnut oils, we hope to become a trusted name in the industry.</p>
            </div>
            <div class="col-md-3">
                <p className="split" data-aos="fade-right"><div className="splithead">Our Mission</div>Our mission is to assist people in attaining healthier lifestyles by providing authentic and unprocessed coconut and groundnut oil products that promote well-being.</p>
            </div>
        </div>
      </div>


      <div className="aboutcon2">
        {/* <img className="aboutimg" src="/image/anaimalais.jpg" alt="" /> */}
        <div className="aboutpara" data-aos="fade-down"> <div className="abouthead">About Us</div>
        ANAIMALAIS COCO Company is dedicated to bringing you the best products for a healthier lifestyle. Our wood-pressed coconut oil and groundnut oil are just the beginning. Explore our range of value-added products designed to take care of you and your loved ones.

Chitra Arunkumar planned to produce an eco-friendly product range consisting of areca plates and unprocessed, wood-pressed coconut and groundnut oils. Our primary focus is on coconut oil, which can be utilized in a variety of applications such as cooking, skincare, haircare, and infant care.
        </div>

        <img data-aos="zoom-out-left" className="aboutimg" src="/image/anaimalais.jpg" alt="" />
      </div>

      <div className="chithra">
      <h3 className="team">Our Team</h3>
      <img className="chithraimg" src="/image/chithra.jpg" alt="" />
      <div className="chithraname"> Chitra Arunkumar </div>
      <div className="manage"> Managing Partner</div>
      <div className="icon">
                          <a href="#"><FaTwitter /> </a>
                          <a href="#"><FaFacebook /> </a>
                          <a href="#"><FaInstagram /> </a>
                          <a href="#"><FaWhatsapp /> </a>
                          
                      </div>
      </div>


      <div className="aboutcon2">
        <img className="deek" data-aos="zoom-out-right" src="/image/deek.png" alt="" />
        <div className="aboutpara" data-aos="fade-down"> <div className="abouthead">deeksam - making a healthy life</div>
        M/S ANAIMALAIS COCO, our mission is to make every day healthier. Under our registered brand "deeksam - making a healthy life", we are committed to promoting a healthier lifestyle. We offer an amazing range of coconut, groundnut and sesame oil products that are not only perfect for cooking but also packed with health benefits. Our value-added products cater to all your needs, from health care to skin care and baby care. 
        </div>

        
      </div>

<Foot/>
        </>
    )

}

export default About;