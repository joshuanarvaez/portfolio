import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdPictureAsPdf } from 'react-icons/md';
import resume from '../assets/resume.pdf';

const SocialMedia = () => (
  <div className="app__social" style={{zIndex: 1}}>
    <div className="social-circle">
      <a href=
      "https://www.linkedin.com/in/joshua-narvaez/" target="_blank"rel="noreferrer" alt="linkedIn"><BsLinkedin /></a>
    </div>
    <div className="social-circle">
      <a href="https://github.com/joshuanarvaez" target="_blank" rel="noreferrer" ><BsGithub /></a>
    </div>
    <div className="resume">
      <a href={resume} download="JoshNarvaezResume" target='_blank' rel="noreferrer" style={{paddingTop: '3px', fontSize: '15px'}}><MdPictureAsPdf/>Resume
      </a>
    </div>
  </div>
);

export default SocialMedia;

