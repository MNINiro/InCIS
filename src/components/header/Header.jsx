import React from 'react'
import './header.css';
import ad1 from '../../assets/images/ad1.png';
import ad2 from '../../assets/images/ad2.png';
import ad3 from '../../assets/images/ad3.png';
import ad4 from '../../assets/images/ad4.jpg';
import headerAuto from './headerAuto';


const Header = () => {
    return (
        <header>
            <div className="slider">
                <div className="slides">
                    <input type="radio" name='radio-btn' id='radio1' />
                    <input type="radio" name='radio-btn' id='radio2' />
                    <input type="radio" name='radio-btn' id='radio3' />
                    <input type="radio" name='radio-btn' id='radio4' />

                    {/* Image slide */}
                    <div className="slide first">
                        <img src={ad1} alt="" />
                    </div>
                    <div className="slide">
                        <img src={ad2} alt="" />
                    </div>
                    <div className="slide">
                        <img src={ad3} alt="" />
                    </div>
                    <div className="slide">
                        <img src={ad4} alt="" />
                    </div>

                    {/* Auto navigation */}
                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                    </div>
                </div>

                {/* Manual nagigation */}
                <div className="navigation-manual">
                    <label for="radio1" className='manual-btn'></label>
                    <label for="radio2" className='manual-btn'></label>
                    <label for="radio3" className='manual-btn'></label>
                    <label for="radio4" className='manual-btn'></label>
                </div>
            </div>   
            <headerAuto />          
        </header>
    )
}

export default Header