import React from "react";
import './dev.css';

import prasanna from './image/pra1.png';
import harnitha from './image/harni-modified.png';
import yaswanth from './image/babu.png';
import shiva from './image/shiva.png';
import manoj from './image/manu.jpeg';

function DEVELOPERS(){
    return(
        <div className="devs">
            <div className="top-images">
                <div className="image-item">
                    <img className="card-image" src={prasanna} alt="prasanna" />
                    <div className="card-content">
                        <h2 className="card-title">M.Lakshmi Prasanna</h2>
                       
                    </div>
                </div>
                <div className="image-item">
                    <img className="card-image" src={harnitha} alt="harnitha" />
                    <div className="card-content">
                        <h2 className="card-title">N.Harnitha</h2>
                       
                    </div>
                </div>
            </div>

            <div className="bottom-images">
                <div className="image-item">
                    <img className="card-image" src={yaswanth} alt="yaswanth" />
                    <div className="card-content">
                        <h2 className="card-title">K.Yaswanth</h2>
                      </div>
                </div>
                <div className="image-item">
                    <img className="card-image" src={shiva} alt="shiva" />
                    <div className="card-content">
                        <h2 className="card-title">U.Shiva Raj Kumar</h2>
                        </div>
                </div>
                <div className="image-item">
                    <img className="card-image" src={manoj} alt="manoj" />
                    <div className="card-content">
                        <h2 className="card-title">Ch.Manoj Reddy</h2>
                    </div>
                </div>
            </div><hr />
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

export default DEVELOPERS;