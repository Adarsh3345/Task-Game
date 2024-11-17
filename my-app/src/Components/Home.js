import React from 'react';
import './Home.css';
import background from './Elements/bg.mp4'; 
import Card from './Sub-Components/Card'
import Navbar from './Navbar';

export default function Home() {
  return (
    <div className='head'>
     
      <video autoPlay muted loop className="background-video" onLoadedMetadata={(e) => e.target.playbackRate = 0.9}>
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='home'>
       <Navbar/>
       <Card/>
      </div>
    </div>
  );
}
