import React from 'react'
import './academicHeader.css'
import img from '../../assets/images/header.png'
import { NavLink } from 'react-router-dom'

function AcademicHeader() {
    return (
        <>
            <header>
                <div class="container header__container">
                    <div class="header__left">
                        <h1>Grow your skills to advance your career</h1>
                        <p>Our courses will help you to build your confidence strongly</p>
                        <a class="btn btn-primary">
                            <NavLink to="/Contact">Contact us </NavLink>
                        </a>
                    </div>

                    <div class="header__right">
                        <div class="header__righr-image">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default AcademicHeader