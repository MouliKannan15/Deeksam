// import React from "react";
// import'../pages/contact.css';

// import BasicExample from "../navbar";


// import { FaLocationDot } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// import { MdAccessTimeFilled } from "react-icons/md";

// function Contact (){
//     return(
//         <>
//         <BasicExample/>
//         <h1 className="headcon">Contact Us</h1>

//         <div className="contactdetail">
//         <div className="Address">
//             <div className="addhead"> <FaLocationDot />Our Office Address</div>
//             <div className="adddetail">OM Senthur Complex, Kalikkanacken Palayam, Coimbatore, Tamil Nadu 641007.</div>
//             <br />

//             <div className="addhead"> <MdEmail />General Enquiries</div>
//             <div className="adddetail">info@anaimalaiscoco.com</div>

//             <div className="addhead"> <IoCall />Call Us</div>
//             <div className="adddetail">+91-8925817100
//                                        +91-8925817104</div>

//             <div className="addhead"><MdAccessTimeFilled />Our Timing</div>
//             <div className="adddetail">Mon - Sat : 08:00 AM - 08:00 PM
//                                        Sun : Closed</div>

//         </div>
//         <div className="condata">
//             <div className="sample">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur libero quae quia amet, officia ut pariatur ipsa modi harum et facere beatae error deserunt accusamus non mollitia dicta eius nihil!</div>
          
//         </div>
//         </div>
//         </>
//     )
// }

// export default Contact;




import React, { useState } from "react";
import '../pages/contact.css';

import Foot from "../footer";

import BasicExample from "../navbar";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Reset form
    setFormData({ name: '', email: '', contact: '', message: '' });
  };

  return (
    <>
      <BasicExample />
      <h1 className="headcon">Contact Us</h1>

      <div className="contact-wrapper" >
        <div className="contact-box" data-aos="zoom-in">
          
          <h3><FaLocationDot /> Our Office Address</h3>
          <p>OM Senthur Complex, Kalikkanacken Palayam, Coimbatore, Tamil Nadu 641007</p>

          <h3><MdEmail /> General Enquiries</h3>
          <p>info@anaimalaiscoco.com</p>

          <h3><IoCall /> Call Us</h3>
          <p>+91-8925817100, +91-8925817104</p>

          <h3><MdAccessTimeFilled /> Our Timing</h3>
          <p>Mon - Sat: 08:00 AM - 08:00 PM<br />Sun: Closed</p>
        </div>

        <form className="contact-form"  onSubmit={handleSubmit} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="maproot">
        <iframe className="mapping" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31331.93351989458!2d76.871563!3d11.001688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85fec3d54b8c5%3A0x595f17f6066ecd50!2sANAIMALAIS%20COCO!5e0!3m2!1sen!2sin!4v1743922296164!5m2!1sen!2sin"></iframe>
        </div>



    <Foot/>    
    </>
  );
}

export default Contact;
