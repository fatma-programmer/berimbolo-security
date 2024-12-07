import React from 'react';
import './style.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>What We Offer</h2>

        {/* النص التعريفي */}
        <div className="row">
          <div className="col-md-6">
            <p className="about-text">
              At berimbolo-security, we are dedicated to providing the best home security solutions
              to help you stay safe. We offer a wide range of products and services designed to
              enhance the security of your home, business, or property.
            </p>
            <p className="about-text">
              Whether you're looking for advanced security cameras, smart locks, or professional
              alarm systems, we have carefully selected the latest technologies to keep your loved
              ones and assets secure.
            </p>
            <p className="about-text">
              Our goal is to make home and business security accessible to everyone by offering
              top-quality products that are both reliable and affordable.
            </p>
            <a className="btn btn-primary" href="#products">Explore Products</a>
          </div>

          {/* صورة للمنتجات */}
          <div className="col-md-6">
            <img 
              src="360_F_808139116_xVJVpr7Fi3Vx96L7vBqf3cidV3Y00wn1.jpg" 
              alt="Security Products" 
              className="about-image" 
            />
          </div>
        </div>

        {/* قسم المنتجات */}
        <div className="row mt-5" id="products">
          <div className="col-md-12">
            <h3 className="text-center mb-4">Our Products & Services</h3>
            <div className="products-list">
              {/* الصف الأول */}
              <div className="product-row">
                <div className="product-card">
                  <img 
                    src="camera.jpg" 
                    alt="Security Camera" 
                    className="product-image"
                  />
                  <h5>Security Camera X200</h5>
                  <p>High-quality, 360° security camera with night vision and motion detection.</p>
                  <p className="price">$199.99</p>
                </div>

                <div className="product-card">
                  <img 
                    src="Smart Lock Pro.jpg" 
                    alt="Smart Lock" 
                    className="product-image"
                  />
                  <h5>Smart Lock Pro</h5>
                  <p>Advanced smart lock with biometric recognition and mobile app control.</p>
                  <p className="price">$249.99</p>
                </div>

                <div className="product-card">
                  <img 
                    src="Smart Alarm System.jpg" 
                    alt="Alarm System" 
                    className="product-image"
                  />
                  <h5>Smart Alarm System</h5>
                  <p>Smart alarm system with remote monitoring and real-time alerts.</p>
                  <p className="price">$299.99</p>
                </div>

                <div className="product-card">
                  <img 
                    src="Smart Light System.jpg" 
                    alt="Smart Light" 
                    className="product-image"
                  />
                  <h5>Smart Light System</h5>
                  <p>Automated lighting system that integrates with security cameras for night-time surveillance.</p>
                  <p className="price">$129.99</p>
                </div>
              </div>

              {/* الصف الثاني */}
              <div className="product-row">
                <div className="product-card">
                  <img 
                    src="Motion Sensor Alert.jpg" 
                    alt="Motion Sensor" 
                    className="product-image"
                  />
                  <h5>Motion Sensor Alert</h5>
                  <p>Detects motion in your home and sends real-time alerts to your phone.</p>
                  <p className="price">$99.99</p>
                </div>

                <div className="product-card">
                  <img 
                    src="Smart Doorbell.jpg" 
                    alt="Smart Doorbell" 
                    className="product-image"
                  />
                  <h5>Smart Doorbell</h5>
                  <p>Video doorbell with two-way audio and remote monitoring through your smartphone.</p>
                  <p className="price">$179.99</p>
                </div>

                <div className="product-card">
                  <img 
                    src="Fingerprint Door Lock.jpg" 
                    alt="Fingerprint Security" 
                    className="product-image"
                  />
                  <h5>Fingerprint Door Lock</h5>
                  <p>Highly secure biometric fingerprint lock with anti-tamper technology.</p>
                  <p className="price">$279.99</p>
                </div>

                <div className="product-card">
                  <img 
                    src="Complete Surveillance Kit.jpg" 
                    alt="Surveillance Kit" 
                    className="product-image"
                  />
                  <h5>Complete Surveillance Kit</h5>
                  <p>Complete surveillance kit with cameras, recording devices, and remote access.</p>
                  <p className="price">$399.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* قسم القيم والرؤية */}
        <div className="row mt-5">
          <div className="col-md-6">
            <h3 className="text-center mb-4">Our Core Values</h3>
            <ul className="about-text">
              <li>Customer Satisfaction</li>
              <li>Innovation & Technology</li>
              <li>Reliability & Quality</li>
              <li>Security & Privacy</li>
            </ul>
          </div>

          <div className="col-md-6">
            <h3 className="text-center mb-4">Our Vision</h3>
            <p className="about-text text-center">
              To be the leading provider of home and business security solutions, providing peace of 
              mind to families and companies around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
