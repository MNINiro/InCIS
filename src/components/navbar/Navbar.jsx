import React from 'react'
import './navbar.css'
import './NavbarScroll';
import img from '../../assets/images/InCIS.png'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <navbar className='navi'>
            <div class="container navbar__container">
                <div className='navbar-image'>
                    <a href="/">
                        <img src={img} alt="" />
                    </a>
                </div>

                <ul class="navbar__menu">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Academic">Academic Programs</NavLink></li>
                    <li><NavLink to="/UniPlacement">University Placement</NavLink></li>
                    <li><NavLink to="/about">About us</NavLink></li>
                    <li><NavLink to="/contact">Contact us</NavLink></li>
                </ul>

                <button id="open-menu-btn"><i class="uil uil-ellipsis-v"></i></button>
                <button id="close-menu-btn"><i class="uil uil-times"></i></button>
            </div>            
        </navbar>
    )
}

export default Navbar