import React from 'react'
import './professional.css'
import Omt from '../Omt/Omt'

const Professional = () => {
    return (
        <>
            <section class="professional">

                <Omt />

                <div className="container pro__container">
                    <div className="pro__intro">
                        <h2>Why Professional IT Courses?</h2>
                        <p>Professional IT courses focus on improving your competence to accomplish in a
                            particular occupation. If you have a clear career objective and desire
                            to gain valuable firsthand experience through IT training, taking a professional IT
                            course is ideal for you.</p>
                    </div>

                    <div className="pro__who">
                        <h2>Is our Course Time and Duration Flexible?</h2>
                        <p>Our courses duration and timing are flexible. It can be conducted even on weekends.
                            Our classes are online and live, so learners can join from their comfort zones and
                            participate in a relaxed way. There is a feedback session after each class so, they
                            can ask any relevant questions or discuss their problems with their lessons.</p>
                    </div>

                    <div className="pro__candidates">
                        <h2>Will there be any assignment?</h2>
                        <p>At the end of each topic, a small assignment is given. Learners must complete the
                            assignment and submit it within stipulated times. Feedback is normally given in
                            the following week. When a course is fully completed, a small project is given on the
                            entire course so learners can prove their understanding and improve efficiency.
                            A professional course completion certificate will be awarded to each learner.</p>
                    </div>

                    <div className="pro__cerificate">
                        <h2>Will You Get a Certificate?</h2>
                        <p>A professional course completion certificate will be awarded to each learner.</p>
                    </div>


                    <div className="ial__more">
                        <h2>Where can I find out more?</h2>
                        <p>You can contact our office for more information and advice on professional courses
                            or you can talk with us over phone or send us messege through contact form.</p>
                    </div>

                    <div className="pro__courses">
                        <div className="pro__office">
                            <h3>Office Packages</h3>
                            <ul>
                                <li>WordProcessing</li>
                                <li>Advanced Spreadsheet</li>
                                <li>Database Management Systems</li>
                                <li>Presentation Design</li>
                                <li> Project Management</li>
                                <li>English Language skill development</li>
                            </ul>
                        </div>

                        <div className="pro__graphics">
                            <h3>Graphics Design</h3>
                            <ul>
                                <li>Photo Editing</li>
                                <li>Video Editing</li>
                                <li>Audio Editing</li>
                                <li>Animation</li>
                            </ul>
                        </div>

                        <div className="pro__programming">
                            <h3>Programming Courses</h3>
                            <ul>
                                <li>Python</li>
                                <li>Java</li>
                                <li>HTML5</li>
                                <li>CSS</li>
                                <li>JavaScripts</li>
                                <li>React JS</li>
                                <li>Node JS</li>
                                <li>WordPress</li>
                            </ul>
                        </div>
                    </div>

                    <h1 className='pro__bottom'>We can add any course on-demand</h1>
                </div>
            </section>
        </>
    )
}

export default Professional