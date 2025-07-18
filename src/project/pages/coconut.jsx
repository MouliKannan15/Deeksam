

import React, { useState } from "react";
import "./coconut.css";

import BasicExample from "../navbar";
import Foot from '../footer';

const Coconut = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("1 Liter");
  const [mainImage, setMainImage] = useState("/image/Nourishes Hair & Scalp.png");

  const priceMap = {
    "500 ml": { price: 175, original: 225 },
    "1 Liter": { price: 330, original: 470 },
    "2 Liter": { price: 530, original: 670 },
    "5 Liter": { price: 1550, original: 1800 },
  };

  const currentPrice = priceMap[size];

  const thumbnails = [
    "/image/cocodesign1.png",
    "/image/cocodesign.png",
    "/image/coco2L.png",
    "/image/coco5LL.png",
  ];

  return (
    <>
      <BasicExample />

      <h1 className="termhd" data-aos="flip-left">
        WoodPressed Coconut Oil
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
            Wood Pressed Coconut Oil (Extracted on Wooden Churner)
          </h1>

          <div className="product-features">
            <div className="feature-item">
              <p>Contains Lauric Acid</p>
            </div>
            <div className="feature-item">
              <p>MCT Rich (Medium Chain Triglycerides)</p>
            </div>
            <div className="feature-item">
              <p>Natural Flavour And Aromas</p>
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
            Wood Pressed Coconut Oil is extracted in Wooden Churners at Room Temperature.
          </p>
          <p>
            Extracted from freshly harvested uncut copra with self-assimilated coconut water. IndicWisdom Virgin Wood Pressed Coconut is 100% pure, Natural and unrefined.
          </p>
          <p>
            Wood Pressing (Cold Pressed) oil has all the vital nutrients preserved, with a rich aroma and flavour of real coconuts.
          </p>
          <p>
            It can be consumed directly and is also a great alternative medium for daily cooking.
          </p>
          <p>
            Coconut oil is one of the richest sources of naturally occurring MCTs (Medium Chain Triglycerides – healthy fats), it gets digested easily to release instant energy and also helps in weight management.
          </p>
        </div>

        <div className="inline-img">
          <img src="/image/bull.jfif" alt="Bull-driven churner" />
        </div>

        <div className="inline-para">
          <div className="side-heading">Why Wood Pressed?</div>
          <p>
            Wood Pressed Coconut Oil is a rich source of naturally occurring Lauric acid C12 and Vitamin E which helps to improve body immunity along with many other health benefits.
          </p>
          <p>
            It is rightly termed as a Superfood with its multiple benefits. Due to its better oxidative stability and high smoke point, Wood Pressed Coconut Oil is a great cooking oil even at high temperatures. This oil can also be used as a regular edible oil. Being 100% pure and Natural coconut oil, it freezes below 25*C. Immerse in warm water in order to liquefy before usage.
          </p>
          <p>
           IndicWisdom’s Coconut Oil is 100% Pure, Vegan, Preservative Free, Gluten Free, Non GMO & Natural Coconut Oil. It is suggested for diets like Keto and other such healthy regimens
          </p>
        </div>
      </div>

      {/* Row 3 */}
      
    </div>
    <div className="three-row-wrapper">
      <div className="product-heading">
        Benefits and Uses of Coconut oil
      </div>
      <div className="inline-section">
      <div className="inline-para">
        <p> Helps Manage Weight.</p>
        <p>Boost Brain Function.</p>
        <p>Protects & Nourishes Skin, Hair & Teeth.</p>
      </div>
      <div className="inline-para">
        <p>Hair & Skin Care.</p>
        <p>Cooking & Baking.</p>
        <p>Baby Care.</p>
      </div>
      <div className="inline-para">
        <p>Raw Consumption.</p>
        <p>Oral Health & Hygiene.</p>
        <p>Massage Therapy.</p>
      </div>
</div>
    </div>
    

      <Foot/>

    </>
  );
};

export default Coconut;


