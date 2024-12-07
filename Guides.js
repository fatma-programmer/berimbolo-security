import React from 'react';
import './style.css';

const Guides = () => {
  return (
    <section className="guides py-5" id="guides">
      <div className="container">
        <h2 className="text-center mb-5 fade-in">Guides & Tutorials</h2>

        {/* دليل التعليمات / المقالات */}
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="guide-card">
              <img 
                src="camera guid.jpg" 
                alt="Camera Guide" 
                className="guide-image" 
              />
              <h5>How to Set Up Your Security Camera</h5>
              <p>Step-by-step guide to install and configure your security camera for maximum protection.</p>
              <a href="#!" className="btn btn-primary">Read More</a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="guide-card">
              <img 
                src="Smart Lock guid.jpg" 
                alt="Smart Lock Guide" 
                className="guide-image" 
              />
              <h5>Installing Your Smart Lock</h5>
              <p>Learn how to install and use a smart lock to secure your home without the hassle of traditional keys.</p>
              <a href="#!" className="btn btn-primary">Read More</a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="guide-card">
              <img 
                src="Alarm System guid.jpg" 
                alt="Alarm System Guide" 
                className="guide-image" 
              />
              <h5>Setting Up Your Alarm System</h5>
              <p>Complete tutorial to set up an alarm system with remote monitoring and notifications.</p>
              <a href="#!" className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>

        {/* قسم الأسئلة المتكررة */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="text-center mb-4">Frequently Asked Questions (FAQ)</h3>
            <div className="faq-list">
              <h5>How do I set up a smart security camera?</h5>
              <p>Follow this guide to easily install and configure your security camera to get started.</p>
              <h5>What are the benefits of a smart lock?</h5>
              <p>Smart locks provide enhanced security with features like remote access and keyless entry.</p>
              <h5>How do I integrate my alarm system with my smartphone?</h5>
              <p>Learn how to connect your alarm system with your phone for real-time alerts and monitoring.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guides;
