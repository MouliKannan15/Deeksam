

import React, { useState } from "react";
import "./coconut.css";

import BasicExample from "../navbar";
import Foot from '../footer';

const Groundnut = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("1 Liter");
  const [mainImage, setMainImage] = useState("/image/groundnut.png");

  const priceMap = {
    "500 ml": { price: 175, original: 225 },
    "1 Liter": { price: 330, original: 470 },
    "2 Liter": { price: 530, original: 670 },
    "5 Liter": { price: 1550, original: 1800 },
  };

  const currentPrice = priceMap[size];

  const thumbnails = [
    "/image/groundnut.png",
    "/image/gd1.png",
    "/image/gd2.png",
    "/image/ground5L.jpg",
  ];

  return (
    <>
      <BasicExample />

      <h1 className="termhd" data-aos="flip-left">
        WoodPressed Groundnut Oil
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
            Wood Pressed Groundnut Oil (Extracted on Wooden Churner)
          </h1>

          <div className="product-features">
            <div className="feature-item">
              <p>Rich In Beta Carotene</p>
            </div>
            <div className="feature-item">
              <p>Rich in Natural Antioxidants</p>
            </div>
            <div className="feature-item">
              <p>Rich in MUFA</p>
            </div>
            <div className="feature-item">
              <p>Heat stable perfect for high heat cooking</p>
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
            Wood pressed Groundnut Oil (Cold Pressed) is EXTRACTED ON WOODEN CHURNER.
          </p>
          <p>
           NO CHEMICALS or PRESERVATIVES used while Extraction & Processing.
          </p>
          <p>Seeds Broken without adding Water to Retain Lowest Moisture.</p>
          <p>It has undergone FATTY ACID PROFILING to ensure 100% purity and no adulteration.</p>
          <p>Wood Pressed Groundnut oil is RICH IN BETA CAROTENE, OMEGA 6, VITAMIN E & PLANT BASED STEROLS.</p>
          <p>Wood Pressed Groundnut oil is Perfect for INDIAN COOKING all year round.</p>
          <p>Experience Natural Groundnut aroma fill your home and make your food taste better.</p>
        </div>

        <div className="inline-img">
          <img src="/image/bull.jfif" alt="Bull-driven churner" />
        </div>

        <div className="inline-para">
          <p>
            This Oil is Best Combination of TASTE, AROMA & HEALTHY FATTY ACIDS.
          </p>
          <p>
           Wood Pressing ensures it is FULL OF NATURAL ANTI-OXIDANTS & NUTRIENTS.
          </p>
          <p>
           IndicWisdom Wood pressed Groundnut Oil is extracted from PREMIUM QUALITY LOW FFA (Free Fatty Acids) PEANUTS sourced directly from Farmers
in Saurashtra, Gujarat.
          </p>
          <p>Wood Pressed Groundnut oil is a good source of monounsaturated fats (MUFA) & healthy fatty acids.</p>
          <p>HIGH SMOKE POINT, It is suited from sauteing, shallow frying to deep frying, as it has a high smoke point.</p>
          
        </div>
      </div>

      {/* Row 3 */}
    
     
    </div>

    <div className="three-row-wrapper">
      <div className="product-heading">
        Benefits and Uses of Groundnut Oil
      </div>
      <div className="inline-section">
      <div className="inline-para">
        <p> Contains Healthy Fatty Acids.</p>
        <p>Full Of Natural Antioxidants</p>
        <p> Rich In Vitamin E</p>
      </div>
      <div className="inline-para">
        <p>Rich In Omega 6.</p>
        <p>Rich In Beta Carotene</p>
        
      </div>
      <div className="inline-para">
        <p>Rich In Plant Based Sterols</p>
        <p>High Boiling Point</p>
        
      </div>
</div>
    </div>

      <Foot/>

    </>
  );
};

export default Groundnut;


