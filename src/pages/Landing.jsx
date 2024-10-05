// src/pages/Landing.jsx
import React from 'react'; 
import { Link } from 'react-router-dom';
import Navbar from '../components/Header';
import Footer from '../components/footer';
import './css/Landing.css';

const Landing = () => {
  return (
    <>
    <Navbar />
    <div id='landingPage'>
      
      <h1 className='archivo-black-regular'>Welcome to LMUI's Lab simulation</h1>
      <div className="aboutGallery">
        This is a 3d simulation with FPS controls showcasing Landmark's facilities.
      </div>
      <h4>Click the link below to start the tour</h4>
      <Link to="/labSim" className='link_div'>View Simulation</Link>
      
    </div>
    <Footer />
    </>
  );
};

export default Landing;
