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
            as a junior at <strong><a href="https://www.ashesi.edu.gh">Ashesi University</a></strong> in Ghana, where I soak up nature 
            and culture while pursuing a degree in Computer Science as a <strong><a href="https://mastercardfdn.org/all/scholars/">MasterCard 
            Foundation Scholar</a></strong>. 
            My career interests lie at the nexus of software development
            engineering and information security. I am passionate about technology and youth
            empowerment. I am hardworking, eager to learn and easily adapt to different environments. 
            I have over three years working experience in technical support engineering where I 
            accumulated experience in hardware and software maintenance, computer networking, 
            technical writing and teamwork. Also, I have experience in <strong>Python, MySQL, HTML/CSS, 
            JavaScript, ReactJS</strong>, and am proficient in <strong>Microsoft Applications (Word, Excel, PowerPoint 
            and Outlook)</strong>. Away from the computer screen, I am an avid reader, a music aficionado and 
            I am learning Spanish. 
            I am seeking opportunities in application development, application support engineering, 
            information technology, software development / software engineering, and technical program/product management.
          </p>

          {/*Education*/}

          <h2 className="major">Education</h2>
          <h3>Ashesi University</h3>
          <p>
            <em>September 2018 - June 2023</em><br></br>
            <ul>
              <li>
                MasterCard Foundation Scholarship: full – ride scholarship awarded to brilliant and 
                self-driven African students to study at Ashesi University.
              </li>
              <li>
                Relevant courses: Computer Programming for CS, Data Structures & Algorithms, Database Systems,
                Quantitative Methods, Research Methods, Statistics
              </li>
              {/* <li>
                Fall 2021 courses: Computer Organisation & Architecture, Discrete Structures & Theory, Web Technologies
              </li> */}
            </ul>
          </p>

          <h3>American University of Central Asia (AUCA) </h3>
          <p>
            <em>January 2021 - May 2021</em><br></br>
            <ul>
              <li>
                Semester Abroad through the Open Society University Network (OSUN)
              </li>
              <li>
                Relevant courses: Data Protection & Information Security Law
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
              <li><em>Languages</em>: <strong>Intermediate</strong>: Python. <strong>Beginner</strong>: Java, HTML/CSS, JavaScript(Nodejs), R, ReactJS </li>
              <li><em>Tools</em>: Git/GitHub, MS Azure, VS Code </li>
              <li><em>Databases</em>: <strong>Beginner</strong>: MongoDB, MySQL</li>
            </ul>
          </p>

          {/*Work Experience*/}

          <h2 className="major">Work Experience</h2>
          <h3>GAOTek Inc., New York, NY, USA</h3>
          
          <p>
            Technical Support Engineer Intern - Product Pages Team<em>, June 2020 - July 2020</em><br></br>
            <ul>
              <li>Researched and supported the development of technical manuals and marketing content for drones.</li>
              <li>
                Created responses and supporting documentation for various GAOTek and GAO RFID products as needed.</li>
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
          <h3>Project Naerhida, Web Technologies Project</h3>
          <p>
            Project Manager, <em>September 2020 - Present</em><br></br>
            <ul>
              <li>Leading the development of a website to advertise various student businesses on the Ashesi University campus.</li> 
              <li>Working as part of an interdisciplinary team to implement development best practices, achieve project milestones and meet deadlines.</li>
            </ul>
          </p> 
          
          <h3>Yielding Accomplished African Women</h3>
          <p>
            Technology Fellow - Intermediate Software Engineering Track, <em>July 2020 - Present</em>
            <ul>
              <li>Successfully completed 200 hours of training using Python and six professional development sessions alongside 400 females across Africa.</li>
              <li>Currently learning C++ whilst receiving continuous training in software development and professional practice.</li>
            </ul>
          </p>

          {/* <h3>Microsoft</h3>
          <p>
            Learn Student Ambassador, <em>August 2020 - Present</em><br></br>
            <ul>
              <li> </li> 
              <li> </li>
            </ul>
          </p>  */}

          <h3>Google</h3>
          <p>
            Get Ahead EMEA Scholar, <em>June 2020 - August 2020</em><br></br>
            <ul>
              <li>Participated in an 8-week virtual program for all selected CS students from all over EMEA</li>
              <li>Completed technical challenges, YouTube Live trainings, and attended interview workshops.</li>
            </ul>
          </p>

          <h3>Berekuso Writing Program [CURRENTLY ON HOLD] , Berekuso, E/R, Ghana</h3>
          <p>
            Assistant Lead, <em>February 2020 - March 2020</em><br></br>
            <ul>
              <li>Overseeing 16 volunteers tutoring high school students in English language and literature in Berekuso.</li>
              <li>Working with teachers to develop a curriculum, arranging transportation, and arranging tutoring sessions.</li>
            </ul>
          </p>

          <h3>Tech Era</h3>
          <p>
            Tech Tutor, <em>March 2019 - February 2020</em><br></br>
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
            <li>Capital One Grace Hopper Scholar - Received a scholarship from Capital One to attend the 2020 Virtual Grace Hopper Celebration, <em>September 2020</em></li>
            <li>Microsoft Learn Student Ambassador - Developing technical and career skills whilst mentoring students in my local community, <em>August 2020</em> </li>
            <li>African Future Leaders Fellow - Received leadership and Entrepreneurial training., <em>August 2019</em></li>
            <li>Grace Hopper Celebration Scholar - Received full funding to attend the 2019 Grace Hopper Celebration in Orlando, FL, USA., <em>May 2019</em></li>
            <li>MasterCard Foundation Scholarship - Received a full-ride scholarship to study at Ashesi University, <em>July 2018</em></li>
          </ul>

          {/*Online Courses*/}

          <h2 className="major"> Online Courses / Supplementals</h2>
          
          <h3>Educative.io</h3>
          <ul>
            <li>Learn C++: The Complete Course for Beginners. <strong>[Current]</strong></li>
            <li>Learn Object-Oriented Programming in Python.</li>
            <li>Data Structures & Algorithms in Python.</li>
          </ul>

          <h3>LinkedIn Learning</h3>
          <ul>
            <li>DevOps Foundations: Continuous Delivery/Continuous Integration <strong>[Current]</strong></li>
            <li>Learning Puppet</li>
            <li>DevOps Foundations</li>
            <li>Program Management Foundations</li>
            <li>GitHub Quick Tips</li>
            <li>Public Speaking Foundations</li>
            <li>Creating and Giving Business Presentations</li>
          </ul>

          <h3>Microsoft Learn</h3>
          <ul>
            <li>Azure Fundamentals. <strong>[Current]</strong></li>
            <li> Azure DevOps <strong>[Current]</strong></li>
          </ul>

          <h3>Udemy</h3>
          <ul>
            <li>The Complete Full Stack JavaScript Course.</li>
            <li>PHP & MySQL - Certification for Beginners.</li>
            <li>Java Programming: Complete Beginner to Advanced.</li>
            <li>The Complete Front-End Web Development Course.</li>
          </ul>

          <h3>Udacity</h3>
          <ul>
            <li>AWS Fundamental Course.</li>
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
