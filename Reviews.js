import React, { useEffect, useState } from 'react';
import './style.css';

const Reviews = () => {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.scroll-effect');
      const windowHeight = window.innerHeight;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
          setVisibleSections((prev) => [...new Set([...prev, index])]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reviews = [
    { title: 'Best Security Cameras', description: 'Top-rated cameras for your home.' },
    { title: 'Smart Home Devices', description: 'Enhance your home with smart tech.' },
    { title: 'Top Alarm Systems', description: 'Secure your property with the best.' },
    { title: '24/7 Monitoring', description: 'Reliable monitoring for peace of mind.' },
    { title: 'Wireless Security Solutions', description: 'Easy to install, secure your home anytime.' },
    { title: 'Customized Security Systems', description: 'Tailored security plans for every home.' }
  ];

  return (
    <section className="reviews py-5 bg-light" id="reviews">
      <h2 className="text-center mb-5 fade-in">Top Reviews</h2>
      <div className="container">
        <div className="row">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`col-md-4 scroll-effect ${visibleSections.includes(index) ? 'visible' : ''}`}
              style={{ transform: 'translateY(20px)', opacity: visibleSections.includes(index) ? 1 : 0 }}
            >
              <div className="card shadow-sm mb-4 review-card">
                <div className="card-body">
                  <h5 className="card-title">{review.title}</h5>
                  <p className="card-text">{review.description}</p>
                  <a href="#" className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
