import React from 'react'
import './courses.css';
import { NavLink } from "react-router-dom";

const courses = () => {
  return (
    <section class="courses">
      <h2>Our Popular Courses</h2>

      <div class="container courses__container">
        
        <article class="course">
          <div class="course__heading">            
            <h1>IGCSE/O Level</h1>
          </div>

          <div class="course__info">
            <h4>GCE is one of the most internationally recognised qualifications.
            </h4>
            <p>
              International General Certificate of Secondary Education (IGCSE)
              is available to international students.
            </p>
            <a class="btn btn-primary">
              <NavLink to="/Igcse">Learn More </NavLink>
            </a>
          </div>
        </article>

        <article class="course">
          <div class="course__heading">            
            <h1>International A Level</h1>
          </div>

          <div class="course__info">
            <h4>A-Level is an Advanced level GCE qualification</h4>
            <p>
              Anyone who has completed IGCSE or O-Level Examination under any board in the UK can take
              International A-Level for their higher studies.
            </p>
            <a class="btn btn-primary">
              <NavLink to="/Ial">Learn More </NavLink>
            </a>
          </div>
        </article>

        <article class="course">
          <div class="course__heading">
            <h1>IELTS</h1>
          </div>

          <div class="course__info">
            <h4>The International English Language Testing System (IELTS)</h4>
            <p>It is designed to help you work, study or migrate to a country where 
              English is the native language. This includes countries such as Australia, 
              Canada, New Zealand, the UK and USA.</p>
            <a class="btn btn-primary">
              <NavLink to="/Ielts">Learn More </NavLink>
            </a>
          </div>
        </article>

        <article class="course">
          <div class="course__heading">            
            <h1>Professional Courses</h1>
          </div>

          <div class="course__info">
            <h4>We are offering customized professional courses for early
              learners to senior executives.</h4>
            <p>
              These courses have been designed according to the demand of the corporates
              to enhance the skills of their workforces.
            </p>
            <a class="btn btn-primary">
              <NavLink to="/Professional">Learn More </NavLink>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default courses