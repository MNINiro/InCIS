import React from 'react'
import './about.css'
import img from '../../assets/images/About.png'

const About = () => {
  return (
    <section class="about">
      <div class="container about__container">
        <h1>About Us </h1>
        <div className="about__intro">
          <p><strong>The International Centre for Integrated Studies (InCIS) </strong>
            became operational from January 2001. The institute was founded by
            foresighted professional teachers. It was founded basically to meet the
            challenges of the time as well as fulfil the shortage of quality educational
            institutions in the country. To build morally and academically sound citizens
            for the service of the nation.</p>
        </div>

        <div className="about__image">
          <img src={img} alt="" />
        </div>

        <section className='description'>

          <div className="about__teaching-programs">
            <p> <strong> Teaching Programmes: </strong> <br /><br />
              Being an IGCSE, O’ and A’ level specialized institution, we offer the regular
              curriculum of the Pearson’s Edexcel International examinations. The institute
              has a rigorous programme that includes up to date teaching methods, study trips,
              seminars, discussions, field visits and remedial classes. We have continuous review
              and assessment of the students’ academic progress through regular and periodic
              assignments, tests and follow up activities.</p>
          </div>

          <div className="about__future-plans">
            <p> <strong>Future Plans: </strong> <br /><br />
              We are planning to introduce specialized tertiary level education in vocational
              fields besides regular courses for the first time in the country. It will help
              the young generation to prepare themselves as a skilled workforce for the nation
              as well as for the developed countries in the world.</p>
          </div>
        </section>

        <div className="about__ataglance">
          <ul>
            <li>Pearson’s Edexcel International examinations curriculum with an international dimension</li>
            <li>Highly qualified, most successful and dedicated teachers</li>
            <li>Proven records of outstanding results</li>
            <li>Quiet, safe and academic conducive location</li>
            <li>Additional assistance for children with special need</li>
            <li>A wide range of extracurricular activities</li>
          </ul>
          <ul>
            <li>All air-conditioned classrooms with latest facilities</li>
            <li>Well-equipped computer laboratory</li>
            <li>Calm and quiet study area with sufficient books</li>
            <li>Audio-visual based classes</li>
            <li>Uninterrupted Internet facility</li>
            <li>Alternate power supply</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About