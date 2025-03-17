import React from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { motion } from 'framer-motion';
import style from './styles/home.module.css';
import { fadeIn, staggerContainer } from '../utils/motion';

const Home = () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <div className={style.container}>
      <p className={style.intro}>
        Hi, 
        {' '}
        <motion.span variants={fadeIn('', '', 0.1, 1)} className={style.name}>
        Supercharge Your Career
        </motion.span>
      </p>
      <p className={style.intro}>
      & Unlock  Your 
        {' '}
        <motion.span variants={fadeIn('', '', 0.3, 1)} className={style.name}>
        True Potential! 🚀
        </motion.span>
      </p>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.desc}>
      Learn in-demand skills, get career guidance, and land your dream job
      </motion.p>
      <motion.button
        variants={fadeIn('', '', 0.6, 1)}
        className={style.btn_container}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
          });
        }}
      >
        <span className={style.btn_hover}>
        Explore More
        </span>
        <span className={style.btn}>
          Get Started
        </span>
        <MdOutlineArrowForwardIos className={style.arrow} />
      </motion.button>
    </div>
  </motion.section>
);

export default Home;
