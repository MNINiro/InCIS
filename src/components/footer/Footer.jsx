import React from 'react'
import './footer.css'
import { NavLink } from "react-router-dom";
import bc from '../../assets/images/BC.png';
import edexcel from '../../assets/images/Pearson-Logo.png';
import incis from '../../assets/images/InCIS.jpg';

const Footer = () => {
    return (
        <footer>
            <div class="container footer__container">
                
                <div class="footer__1">
                    <a href="index.html" class="footer__logo">                        
                        <img src={incis} alt="" />
                    </a>
                    <p>
                        An afficliated teaching center of Pearson Edexcel and PSGN of the British Council
                    </p>
                    
                    <div className="footer-affiliation">
                        <div className='prearson'>
                            <img src={bc} alt="" />
                        </div>

                        <div className="bc">
                            <img src={edexcel} alt="" />
                        </div>
                    </div>
                </div>

                <div class="footer__2">
                <h4>. . . . . . . . . . . </h4>
                    <ul class="permalinks">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/Academic">Courses</NavLink></li>
                        
                    </ul>
                </div>

                <div class="footer__3">
                    <h4>. . . . . . . . . . . </h4>
                    <ul class="privacy">
                    <li><NavLink to="/UniPlacement">University Placement</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/Privacy">Privacy Policy</NavLink></li>                        
                    </ul>
                </div>

                <div class="footer__4">
                    <h4>Contact Us</h4>
                    <div>
                        <p>+88 01715 961 971 </p>
                        <p>information@incis.info</p>
                        <p><a><NavLink to="/contact"><span>Address:</span></NavLink></a>  House 15, Road 10A, 
                        Sector 11 Uttara, Dhaka-1230</p>
                    </div>

                    <ul class="footer__social">
                        <li><a href="https://www.facebook.com/InCISLtd" target="_blank"><i class="uil uil-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/6833800" target="_blank"><i class="uil uil-linkedin-alt"></i></a></li>
                        <li><a href="#"><i class="uil uil-twitter"></i></a></li>
                        <li><a href="#"><i class="uil uil-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer__copyright">
                <small>Copyright &copy; InCIS IT</small>
            </div>
        </footer>
    )
}

export default Footer