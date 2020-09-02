import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
// import pic2 from '../assets/images/pic02.jpg';
// import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.png';
import pic5 from '../assets/images/pic05.png';
import pic6 from '../assets/images/pic06.png';
import pic7 from '../assets/images/pic07.png';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">A little about me</h2>
            <p>
              Hi! I'm Rhiana, a 23-year-old junior currently studying towards a Bachelor of Science in 
              Computer Science degree at Ashesi University. I'm a first-generation university student. My passions include technology, youth empowerment, 
              and music. I am curious and love using technology to solve problems. I am passionate about making a positive impact by using technology
              to implement sustainable solutions. 
              <br></br>
              Wondering if I might be a good fit for your company? Check out 
              my <strong><a href="https://www.linkedin.com/in/rhianalatifahnakalemba" target="_blank" rel="noreferrer">LinkedIn</a></strong>
            </p>
            <a href="/About/" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>
      

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Projects</h2>
          <section className="features">
            <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">GUI Calculator</h3>
              <p>
                A simple GUI Calculator made with Python, tkinter and the lambda function.
              </p>
              <a href="https://github.com/trhiana/gui-calculator" className="special" target="_blank" rel="noreferrer">
                Check it out
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Hangman</h3>
              <p>
                A simple game of hangman made using Python
              </p>
              <a href="https://github.com/trhiana/Hangman" className="special" target="_blank" rel="noreferrer">
                Check it out
              </a>
            </article>
            <article>
              <a href="https://github.com/trhiana/trhiana.github.io" className="image" target="_blank" rel="noreferrer">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Portfolio Website</h3>
              <p>
                A single page portfolio website created using HTML, CSS, Bootstrap and hosted using Github Pages.
              </p>
              <a href="https://github.com/trhiana/trhiana.github.io" className="special" target="_blank" rel="noreferrer">
                Check it out
              </a>
            </article>
            <article>
              <a href="https://github.com/trhiana/Rhiana-Personal-Website" className="image" target="_blank" rel="noreferrer">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Portfolio</h3>
              <p>
                I migrated my portfolio website to showcase my education and various experiences while providing a better user experience.
              </p>
              <a href="https://github.com/trhiana/Rhiana-Personal-Website" className="special" target="_blank" rel="noreferrer">
                Check it out
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="https://github.com/trhiana" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section> 
    </section>
  </Layout>
);

export default IndexPage;
