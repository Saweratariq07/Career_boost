import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
    About Career Boost – Your Path to Success!
    </motion.h1>
    <div className={style.para}>
  <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
    Hey there! 🚀 Welcome to <strong>Career Boost</strong>, where we help individuals learn in-demand skills, get expert career guidance, and secure high-paying jobs. Whether you're a student, job seeker, or professional, we provide the right tools to accelerate your career growth.
  </motion.p>

  <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
    <strong>What We Offer:</strong>
    <ul>
      <li>✔️ <strong>Expert-Led Training</strong> – Learn from industry professionals.</li>
      <li>✔️ <strong>Career Coaching</strong> – Resume building, interview prep, and job market insights.</li>
      <li>✔️ <strong>Networking Opportunities</strong> – Connect with top professionals and recruiters.</li>
      <li>✔️ <strong>Job Placement Support</strong> – Get hired faster with our job assistance programs.</li>
      <li>✔️ <strong>Scholarships & Financial Aid</strong> – Access learning opportunities without financial barriers.</li>
    </ul>
  </motion.p>

  <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
    Ready to take the next step? Join us and transform your career today!  
  </motion.p>
</div>

  </>
);

export default SectionWrapper(About, 'about', '');
