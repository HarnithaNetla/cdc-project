import React from 'react';
import SimpleTable from './SimpleTable.js';
import './stuach.css'; 

const App = () => {
    const data = [
        { regno: 1, name: 'A.HEMANTH KUMAR', achievements: 'NATIONAL LEVEL INTER ENGINEERING SPORTS MEET TABLE TENNIS UNIVERSITY', prizes: 'Runner' },
        { regno: 24, name: 'G.SAI GUNA VARSHETHA', achievements: 'NATIONAL LEVEL INTER ENGINEERING SPORTS MEET TABLE TENNIS UNIVERSITY', prizes: 'Runner' },
        { regno: 78, name: 'P.VENKATESHWARLU', achievements: '6TH A.P JUNIOR DISTRICT ATHLETICS CHAMPIONSHIP - 2019(1500MTRS)', prizes: 'iii - prize' },
        { regno: 60, name: 'L.NAGAMANI SWATHI', achievements: 'SYMPOSIUM - Artificial Intelligence For Cognitive Radio', prizes: 'Runner' },
        { regno: 63, name: 'M.NIKITHA', achievements: 'SYMPOSIUM - Artificial Intelligence For Cognitive Radio', prizes: 'Runner' },
        { regno: '05', name: 'ATTHAR AYESHA', achievements: 'Bio Informatics', prizes: 'Second Prize' },
        { regno: '28', name: 'KAIPA PRATHYUSHA', achievements: 'Machine Learning In Digital Marketing', prizes: 'First Prize' },
        { regno: '10', name: 'B SUNAYANA', achievements: 'Blue Eyes Technology', prizes: 'Third Prize' },
        { regno: '76', name: 'GAJULA HARSHAVARDHAN', achievements: 'Poster Presentation', prizes: 'Third Prize' },
        { regno: 'C3', name: 'SUTRAYE NIKHITHA', achievements: 'Poster Presentation', prizes: 'Second Prize' },
        { regno: '10', name: 'B SUNAYANA', achievements: 'Poster Presentation', prizes: 'First Prize' },
        { regno: '62', name: 'SINGIREDDY ANUSHA', achievements: 'Technical Quiz', prizes: 'Second Prize' },
        { regno: '44', name: 'NICHENAMETLA SHOBHA RANI', achievements: 'Technical Quiz', prizes: 'Third Prize' },
        { regno: '10', name: 'SUNAYANA BOGGARAPU', achievements: 'Technical Quiz', prizes: 'First Prize' },
        { regno: 'C3', name: 'NIKHITHA SUTRAYE', achievements: 'Singing', prizes: 'Second Prize' },
        { regno: '33', name: 'POOJITHA MADAKASIRA', achievements: 'Singing', prizes: 'First Prize' },
        { regno: '91', name: 'SHAIK AYEESHA', achievements: 'Singing', prizes: 'Third Prize' },
        { regno: 'C3', name: 'NIKHITHA SUTRAYE', achievements: 'Drawing', prizes: 'Third Prize' },
        { regno: '36', name: 'M.RAJASREE REDDY', achievements: 'Drawing', prizes: 'Second Prize' },
        { regno: '29', name: 'KAPURAM GAYATRI', achievements: 'Photography', prizes: 'Second Prize' },
        { regno: '01', name: 'A. MOHAMMED ZAHID', achievements: 'Cricket', prizes: 'Runners' },
        { regno: '570', name: 'Mr.M.Abdul Samad', achievements: 'Participated in 2nd A.P. State Senior Inter District Tennis Cricket Championship 2021 for men organized by Ananthapur District Tennis Cricket Association at O.D.C. Cricket Ground Obula devara Cheruvu, Anathapuram held at Anathapuram from 21-08-2021 to 23-08-2021', prizes: 'NA' },
        { regno: '5C3', name: 'Ms.Nikhitha', achievements: 'Stood as a runner of QUIZ Competition organized by CSE department club "COMPUTING AGENTS" by SREC, Nandyal on 11-12-2021', prizes: 'NA' },
        { regno: '0501', name: 'A.Hemanth Kumar', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Machine Learning Based predictive Model for Closed Loop Air Filtering System', prizes: 'NA' },
        { regno: '0502', name: 'D.Raj Kumar', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Machine Learning Based predictive Model for Closed Loop Air Filtering System', prizes: 'NA' },
        { regno: '0503', name: 'A.Khadatr Jilan', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Machine Learning Based predictive Model for Closed Loop Air Filtering System', prizes: 'NA' },
        { regno: '0504', name: 'P.Moin Khan', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Machine Learning Based predictive Model for Closed Loop Air Filtering System', prizes: 'NA' },
        { regno: '0505', name: 'P.Veera Sekahr Reddy', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Machine Learning Based predictive Model for Closed Loop Air Filtering System', prizes: 'NA' },
        { regno: '0511', name: 'D.Bhavana', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Machine Learning Based predictive Model for Closed Loop Air Filtering System', prizes: 'NA' },
        { regno: '0512', name: 'D.Sukanya', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Machine Learning Based predictive Model for Closed Loop Air Filtering System', prizes: 'NA' },
        { regno: '0513', name: 'T.V.Sai Thanusha', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Machine Learning Based predictive Model for Closed Loop Air Filtering System', prizes: 'NA' },
        { regno: '0514', name: 'M.Chandra Kala', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Machine Learning Based predictive Model for Closed Loop Air Filtering System', prizes: 'NA' },
        { regno: '0515', name: 'P.Venkata Swathi', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Machine Learning Based predictive Model for Closed Loop Air Filtering System', prizes: 'NA' },
        { regno: '0516', name: 'S.Haji Gulab', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Enterprise Resource Planning Based Mobile Application For Hospitals to Manage COVID-19 Division', prizes: 'NA' },
        { regno: '0517', name: 'T.Pavani', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Enterprise Resource Planning Based Mobile Application For Hospitals to Manage COVID-19 Division', prizes: 'NA' },
        { regno: '0518', name: 'G.Swathi', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Enterprise Resource Planning Based Mobile Application For Hospitals to Manage COVID-19 Division', prizes: 'NA' },
        { regno: '0519', name: 'S.Anusha', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Enterprise Resource Planning Based Mobile Application For Hospitals to Manage COVID-19 Division', prizes: 'NA' },
        { regno: '0520', name: 'K.Haritha', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Enterprise Resource Planning Based Mobile Application For Hospitals to Manage COVID-19 Division', prizes: 'NA' },
        { regno: '0521', name: 'S.Mohammed Mubeena', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Knowledge Based System for Immunity Improvement Against COVID -19 Infection', prizes: 'NA' },
        { regno: '0522', name: 'M.Madhavi Latha', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Knowledge Based System for Immunity Improvement Against COVID -19 Infection', prizes: 'NA' },
        { regno: '0523', name: 'K.Sucharitha', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Knowledge Based System for Immunity Improvement Against COVID -19 Infection', prizes: 'NA' },
        { regno: '0524', name: 'A.Sreevani', achievements: 'Part of Indian Patent filed and published on 23-11-2021 with a title: Knowledge Based System for Immunity Improvement Against COVID -19 Infection', prizes: 'NA' }
    ];

    return (
        <div>
            <h1>Student achievements</h1>
            <SimpleTable data={data} />
        
        <hr />
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
};

export default App;
