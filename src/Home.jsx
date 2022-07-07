import React from 'react'
import Header from './components/header/Header';
import Courses from './components/courses/Courses';
import Ups from './components/ups/Ups';
import Ups_header from './components/ups/Ups_header'


const Home = () => {
    return (
        <>
            <Header />
            <Courses />    
            <Ups_header />        
            <Ups />
        </>
    );
}

export default Home  
