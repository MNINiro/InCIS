import React from 'react'
import './sat.css'
import img from '../../assets/images/sat.png'
import table from '../../assets/images/sat_table.png'

function Sat() {
    return (
        <>
            <section class="sat">
                <div className="container sat__container">
                    <div className="sat__heading">
                        <img src={img} alt="" />
                    </div>

                    <div className="sat__intro">
                        <h2>What is the SAT? </h2>
                        <p>The SAT is a widely accepted standardized college admission test that helps Colleges assess your academic ability and potential in comparison with the rest of the applicants in your graduating class across the world. Since the test is standardized, it helps level the playing field so that students from all backgrounds have an equal chance to succeed.</p>
                        <p>The SAT1 is a comprehensive test for Mathematics, Reading Comprehension, Language Aptitude along with an optional Essay section (discontinued recently) which aims to test the logical abilities of the applicants. Broader-level skills like critical and analytical thinking will be assessed through SAT1 exam. </p>
                        <p>SAT College Board has recently announced the discontinuation of the SAT Subject Test (SAT2).</p>
                    </div>

                    <div className="sat__why">
                        <h2>Why should I take the SAT?</h2>
                        <p> It’s a requirement: Most universities require a standardized test score (either SAT or ACT) as part of the college application.</p>
                        <p>Scholarships: Many universities use your SAT score to see if they can provide you with merit-based scholarships.</p>
                    </div>

                    <div className="sat__score">
                        <h2>What is the SAT scored out of?</h2>
                        <p>The SAT is out of a total of 1600 points. Evidence based reading + writing are two separate tests each count for 400 points, for a total of 800. The math section is scored out of 800 points.</p>
                    </div>

                    <div className="sat__what">
                        <h2>What is on the SAT? How long is the SAT?</h2>
                        <p>The SAT tests you for your math, evidence-based reading and writing skills. The entire test takes 3 hours(plus 50-minute optional essay, which is now available only in US states).</p>
                        <img src={table} alt="" />    
                    </div>

                    <div className="sat__when">
                        <h2>When should I take the SAT?</h2>
                        <p>Most students take the test 2nd semester of their junior (11th grade) year. Definitely plan to be finished with your SAT by October/November of Senior year.</p>
                    </div>

                    <div className="sat__prepare">
                        <h2>Do I need to prepare for the SAT? When should I start preparing for the SAT?</h2>
                        <p>Yes, you should definitely prepare for the SAT. Everyone has the ability to improve, and you want your SAT® score to match your potential so that you can get in to the best possible schools. Start preparing for the SAT® any time after your Sophomore (10th grade) year. Summer is a great time to start because you actually have time to prepare. You should prepare ahead of time – don’t leave it till the last minute.</p>
                    </div>

                    <div className="sat__times">
                        <h2>How many times can I take the SAT?</h2>
                        <p>Although you can take the SAT as many times as you want, we recommend that you take it at least 2 times, and no more than 3 or 4 times.</p>
                    </div>

                    <div className="sat__signup">
                        <h2>How do I sign up for the SAT?</h2>
                        <p>You can register online at SAT.collegeboard.org. Make sure you check the registration deadline well in advance! Also make sure to check the nearest SAT testing center to you – it might not be administered in your school.</p>
                    </div>

                    <div className="sat__maths">
                        <h2>Can I use a calculator for the math sections?</h2>
                        <p>Yes and no! The SAT has one no-calculator section where calculator use is not allowed. For the other section, however, you may use your calculator. Make sure that you check what types of calculators are allowed! </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sat