import React from 'react'
import './ups_header.css'
import ups_img from '../../assets/images/ups.png'
import { NavLink } from 'react-router-dom'

function ups_header() {
    return (
        <>
            <section className='container ups_header__container'>
                <div class="ups_header__left">
                    <h1>Achieve your desired degree to flourish</h1>
                    <p>Getting our assistance will help you to place yourself in the top-rated universities.</p>
                    <a class="btn btn-primary">
                        <NavLink to="/Contact">Contact us </NavLink>
                    </a>
                </div>

                <div class="ups_header__right">
                    <div class="ups_header__righr-image">
                        <img src={ups_img} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ups_header