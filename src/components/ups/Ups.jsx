import React from 'react'
import { NavLink } from "react-router-dom";
import './ups.css'


const Ups = () => {
  return (
    <section class="Ups__services">
      <div class="container ups__container">        

        <article class="ups">
          <div class="ups__heading">
            <h1>Undraduate</h1>
          </div>

          <div class="ups__info">
            <h4>After a well-round education here locally, we feel it to be a
              waste of talent and labour if these young and exuberant minds
              are not tested. </h4>
            <p>
              It is quite pointless to have such a well-round
              background if it does not lead them to the top institutions.
            </p>
            <a class="btn btn-primary">
              <NavLink to="/Undergraduate">Learn More </NavLink>
            </a>
          </div>
        </article>

        <article class="ups">
          <div class="ups__heading">
            <h1>Masters</h1>
          </div>

          <div class="ups__info">
            <h4>For the Masters’ program, the USA, Canada, England, and
              Australia are the most common destination for higher study abroad. </h4>
            <p>
              These countries offer the best quality of education for the next
              generation.
            </p>
            <a class="btn btn-primary">
              <NavLink to="/Masters">Learn More </NavLink>
            </a>
          </div>
        </article>

        <article class="ups">
          <div class="ups__heading">
            <h1>Doctorate</h1>
          </div>

          <div class="ups__info">
            <h4>A doctorate degree is the highest level of academic degree in most fields.</h4>
            <p>
              The PhD degree signifies that you have attained the greatest level of competence in your field of study.
            </p>
            <a class="btn btn-primary">
              <NavLink to="/Doctorate">Learn More </NavLink>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Ups