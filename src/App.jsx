import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import ScrollIndicator from './components/scrollIndicator/ScrollIndicator';
import Nav from './components/nav/Nav'
import Home from './Home'
import About from "./components/about/About"
import Courses from "./components/courses/Courses"
import Ups from "./components/ups/Ups"
import Contact from "./components/contact/Contact"

import Igcse from './programs/igcse/Igcse'
import Ial from './programs/ial/Ial'
import Ielts from './programs/ielts/Ielts'
import Professional from './programs/professional/Professional'
import Sat from './programs/sat/Sat'
import Coding from './programs/programming/Coding'


import Undergraduate from './university/undergraduate/Undergraduate'
import Masters from './university/masters/Masters'
import Doctorate from './university/doctorate/Doctorate'

import Academic from './components/courses/Academic'
import UniPlacement from './components/ups/Unipalcement'
import Privacy from './components/privacy/Privacy'

import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollIndicator />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/ups" element={<Ups />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Igcse" element={<Igcse />} />
        <Route path="/Ial" element={<Ial />} />
        <Route path="/Ielts" element={<Ielts />} />
        <Route path="/Professional" element={<Professional />} />
        <Route path="/Sat" element={<Sat />} />
        <Route path="/Coding" element={<Coding />} />
       
        <Route path="/Undergraduate" element={<Undergraduate />} />
        <Route path="/Masters" element={<Masters />} />
        <Route path="/Doctorate" element={<Doctorate />} />
        <Route path="/Academic" element={<Academic />} />
        <Route path="/UniPlacement" element={<UniPlacement />} />
        <Route path="/Privacy" element={<Privacy />} />
        
        <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
      </Routes>
      <Footer />     
    </BrowserRouter>
  );
}

export default App;
