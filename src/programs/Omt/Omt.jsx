import React from 'react'
import './omt.css'
import { NavLink } from 'react-router-dom'
import office_img from '../../assets/images/office.jpg'

function Omt() {
  return (
    <>
      <section>
        <div className="container omt_header__container">
          
          <div className="omt_header__left">
            <h1>Enhance your work level productivity</h1>
            <p>Improve your skills and beat your challenges.</p>
            <a class="btn btn-primary">
              <NavLink to="/Contact">Contact us </NavLink>
            </a>
          </div>

          <div className="omt_header__right">
            <div class="omt_header__righr-image">
              <img src={office_img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Omt