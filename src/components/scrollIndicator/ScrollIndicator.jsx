import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './scrollIndicator.css'

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled)
  }

  useEffect( () => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  },[]);

  return (
    <div className='AppScroll'>        
        <div className="progressMainWrapper">
            <div className="progressMainStyle" style={{width: `${scrollTop}%`}}></div>
        </div>
    </div>
  )
}

export default ScrollIndicator;