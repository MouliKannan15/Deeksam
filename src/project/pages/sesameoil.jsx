

import React, { useState } from "react";
import "./coconut.css";

import BasicExample from "../navbar";
import Foot from '../footer';

const Sesameoil = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("1 Liter");
  const [mainImage, setMainImage] = useState("/image/sesameoil.png");

  const priceMap = {
    "500 ml": { price: 175, original: 225 },
    "1 Liter": { price: 330, original: 470 },
    "2 Liter": { price: 530, original: 670 },
    "5 Liter": { price: 1550, original: 1800 },
  };

  const currentPrice = priceMap[size];

  const thumbnails = [
    "/image/ss1.png",
    "/image/ss500.png",
    "/image/sa11.png",
    "/image/sa22.png",
  ];

  return (
    <>
      <BasicExample />

      <h1 className="termhd" data-aos="flip-left">
        WoodPressed Sesame Oil
      </h1>

      <div className="product-container">
        <div className="product-image-section">
          <img
            src={mainImage}
            alt="Wood Pressed Coconut Oil"
            className="product-main-image"
          />
        </div>

        <div className="product-details-section">
          <h1 className="product-title">
            Wood Pressed Sesame Oil (Extracted on Wooden Churner)
          </h1>

          <div className="product-features">
            <div className="feature-item">
              <p>Supports Bone Health</p>
            </div>
            <div className="feature-item">
              <p>Improves immunity and perfect for massage</p>
            </div>
            <div className="feature-item">
              <p>Best for Oil Pulling</p>
            </div>
            <div className="feature-item">
              <p>No Added Preservatives Or Chemicals</p>
            </div>
          </div>

          <div className="size-selector">
            {["500 ml", "1 Liter", "2 Liter", "5 Liter"].map((option) => (
              <button
                key={option}
                className={size === option ? "selected" : ""}
                onClick={() => setSize(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <p className="product-price">
            ₹{currentPrice.price.toFixed(2)}{" "}
            <span className="product-original-price">
              ₹{currentPrice.original.toFixed(2)}
            </span>
          </p>

          <div className="quantity-selector">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>

          <button className="add-to-cart">Add to cart</button>

          <div className="product-thumbnails">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                className={`thumb ${mainImage === thumb ? "active" : ""}`}
                alt={`Thumb ${index + 1}`}
                onClick={() => setMainImage(thumb)}
              />
            ))}
          </div>
        </div>
      </div>


      <div className="three-row-wrapper">
      {/* Heading */}
      <div className="product-heading">
        Enjoy the goodness of handpicked seeds and nutrition packed into every drop
      </div>

      {/* Inline paragraph + image + paragraph */}
      <div className="inline-section">
        <div className="inline-para">
          <p>
            Wood Pressed White Sesame Oil (Cold Pressed) is EXTRACTED ON WOODEN CHURNER.
          </p>
          <p>
           NO CHEMICALS or PRESERVATIVES used while Extraction & Processing.
          </p>
          <p>Wood Pressing ensures it is FULL OF NATURAL ANTI-OXIDANTS & NUTRIENTS.</p>
          <p>Finest quality White Sesame Seeds ensuring that the natural properties and health benefits of white sesame is intact. Sesame seeds are probably one of the first oil seeds known to mankind.</p>
         
          
        </div>

        <div className="inline-img">
          <img src="/image/bull.jfif" alt="Bull-driven churner" />
        </div>

        <div className="inline-para">
          <div className="side-heading">Usage of Sesame Oil:</div>
          <p>
            Cooking Oil
          </p>
          <p>
            Salad Dressing
          </p>
          <p>Massage Oil – Improves Circulation</p>
          <p>Oil Pulling</p>
          <p>Tahini & Hummus</p>
          <p>Sun Damage Prevention</p>
        </div>
      </div>

     
    </div>



    <div className="three-row-wrapper">
      <div className="product-heading">
        Benefits and Uses of Sesame Oil
      </div>
      <div className="inline-section">
      <div className="inline-para">
        <p> Naturally Rich in Antioxidants</p>
        <p>Supports Bone Health</p>
        
      </div>
      <div className="inline-para">
        <p>Helps Build Immune System</p>
        <p>Anti-Inflammatory.</p>
        
      </div>
      <div className="inline-para">
       <p> Equal amounts of MUFA & PUFA</p>
        
      </div>
</div>
    </div>

      <Foot/>

    </>
  );
};

export default Sesameoil;


