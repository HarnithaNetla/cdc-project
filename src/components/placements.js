// App.js
import React from 'react';
import DataTable from './DataTable';
import './placements.css';

const App = () => {
  const data = [
    { slNo: 1, rollNo: '15X51A0502', studentName: 'BYRAPU APOORVA', employerName: 'HGS', appointmentNo: '(16-03-2019)' },
    { slNo: 2, rollNo: '15X51A0509', studentName: 'CHILAKALA SURESH BABU', employerName: 'GARTECHNOLOGIES', appointmentNo: 'Offer of employment with GAR TECHNOLOGIES(17-04-2019)' },
    { slNo: 3, rollNo: '15X51A0510', studentName: 'BANDI DIVYA VANI', employerName: 'HEXAWARE', appointmentNo: '(26-12-2018)' },
    { slNo: 4, rollNo: '15X51A0512', studentName: 'EDULA GOWTHAMI LAKSHMI', employerName: 'ALLSEC TECHNOLOGIES', appointmentNo: '(21-03-2019)' },
    { slNo: 5, rollNo: '15X51A0513', studentName: 'CHETLA HARIPRIYA', employerName: 'AJNA NETWORKS', appointmentNo: '(14-11-2018)' },
    { slNo: 6, rollNo: '15X51A0515', studentName: 'PASYAM HEMALATHA', employerName: 'CONNECTIONS DIRECT INDIA', appointmentNo: '(26-03-2019)' },
    { slNo: 7, rollNo: '15X51A0516', studentName: 'SYED HIMMAD HUSSAINI', employerName: 'GO SPEEDY GO', appointmentNo: '(27-09-2018)' },
    { slNo: 8, rollNo: '15X51A0518', studentName: 'SHAIK IMAM HUSSAIN', employerName: 'ALL TENDERS', appointmentNo: '(01-10-2018)' },
    { slNo: 9, rollNo: '15X51A0519', studentName: 'SHAIK IMRAN', employerName: 'INVENSIS', appointmentNo: '(01-06-2019)' },
    { slNo: 10, rollNo: '15X51A0520', studentName: 'BUDDA INDRASENAREDDY', employerName: 'HEXAWARE', appointmentNo: '(26-12-2018)' },
    { slNo: 11, rollNo: '15X51A0522', studentName: 'TATHIREDDY JHANSI', employerName: 'WIPRO', appointmentNo: '08/01/2019' },
    { slNo: 12, rollNo: '15X51A0523', studentName: 'ANNAMAYYAGARI JYOTHIRMAI', employerName: 'COLLABERA', appointmentNo: '(10-11-2018)' },
    { slNo: 13, rollNo: '15X51A0524', studentName: 'KANCHARLA VIJAYALAKSHMI', employerName: 'WIPRO', appointmentNo: '08/01/2019' },
    { slNo: 14, rollNo: '15X51A0525', studentName: 'SHAIK KARISHMA', employerName: 'RAAM GROUP', appointmentNo: 'RAAM GROUP/SALES/04-09-2018/158896(04/09/2018)' },
    { slNo: 15, rollNo: '15X51A0527', studentName: 'DUDEKULA KAVERI', employerName: 'AJNA NETWORKS', appointmentNo: '(14-11-2018)' },
    { slNo: 16, rollNo: '15X51A0528', studentName: 'PENUMAKA KAVYA', employerName: 'HEXAWARE', appointmentNo: '(26-12-2018)' },
    { slNo: 17, rollNo: '15X51A0529', studentName: 'BALAMBAIGARI KHAMRUN', employerName: 'INVENSIS', appointmentNo: '(01-06-2019)' },
    { slNo: 18, rollNo: '15X51A0534', studentName: 'KASIBOINA MAHESH', employerName: 'GARTECHNOLOGIES', appointmentNo: 'Offer of employment with GAR TECHNOLOGIES(17-04-2019)' },
    { slNo: 19, rollNo: '15X51A0535', studentName: 'DUDEKULA MAMATHA', employerName: 'INVENSIS', appointmentNo: '(1-06-2019)' },
    { slNo: 20, rollNo: '15X51A0536', studentName: 'KOTA MAMATHA', employerName: 'ALL TENDERS', appointmentNo: '(1-10-2018)' },
    { slNo: 21, rollNo: '15X51A0541', studentName: 'AMBATI MOUNIKA', employerName: 'PURPLE TALK', appointmentNo: '(08-10-2018)' },
    { slNo: 22, rollNo: '15X51A0542', studentName: 'ADDEPALLI MOUNIKA', employerName: 'GARTECHNOLOGIES', appointmentNo: 'Offer of employment with GAR TECHNOLOGIES(17-04-2019)' },
    { slNo: 23, rollNo: '15X51A0544', studentName: 'PASAPULA VEERA SUBBA MOUNIKA', employerName: 'INVENSIS', appointmentNo: '(01-06-2019)' },
    { slNo: 24, rollNo: '15X51A0546', studentName: 'POLDASU NAGA MADHU', employerName: 'AJNA NETWORKS', appointmentNo: '(14-11-2018)' },
    { slNo: 25, rollNo: '15X51A0547', studentName: 'V NAGA SWETHA', employerName: 'ALLSEC TECHNOLOGIES', appointmentNo: '(21-03-2019)' },
    { slNo: 26, rollNo: '15X51A0548', studentName: 'GANJI NAGASAI', employerName: 'FALCON BPO', appointmentNo: '(20-04-2019)' },
    { slNo: 27, rollNo: '15X51A0550', studentName: 'KATAKAM NIHARIKA', employerName: 'HEXAWARE', appointmentNo: '(26-12-2018)' },
    { slNo: 28, rollNo: '15X51A0551', studentName: 'PEDDIREDDY NIKHITHA', employerName: 'FALCON BPO', appointmentNo: '(20-04-2019)' },
    { slNo: 29, rollNo: '15X51A0552', studentName: 'DANDIPATI PAVANKALYAN', employerName: 'FALCON BPO', appointmentNo: '(20-04-2019)' },
    { slNo: 30, rollNo: '15X51A0553', studentName: 'BONIGENI PAVAN RAGHAVA', employerName: 'GARTECHNOLOGIES', appointmentNo: 'Offer of employment with GAR TECHNOLOGIES(17-04-2019)' },
    { slNo: 31, rollNo: '15X51A0556', studentName: 'GANDLA PRASAD BABU', employerName: 'AJNA NETWORKS', appointmentNo: '(14-11-2018)' },
    { slNo: 32, rollNo: '15X51A0557', studentName: 'DUDEKULA HUSSAIN BASHA', employerName: 'GO SPEEDY GO', appointmentNo: '(27-09-2018)' },
    { slNo: 33, rollNo: '15X51A0559', studentName: 'ANANTHA PRIYANKA', employerName: 'ACCENTURE', appointmentNo: 'C99132526' },
    { slNo: 34, rollNo: '15X51A0560', studentName: 'ALLADI RAGHAVENDRA', employerName: 'FALCON BPO', appointmentNo: '(20-04-2019)' },
    { slNo: 35, rollNo: '15X51A0561', studentName: 'BHIMIREDDY RAJESWARI', employerName: 'WIPRO', appointmentNo: '08/01/2019' },
    { slNo: 36, rollNo: '15X51A0563', studentName: 'SRIRAM RAVALI', employerName: 'HEXAWARE', appointmentNo: '(26-12-2018)' },
    { slNo: 37, rollNo: '15X51A0564', studentName: 'DUDEKULA RIYAZ', employerName: 'RAAM GROUP', appointmentNo: 'RAAM GROUP/SALES/04-09-2018/158896(04/09/2018)' },
    { slNo: 38, rollNo: '15X51A0565', studentName: 'K ROSHAN', employerName: 'HEXAWARE', appointmentNo: '(26-12-2018)' },
    { slNo: 39, rollNo: '15X51A0566', studentName: 'TIPPALURU RUPA', employerName: 'AJNA NETWORKS', appointmentNo: '(14-11-2018)' },
    { slNo: 40, rollNo: '15X51A0567', studentName: 'GANDLA SAGARIKA', employerName: 'FALCON BPO', appointmentNo: '(20-04-2019)' },
    { slNo: 41, rollNo: '15X51A0569', studentName: 'PALURU SAI PRAKASH', employerName: 'FALCON BPO', appointmentNo: '(20-04-2019)' },
    { slNo: 42, rollNo: '15X51A0570', studentName: 'PUVVADI SAI SWETHA', employerName: 'CONNECTIONS DIRECT INDIA', appointmentNo: '(26-03-2019)' },
    { slNo: 43, rollNo: '15X51A0571', studentName: 'GAJULA SAI TEJA PRIYANKA', employerName: 'FALCON BPO', appointmentNo: '(20-04-2019)' },
    { slNo: 44, rollNo: '15X51A0573', studentName: 'DUGGASANI SANDEEP KUMAR REDDY', employerName: 'FALCON BPO', appointmentNo: '(20-04-2019)' },
    { slNo: 45, rollNo: '15X51A0574', studentName: 'DEGALA SANKAR', employerName: 'VIRTUSA', appointmentNo: '(15-07-2019)' },
    { slNo: 46, rollNo: '15X51A0576', studentName: 'PALLE SARITHA', employerName: 'FALCON BPO', appointmentNo: '(20-04-2019)' },
    { slNo: 47, rollNo: '15X51A0578', studentName: 'CHATUR SHAHIN', employerName: 'FALCON BPO', appointmentNo: '(20-04-2019)' },
    { slNo: 48, rollNo: '15X51A0579', studentName: 'ZIGGIGARI SHAIK ZAFFAR BABA', employerName: 'CONNECTIONS DIRECT INDIA', appointmentNo: '(26-03-2019)' },
    { slNo: 49, rollNo: '15X51A0580', studentName: 'PEDDAYENUMULA SIVAMMA', employerName: 'FALCON BPO', appointmentNo: '(20-04-2019)' },
    { slNo: 50, rollNo: '15X51A0581', studentName: 'MALLELA SOMESWAR REDDY', employerName: 'FALCON BPO', appointmentNo: '(20-04-2019)' },
    { slNo: 51, rollNo: '15X51A0583', studentName: 'THOKALA SOWJANYA', employerName: 'TCS', appointmentNo: 'TCSL/DT20184600036/Hyderbad(9-10-2018)' },
    { slNo: 52, rollNo: '15X51A0584', studentName: 'KAMISETTY SOWMYA', employerName: 'WIPRO', appointmentNo: '08/01/2019' },
    { slNo: 53, rollNo: '15X51A0586', studentName: 'K SRI DURGA', employerName: 'MINDTREE', appointmentNo: '01/03/2019' },
    { slNo: 54, rollNo: '15X51A0587', studentName: 'NAGIRI SRI GURU HARIKA', employerName: 'SERCO', appointmentNo: '(23-04-2019)' },
    { slNo: 55, rollNo: '15X51A0588', studentName: 'JADAV SRINIVASA RAO', employerName: 'SERCO', appointmentNo: '(23-04-2019)' },
    { slNo: 56, rollNo: '15X51A0590', studentName: 'KOTTAM SUDHA', employerName: 'SERCO', appointmentNo: '(23-04-2019)' },
    { slNo: 57, rollNo: '15X51A0591', studentName: 'MIDDE SUNEERA', employerName: 'CONNECTIONS DIRECT INDIA', appointmentNo: '(26-03-2019)' },
    { slNo: 58, rollNo: '15X51A0593', studentName: 'GOTURU SUPRIYA', employerName: 'SERCO', appointmentNo: '(23-04-2019)' },
    { slNo: 59, rollNo: '15X51A0594', studentName: 'KONDA SURYA NARAYANA', employerName: 'SERCO', appointmentNo: '(23-04-2019)' },
    { slNo: 60, rollNo: '15X51A0595', studentName: 'PULYALA SUSHMALATHA REDDY', employerName: 'SERCO', appointmentNo: '(23-04-2019)' },
    { slNo: 61, rollNo: '15X51A0596', studentName: 'BATCHU TEJESWANI', employerName: 'SERCO', appointmentNo: '(23-04-2019)' },
    { slNo: 62, rollNo: '15X51A0597', studentName: 'PANDITI THANMAYI', employerName: 'SERCO', appointmentNo: '(23-04-2019)' },
    { slNo: 63, rollNo: '15X51A0599', studentName: 'DESAM VAMSHIDHAR REDDY', employerName: 'MINDTREE', appointmentNo: '01/03/2019' },
    { slNo: 64, rollNo: '15X51A05A0', studentName: 'VAGARU VENKATA KRISHNA', employerName: 'SERCO', appointmentNo: '(23-04-2019)' },
    { slNo: 65, rollNo: '15X51A05A4', studentName: 'DHARMAVARAM VISHNU PRIYA', employerName: 'ATOS SYNTEL', appointmentNo: '10/04/2019' },
    { slNo: 66, rollNo: '15X51A05A5', studentName: 'L YUGANDHAR REDDY', employerName: 'MINDTREE', appointmentNo: '01/03/2019' }
]


  return (
    <div>
      <h1>Student Placement Details</h1>
      <DataTable data={data} />
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
