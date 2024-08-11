import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import config from "../config.json"
function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container">
                 
                    
                        {/* <h1>Our Newsletter</h1>
                        <div className="border"></div>
                        <p>Register to be a general member by signing up for our newsletter</p>
                        <div className="newsletter-form">
                            
                            <MailchimpSubscribe url={config.newsletter.MAILCHIMP_URL} />
                        </div> */}
                        
                            <div className="social-media">
                            <a href="https://www.facebook.com/nassim.terzout/"><i className="fab fa-facebook fa-5x"></i></a>
                            
                            <a href="https://github.com/Nassim-Terzout"><i className="fab fa-github fa-5x"></i></a>
                            
                            <a href="https://www.linkedin.com/in/nassimterzout/"><i className="fab fa-linkedin-in fa-5x"></i></a>
                            </div>
                            
                    
                </div>
            </footer>
        </>
    );
}

export default Footer;