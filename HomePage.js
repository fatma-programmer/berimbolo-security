import React from 'react';
import './style.css';

const HomePage = () => {
  return (
    <header className="hero">
      <div className="container text-center">
        <h1>Discover the Best Home Security</h1>
        <p>Your ultimate guide to staying safe and secure at home.</p>
        
        {/* عرض الصورة من مجلد public */}
       
        
        <a className="btn" href="#reviews">Explore Reviews</a>
      </div>
    </header>
  );
};

export default HomePage;
