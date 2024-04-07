import React from "react";
import './workshops.css'

import python from './image/python_img-removebg-preview.png';
import brainovision from './image/brainovision-removebg-preview.png'
import iot from './image/iot.png';
import aap from './image/team1.webp';
function WORKSHOPS() {
  return (
    <div><h1>WORK SHOPS CONDUCTED </h1>
      <div className="card">
        
        <img className="card-image" src={brainovision} alt="brainovision" />
        <div className="card-content">
          <h2 className="card-title">REACT.JS</h2>
          <p className="card-description">A one week work shop on react.js</p>
        </div>
      </div>
      <div className="card">
        <img className="card-image-python" src={python} alt="python" />
        <div className="card-content">
          <h2 className="card-title">DATA SCIENCE</h2>
          <p className="card-description">Work shop on data science using python</p>
        </div>
      </div>
      

      <iframe width="1000" height="600px" src="https://www.youtube.com/embed/NDZLnWATIBY?si=0ICotfVtg8MzVDqJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <img className="iot" src={iot} alt="iot" />
      <img className="aap" src={aap} alt="aap" />
      <footer>
        <div>
          <h3>ABOUT US</h3>
          <ul>
            <li><a href="#about-us">Genesis</a></li>
            <li><a href="#quality-policy">Quality Policy</a></li>
            <li><a href="#vision-mission">Vision & Mission</a></li>
            <li><a href="#message">Message</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#apply-online">Apply Online</a></li>
          </ul>
        </div>
        <div>
          <h3>DEPARTMENTS</h3>
          <ul>
            <li><a href="#cse">CSE</a></li>
            <li><a href="#cse-Design">CSE Design</a></li>
            <li><a href="#cse-ds">CSE DataScience </a></li>
            <li><a href="#ai">Artificial Intelligence </a></li>
            <li><a href="#ece">ECE</a></li>
            <li><a href="#eee">EEE</a></li>
            <li><a href="#mech">MECH</a></li>
          
          </ul>
        </div>
        <div>
          <h3>FACILITIES</h3>
          <ul>
            <li><a href="#infrastructure">Infrastructure</a></li>
            <li><a href="#auditorium">Auditorium</a></li>
            <li><a href="#library">Library</a></li>
            <li><a href="#sports">Sports</a></li>
            <li><a href="#hostel">Hostel</a></li>
            <li><a href="#transport">Transport</a></li>
          </ul>
        </div>
        <div>
          <h3>GALLERY</h3>
          <ul>
            <li><a href="#infra-gallery">Infrastructure</a></li>
            <li><a href="#events-gallery">Events</a></li>
            <li><a href="#campus-visit">Visit Our Campus</a></li>
          </ul>
        </div>
        <div>
          <h3>OTHERS</h3>
          <ul>
            <li><a href="#rank-holders">Rank Holders</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#naac">NAAC</a></li>
            <li><a href="#ncc">NCC</a></li>
            <li><a href="#nss">NSS</a></li>
            <li><a href="#counseling-centre">Counseling Centre</a></li>
            <li><a href="#academic-calendar">Academic Calendar</a></li>
            <li><a href="#student-handbook">Student Handbook</a></li>
          </ul>
        </div>
        <div className="copyrights">
          <p>© 2007 - 2024. Santhiram Engineering College</p>
          <p>Designed by Techies</p>
          <p>Follow Us on <a href="#social-media">Social Media</a></p>
          <a href="https://www.instagram.com/srecndl?igsh=MWYxbXR0cmtjeXQ2aA==">Insta</a><br />
          <a href="https://www.facebook.com/srecnandyal?mibextid=ZbWKwL">Facebook</a><br />
          <a href="https://www.srecnandyal.edu.in/">Twitter</a><br />
          <a href="https://youtube.com/@santhiramengineeringcolleg7561?si=jcBWaXDjcy3UusL3">Youtube</a><br />

        </div>

      </footer>
    </div>
  );
}

export default WORKSHOPS;
