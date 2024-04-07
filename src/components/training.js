import React from "react";
import './training.css';
import pic1 from './image/pic1.jpg';
import pic2 from './image/pic2.jpg';
import pic3 from './image/pic3.jpg';
import pic4 from './image/pic4.jpg';
import pic5 from './image/pic5.jpg';
import pic6 from './image/pic6.jpg';




function TRAINING(){
    return(
        <div className="trainpics">
            <h1>Training of programming skills in SREC college</h1>
            <h3>Click here to upload pictures</h3>
            <div className="uplbtn">
            <input type="file" name="profile" id="profile"  required></input></div>
            <div className="image-grid">
      <img className="image-item" src={pic1} alt="Image 1" />
      <img className="image-item" src={pic2} alt="Image 2" />
      <img className="image-item" src={pic3} alt="Image 3" />
      <img className="image-item" src={pic4} alt="Image 4" />
      <img className="image-item" src={pic5} alt="Image 5" />
      <img className="image-item" src={pic6} alt="Image 6" />
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
export default TRAINING;