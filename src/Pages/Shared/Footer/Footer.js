import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className = "footer-icon">
                <h1 className="footer-title">Happy Tour</h1>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-whatsapp-square"></i>
                <p>It's a visitor agency where from you can get many offers.<br /> Get visit for Happiness.</p>
               
                
            </div>
            <div className="footer-menu">
                <br /><br />
                <NavLink to = "/home">Home</NavLink>
                <br />
                <br />
                <NavLink to = "/services">Services</NavLink>
                <br />
                <br />
                <NavLink to = "/admin">Admin</NavLink>
                <br />
                <br />
                <NavLink to = "/news">News</NavLink>

            </div>
            <div className="contact-item">
                <h1 className="text-primary">Sign Up for the newsletter</h1>
                <label htmlFor="email">Email:   
                <input type="email" name="email" placeholder="Enter your email" id="" />
                </label>
                <p><i class="fas fa-phone-square-alt"></i> <span className="text-light">:01851*****</span> </p>
                <p><i class="fas fa-map-marked-alt"></i> <span className="text-white">: D.T Sagorika, Pahartali, Chittagong,Bangladesh</span> </p>
            </div>
        </div>
    );
};

export default Footer;