import React from 'react'
import './academic.css'
import AcademicHeader from './AcademicHeader';
import { NavLink } from 'react-router-dom'

const Academic = () => {
  return (
    <>
      <AcademicHeader />
      {/* CATEGORY SECTION */}
      <section class="categories">
        <div class="container categories__container">

          <div class="categories__left">
            <h1>Courses</h1>
            <p>InCIS is a multifarious institution to build your career path. Our primary focus is on preparing candidates in the best possible way to achieve top grades in their respective public examinations.</p>
            <p>Only academic results are not sufficient to achieve your career goals. You must have skills in more areas to best fit the global demand. We have arranged a few must-have courses to give you a leading edge compared to your competitors.</p>
          </div>

          <div class="categories__right">
            <article class="category">

              <span class="category__icon"><i class="uil uil-bitcoin-circle"></i></span>
              <h5>IGCSE</h5>
              <p>IGCSE/O-Level is the first public examination of your future career.
              <a href="">
                <NavLink to="/Igcse"> Learn More </NavLink>
              </a> </p>
            </article>

            <article class="category">
              <span class="category__icon"><i class="uil uil-brackets-curly"></i></span>
              <h5>International A Level</h5>
              <p>IAL is your final school level examination that will lead to uniiversities.
              <a href="">
                <NavLink to="/Ial"> Learn More </NavLink>
              </a></p>
            </article>

            <article class="category">
              <span class="category__icon"><i class="uil uil-dollar-alt"></i></span>
              <h5>IELTS</h5>
              <p>Either for study abroad or for immigration, you must have good IELTS scores.
              <a href="">
                <NavLink to="/Ielts"> Learn More </NavLink>
              </a></p>
            </article>

            <article class="category">
              <span class="category__icon"><i class="uil uil-megaphone"></i></span>
              <h5>SAT</h5>
              <p>It is an aptitude test for those students who want to study in the USA.
              <a href="">
                <NavLink to="/Sat"> Learn More </NavLink>
              </a></p>              
            </article>

            <article class="category">
              <span class="category__icon"><i class="uil uil-brackets-curly"></i></span>
              <h5>Programming</h5>
              <p>For further development, learn any demanding language.
              <a href="">
                <NavLink to="/Coding"> Learn More </NavLink>
              </a></p>  
            </article>

            <article class="category">
              <span class="category__icon"><i class="uil uil-puzzle-piece"></i></span>
              <h5>Office Management Tools</h5>
              <p>Enhance your productivity learn office management tools.
              <a href="">
                <NavLink to="/Professional"> Learn More </NavLink>
              </a></p>  
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default Academic