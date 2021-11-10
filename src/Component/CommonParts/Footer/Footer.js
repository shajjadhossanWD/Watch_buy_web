import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer_img">
         <div className="row text-white mx-4 py-5" style={{textAlign: 'start', borderBottom: '1px solid white'}} >

             <div className="col-lg-3">
               <p><img src="https://i.ibb.co/pb23j8Y/jwatch-logo-BDBLQQ-1.png" style={{width: '60%'}} alt="" /></p>
               <p>Pioneer in the development of the wristwatch, Rolex is at the origin of numerous major watchmaking innovations, and has registered over 500 patents in the course of its history.</p>
               <i className="fab fa-facebook-square fs-2 me-3"></i>
               <i className="fab fa-twitter-square fs-2 me-3"></i>
               <i className="fab fa-linkedin fs-2 me-3"></i>
             </div>


             <div className="col-lg-3">
              <h2>All Section</h2>
               <p>Home</p>
               <p>All Watch</p>
               <p>About Us</p>
               <p>Pricing</p>
               <p>Contact Us</p>
             </div>


             <div className="col-lg-3">
               <h2>Useful Services</h2>
               <p>Privacy Policy</p>
               <p>24/7 available</p>
               <p>Easy Terms and Condition</p>
               <p>Well Support</p>
               <p>FAQ</p>
             </div>


             <div className="col-lg-3">
              <h2>Contact Info</h2>
              <p>We are always available for provide you our best services. Please Contact us . Contact Information given below</p>
              <p><i class="fas fa-map-marker-alt"></i> Dhanmondi-1243, Dhaka Bangladesh</p>
              <p><i class="fas fa-envelope"></i>shajjadhossan111@gmail.com</p>
              <p><i class="fas fa-envelope"></i>+880 135 3123 532</p>
             </div>
         </div>
         <p className="py-4 text-white">copyright@shajjadhossan.com</p>
        </div>
    );
};

export default Footer;