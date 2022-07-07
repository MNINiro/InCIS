import React from 'react'
import './nav.css';
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react';

const Nav = () => {
  // to active clicked nav buttons and deactivate others
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <NavLink to="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></NavLink>
      <NavLink to="/Academic" onClick={() => setActiveNav('#Academic')} className={activeNav === '#Academic' ? 'active' : ''} ><BiBook /></NavLink>
      <NavLink to="/UniPlacement" onClick={() => setActiveNav('#UniPlacement')} className={activeNav === '#UniPlacement' ? 'active' : ''} ><RiServiceLine /></NavLink>
      <NavLink to="/about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser /></NavLink>
      <NavLink to="/contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><BiMessageSquareDetail /></NavLink>
    </nav>
  )
}

export default Nav