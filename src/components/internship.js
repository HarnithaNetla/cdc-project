import React from "react";
import aps from './image/aps.jpg';
import edu from './image/edu.jpg';
import IBM from './image/IBM.jpg';
import iit from './image/iit.jpg';
import delnet from './image/delnet.webp';
import avertium from './image/Avertium.jpeg';
import netdev from './image/netdev.jpeg';
import wesco from './image/wesco.webp';
import interngroup from './image/InternGroup.png';

import './internships.css';

function app(){
    return(
        <div className="internshipz">
        <div className="interns"> 
      <h1>INTERNSHIPS</h1>
      <marquee>Our SREC college provides different types of internships assosciated with Apsche and eduskills.</marquee>
      <img src={aps} alt="My Image" className="j"/>
      <img src={edu} alt="My Image" className="m"/>
      <img src={delnet} alt="My Image" className="n"/>
      <marquee>We will also colloborate with the trending IT companies and provide Internships for the students which are useful to develop their careers.</marquee>
      <img src={IBM} alt="IBM" className="l"/>
      <img src={avertium} alt="IBM" className="z"/>
      <img src={netdev} alt="IBM" className="y"/>
      <marquee>Our career development cell also provides summer internships like IIT tirupathi.</marquee>
      <img src={iit} alt="iit" className="k"/>   
      <img src={wesco} alt="iit" className="x"/> 
      <img src={interngroup} alt="iit" className="w"/>    

    </div>
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
export default app;