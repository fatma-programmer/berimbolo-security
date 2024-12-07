import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <h2 className="text-center mb-5 fade-in">Contact Us</h2>

        {/* معلومات الاتصال */}
        <div className="row">
          <div className="col-md-6">
            <h3 className="contact-section-title">Our Contact Info</h3>
            <p className="contact-description">
              Feel free to reach out to us for any inquiries or support. Our team is always here to help!
            </p>
            <ul className="contact-info">
              <li><strong>Email:</strong> support@berimbolo-security.com</li>
              <li><strong>Phone:</strong> +1 (123) 456-7890</li>
              <li><strong>Address:</strong> 123 berimbolo-security Street, Cityville, Country</li>
            </ul>
          </div>

          {/* نموذج التواصل */}
          <div className="col-md-6">
            <h3 className="contact-section-title">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="4" 
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary send-btn">Send Message</button>
            </form>
          </div>
        </div>

        {/* قسم المنتجات / الخدمات */}
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="text-center">Our Products & Services</h3>
            <div className="product-info">
              <p className="text-center">
                Explore our products and services to enhance your home or business security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
