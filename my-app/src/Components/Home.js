import React from 'react';
import './Home.css';
import background from './Elements/bg.mp4'; 

export default function Home() {
  return (
    <div className='head'>
     
      <video autoPlay muted loop className="background-video" onLoadedMetadata={(e) => e.target.playbackRate = 0.9}>
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='home'>
      <nav className='nav'>
        <div className='logo'>
            <h3>KATSU</h3>
        </div>
        <div className='links'>
            
        </div>
      </nav>
      </div>
    </div>
  );
}
