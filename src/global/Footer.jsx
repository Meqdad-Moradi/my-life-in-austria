import React from "react";
import Logo from "./Logo";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <Logo />

            <div className="footer-content">
               <div className="footer-links">
                  <a href="#">Impresum / Disklaimar</a>
                  <a href="#">Datenschutz</a>
                  <a href="#">Technischeanforderungen</a>
               </div>

               <div className="social">
                  <a
                     href="http://www.facebook.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FaFacebook />
                  </a>
                  <a
                     href="http://www.instagram.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FaInstagram />
                  </a>
                  <a
                     href="http://www.twitter.com/"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FaTwitter />
                  </a>
               </div>
            </div>

            <small className="copyright">Copyright &copy; 2022, Meqdad Moradi. All right reserved.</small>
         </div>
      </footer>
   );
};

export default Footer;
