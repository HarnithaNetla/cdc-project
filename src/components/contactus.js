
import React from 'react';
import './contact.css';

function CONTACTUS(){
  return (
    <div className='cont'>
    <div className='contacts'>
        <h2>Contact Us</h2><br />
    <div className="contact-form-container">
      
      <form >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
           
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Mobile">Mobile:</label>
          <input
            type="mobile"
            id="mobile"
            name="mobile"
            
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form></div>
    <div className='contactdetails'>
        <h3>COLLEGE MAIL-ID:</h3><p> Santhiramengineeringcollege@srecnandyal.edu.in</p>
        <h3>CAREER DEVELOPMENT CELL MAIL-ID:</h3><p>careerdevelopmentcell@srecnandyal.edu.in</p>
        <h3>MOBILE NUMBER:</h3><p>+91 98765 43210 , +91 91234 56789</p>
        <h3>ADDRESS :</h3><p>NH-40 , Nerawada X'Roads , Nandyal , Andhra Pradesh</p>
    </div> </div>
    
    </div>
    
    
    
    
    
  );
  
};

export default CONTACTUS;
