import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';
import Video from '../../assets/video/chicago.mov';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge" style={{zIndex: 1}} >
        <div className="badge-cmp app__flex" >
          <span>👋🏽</span>
          <div >
            <p className="p-text">Hello!! I'm</p>
            <h1 className="head-text">Josh</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Web Developer</p>
        </div>
       
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" style={{borderRadius: 15}} />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.node, images.redux].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`} style={{zIndex: 1}}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
    <video autoPlay loop muted
    style={{
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: 0,
    }}
  >
    <source src={Video}></source>
  </video>
  </div>
);

export default AppWrap(Header, 'home');