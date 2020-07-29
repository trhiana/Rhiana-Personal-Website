import React from 'react';

import Layout from '../components/Layout';
import pic8 from '../assets/images/pic08.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <div className="wrapper">
        <div className="inner">
          <h2 className="major">About</h2>
          <p>
            I grew up in Seguku, Wakiso District, Uganda and now find myself 
            as a rising junior at <strong><a href="https://www.ashesi.edu.gh">Ashesi University</a></strong> in Ghana, where I soak up nature 
            and culture while pursuing a degree in Computer Science as a <strong><a href="https://mastercardfdn.org/all/scholars/">MasterCard 
            Foundation Scholar</a></strong>. 
            My career interests lie at the nexus of software development
            engineering and information security. I am passionate about technology and youth
            empowerment. I am hardworking, eager to learn and easily adapt to different environments. 
            I have over three years working experience in technical support engineering where I 
            accumulated experience in hardware and software maintenance, computer networking, 
            technical writing and teamwork. Also, I have experience in Python, MySQL, HTML/CSS, 
            JavaScript, React, and am proficient in Microsoft Applications (Word, Excel, PowerPoint 
            and Outlook). Away from the computer screen, I am an avid reader, a music aficionado and 
            I am learning Spanish. 
            I am seeking opportunities in application development, application support engineering, 
            information technology, software development / software engineering, and technical program/product management.
          </p>

          {/*Education*/}

          <h2 className="major">Education</h2>
          <h3>Ashesi University</h3>
          <p>
            <em>September 2018 - May 2018</em><br></br>
            <ul>
              <li>
                MasterCard Foundation Scholarship: full – ride scholarship awarded to brilliant and 
                self-driven African students to study at Ashesi University.
              </li>
              <li>
                Relevant courses: Computer Programming for CS, Data Structures & Algorithms, Database Systems,
                Quantitative Methods, Statistics
              </li>
            </ul>
          </p>

          <h3>Sai Pali Institute of Technology and Management</h3>
          <p>
            <em>August 2016 - July 2017</em><br></br>
            <ul>
              <li>
                Relevant courses: Computer Network Concepts, Fundamentals of Routing and Switching, PC Analysis and Design,
                Red Hat System Administration, System & Laptop Repairing
              </li>
            </ul>
          </p>

          {/*Skills and Technologies*/}
          <h2 className="major">Skills</h2>
          <p>
            <ul>
              <li><em>Languages</em>: <strong>Intermediate</strong>: Python. <strong>Beginner</strong>: HTML/CSS, JavaScript(Nodejs), R, React </li>
              <li><em>Tools</em>: Git, VS Code </li>
              <li><em>Databases</em>: <strong>Beginner</strong>: MySQL</li>
            </ul>
          </p>

          {/*Work Experience*/}

          <h2 className="major">Work Experience</h2>
          <h3>GAOTek Inc., New York, NY, USA</h3>
          
          <p>
            Technical Support Engineer Intern, <em>June 2020 - Present</em><br></br>
            <ul>
              <li>Researching and supporting the development of technical manuals and marketing content for drones.</li>
              <li>
                Creating responses and supporting documentation for various GAOTek and GAO RFID products as needed.</li>
            </ul>
          </p>

          <h3>CSIS Department - Ashesi University, Berekuso, E/R, Ghana</h3>
          <p>
            Programming Tutor, <em>November 2019 - March 2020</em><br></br>
            <ul>
              <li>Assisted 100+ Freshmen with subject related coursework and discussed difficult concepts in Python programming.</li>
              <li>Held individual tutoring sessions to help students improve their programming skills.</li>
            </ul>
          </p>

          <h3>Uganda Human Rights Commission, Kampala, Uganda</h3>
          <p>
            Systems Unit Intern, <em>November 2019 - March 2020</em><br></br>
            <ul>
              <li>Improved employee efficiency by 12% by carrying out hardware and software repairs, network and software maintenance 
                (Microsoft Server) and general technical support.</li>
              <li>Raised more awareness of activities at the organisation by updating social media pages especially press conferences.</li>
            </ul>
          </p>

          <h3>Rhiasys Media Consult Inc., Kampala, Uganda</h3>
          <p>
            Assistant Computer Technician, <em>January 2017 - August 2018</em><br></br>
            <ul>
              <li>Increased customers and profitability by 25% by building user-friendly websites using HTML, CSS, JavaScript, and Bootstrap.</li>
              <li>Conducted hardware and software maintenance, maintained computer equipment, and provided technical assistance.</li>
            </ul>
          </p>

          <h3>Staunch Services Limited, Kampala, Uganda</h3>
          <p>
            Administrative Assistant, <em>January 2015 - August 2016</em><br></br>
            <ul>
              <li>Answered calls and inquiries made by customers and directed visitors to the right offices.</li>
              <li>Scheduled meetings for the various offices and provided secretarial services to my fellow employees.</li>
            </ul>
          </p>
          
          {/*Projects and Extracurrilar activities*/}

          <h2 className="major">Projects & Extracurriculars</h2>
          {/* <h3>Google</h3>
          <p>
            Get Ahead EMEA Scholar, <em>June 2020 - Present</em><br></br>
            <ul>
              <li></li>
              <li></li>
            </ul>
          </p> */}

          <h3>Berekuso Writing Program, Berekuso, E/R, Ghana</h3>
          <p>
            Assistant Lead, <em>February 2020 - Present</em><br></br>
            <ul>
              <li>Overseeing 16 volunteers tutoring high school students in English language and literature in Berekuso.</li>
              <li>Working with teachers to develop a curriculum, arranging transportation, and arranging tutoring sessions.</li>
            </ul>
          </p>

          <h3>Tech Era</h3>
          <p>
            Tech Tutor, <em>March 2019 - Present</em><br></br>
            <ul>
              <li>Tutoring 20+ Junior High School students in the use of Microsoft Word, Excel and PowerPoint.</li>
              <li>Ensuring the students can carry out basic research using the internet.</li>
            </ul>
          </p>

          <h3>J.P Morgan Chase</h3>
          <p>
            Software Engineering Virtual Intern, <em>November 2019 - December 2019</em><br></br>
            <ul>
              <li>Created an interface using stock price data feed and implemented the Perspective open-source code for data visualisation.</li>
              <li>Used Git, Perspective, Python, React and Typescript to solve hypothetical problems posed by the trading floor.</li>
            </ul>
          </p>

          <h2 className="major">Honors, Achievements & Awards</h2>
          <ul>
            <li>Our Girls, Our Future Technology Fellow - Receiving training in software development and other skillsets., <em>June 2020</em></li>
            <li>African Future Leaders Fellow - Received leadership and Entrepreneurial training. <em>August 2019</em></li>
            <li>Grace Hopper Celebration Scholar - Received full funding to attend the Grace Hopper Celebration in Orlando, FL, USA., <em>May 2019</em></li>
            <li>MasterCard Foundation Scholarship - Received a full-ride scholarship to study at Ashesi University, <em>July 2018</em></li>
          </ul>

          <section className="features">
            <article>
              <a href="https://bit.ly/rhianaresume" className="image" target="_blank" rel="noreferrer">
                <img src={pic8} alt="" />
              </a>
              <h3 className="major">Resume</h3>
              <p>
                Check out my resume
              </p>
              <a href="https://bit.ly/rhianaresume" className="special" target="_blank" rel="noreferrer">
                Download
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
