import React from 'react'
import './undergraduate.css'
import img from '../../assets/images/Undergraduate.png'


const Undergraduate = () => {
  return (
    <>
      <section class="undergraduate">
        <div class="container undergraduate__container">
          <div className="undergraduate__image">
            <img src={img} alt="" />
          </div>

          <div className="undergraduate__intro">
            <p>After a well-round education here locally, we feel it to be a
              waste of talent and labour if these young and exuberant minds
              are not tested. It is quite pointless to have such a well-round
              background if it does not lead them to the top institutions.
              That is why we here at <strong>InCIS</strong> are there to help you every step
              of the way in order for admission into these top schools. InCIS
              will provide thorough academic counselling on a one-on-one basis. </p>
          </div>

          <div className="undergraduate__requirements">
            <h2>What documets will be required initially?</h2>
            <p>The following documents will be required to assess the potential of a student. 
              We will analyze all these papers thoroughly to know where to place a student 
              perfectly. We also figure out how to make up if there is any lacking in any 
              specific area. We will ensure consistent support for any relevant work. </p>
            <ul>
              <li>School transcripts</li>
              <li>Certificates</li>
              <li>Teachers recommendations</li>
              <li>ECA evidences</li>
              <li>Aptitude tests score</li>
              <li>English language proficiency Test score</li>
              <li>Proof of financial strength</li>
            </ul>
          </div>

          <div className="undergraduate__services">
            <h2>What Services we will offer</h2>

            <p> After careful evaluation of your documents and one-on-one counselling,
              we hope to provide you with a shortlist of best-fit universities/colleges
              according to the student’s qualifications and calibre.</p>
            <p>
              We will also provide assistance in preparing documents for application to
              the institution. These might include help in filling out the various forms
              and prepare documents such as recommendations from instructors.
            </p>
            <p>One of the prime factors in the admission process is the essay writing.
              It expresses the applicant’s views and English proficiency and is an integral
              part of admission to such institutions. We at InCIS will be providing assistance
              in preparing the perfect essay for you.</p>

            <p>Besides all the above, InCIS will also provide all kinds of assistance regarding
              the standardized tests that are required for admission into foreign institutions.
              These may include SAT, TOEFL or IELTS.</p>
          </div>

          <div className="undergraduate__help">
            <h2>What additional help will InCIS offer</h2>
            <ul>
              <li>Formal classes for SAT, TOEFL and IELTS*</li>
              <li>Any help regarding registration for these tests which may include:</li>
              <li>Paperwork or the usage of our credit card with the appropriate service charges based on the current exchange rate.</li>
              <li>Courier service support for sending documents abroad.</li>
              <li>we will also provide visa-related information, bank loan information as well as airline arrangements(optional).</li>
            </ul>
          </div>



        </div>
      </section>
    </>
  )
}

export default Undergraduate