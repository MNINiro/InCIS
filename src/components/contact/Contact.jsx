import React from 'react'
import './contact.css';
import img from '../../assets/images/contact.png'
import google from '../../assets/images/google.png'


const Contact = () => {
  return (
    <>
      <section class="contact">
        <div class="container contact__container">
          <aside class="contact__aside">
            <div class="aside__image">
              <img src={img} alt="" />
            </div>

            <h2>Contact us</h2>
            <p>
              We are ready to hear any kind of queries regarding admission,
              courses or university admission from you.
              Please do not hesitate to call us or just drop a message here. Thanks.
            </p>

            <div className="contact__location">
              <ul class="contact__details">
                <li>
                  <i class="uil uil-phone-times"></i>
                  <h5>+8801715961971</h5>
                </li>
                <li>
                  <i class="uil uil-phone-times"></i>
                  <h5>+8801712131480</h5>
                </li>
                <li>
                  <i class="uil uil-envelope"></i>
                  <h5>information@incis.info</h5>
                </li>
                <li>
                  <i class="uil uil-location-point"></i>
                  <h5>House 15, Road 10A, Sector 11 Uttara, Dhaka, Bangladesh</h5>
                </li>
              </ul>
              <div className="contact__map">
                <h5>Check in Google map</h5>                
                <img src={google} alt="" />
              </div>
            </div>
            <ul class="contact__socials">
              <li><a href="https://facebook.com"><i class="uil uil-facebook-f"></i></a></li>
              <li><a href="https://linkedin.com"><i class="uil uil-linkedin-alt"></i></a></li>
              <li><a href="https://instagram.com"><i class="uil uil-instagram"></i></a></li>
              <li><a href="https://twitter.com"><i class="uil uil-twitter"></i></a></li>
            </ul>
          </aside>
          {/* Form Section */}

          <form action="https://formspree.io/f/xayvppgl" method="POST" class="contact__form">
            <div className="form__name">
              <input type="text" name='First Name' placeholder='First Name' required />
              <input type="text" name='Last Name' placeholder='Last Name' required />
            </div>

            <input type="email" name='Email Address' placeholder='Your Email Address' required />
            <textarea name="message" rows="7" placeholder='Message' required></textarea>

            <button type='submit' className='btn btn-primary'>Send Message</button>

          </form>


        </div>
      </section>
    </>
  )
}

export default Contact