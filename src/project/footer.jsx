import React from "react";


import { FaLocationDot } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";



import "./footer.css";

// function Foot(){
//     return(
//         <>
//         <footer className="footer">
//             <div className="Address">
//                 <h2>Office Address</h2>
//                 <p> <FaLocationDot /> Thondamuthur Main Road,
//                     Kalikanaickenpalayam, 
//                     Om Sendhur Complex,
//                     Coimbatore - 641007.
//                 </p>
//                 <p>
//                 <FaMobileScreenButton />  +918925817100
//                 </p>
//                 <p>
//                 <FaMobileScreenButton />     +918925817104
//                 </p>
//                 <p><MdOutlineMail />info@anaimalaiscoco.com</p>

//             </div>

//             <div className="pages">
//                 <h2>Our Pages</h2>
                
//                      <a href="">Terms and Conditions </a>
//                     <a href="">Cancellation and Refund</a>
//                     <a href="">Shipping and Delivery</a>
//                     <a href="">Privacy Policy</a>
                
//             </div>

//             <div className="pages">
               

//                 <img src="/image/logo1.avif" alt="" />
//                 <p>GSTIN No: 33ACCFA6763G1ZJ</p>
//                 <p>FSSAI License No: 12424003000283</p>
                
                
//             </div>

//             <div>
//             <h2>Social Media</h2>
//             <a href="">Twitter </a>
//                     <a href="">Facebook</a>
//                     <a href="">Instagram</a>
//                     <a href="">Whatsup</a>
//                     <a href="">Youtube</a>
//             </div>
//         </footer>
//         </>
//     )
// }

// export default Foot;




function Foot() {
    return (
        <>
        <footer className="footer">
            <div className="address">
                <h2>Office Address</h2>
                <p><FaLocationDot /> Thondamuthur Main Road, Kalikanaickenpalayam, Om Sendhur Complex, Coimbatore - 641007.</p>
                <p><FaMobileScreenButton /> +91 8925817100</p>
                <p><FaMobileScreenButton /> +91 8925817104</p>
                <p><MdOutlineMail /> info@anaimalaiscoco.com</p>
            </div>

            <div className="pages">
                <h2>Our Pages</h2>

                <a href="./about">About Us</a>       
                <a href="./term">Terms and Conditions</a>
                <a href="./refund">Refund and Return policy</a>
                <a href="./policy">Privacy Policy</a>
                <a href="./contact">Contact Us</a>
            </div>

         

            <div className="social-media">
                <h2>Social Media</h2>
                <div className="social-icons">
                    <a href="https://x.com/ananimalaiscoco?t=liei_25brxh31U9ZxZa2iA&s=08"><FaTwitter /> Twitter</a>
                    <a href="https://www.facebook.com/people/Anaimalai-S/pfbid023vkoNXWRup6BTSHV7MxepRnn5jSTtEzNXzpFtgx1dDq99vFVtYpmsYyqZkwyCdB3l/"><FaFacebook /> Facebook</a>
                    <a href="https://www.instagram.com/anaimalaiscoco/?utm_source=qr&igshid=OGIxMTE0OTdkZA%3D%3D"><FaInstagram /> Instagram</a>
                    <a href="https://api.whatsapp.com/send/?phone=918925817102&text=Hello+ANAIMALAIS+COCO%21%0D%0A%0D%0ALike+to+know+more+information+about+-+%27Home%27+-+https%3A%2F%2Fanaimalaiscoco.com%2F&type=phone_number&app_absent=0"><FaWhatsapp /> WhatsApp</a>
                    <a href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fanaimalaiscoco.com%2F"><FaLinkedin /> Linkedin</a>
                </div>
            </div>

            <div className="company-info">
                <img src="/image/anaimalais.jpg" alt="Company Logo" className="cocologo" />
                <p>GSTIN No: 33ACCFA6763G1ZJ</p>
                <p>FSSAI License No: 12424003000283</p>
            </div>

            {/* <div className="copyright">
           
                <p>&copy; {new Date().getFullYear()} Anaimalais Coco. All Rights Reserved.</p>
            </div> */}

        </footer>
        <div className="copyright">
           
        <p>&copy; {new Date().getFullYear()} Anaimalais Coco. All Rights Reserved.</p>
    </div>
    </>
        
    );
}

export default Foot;
