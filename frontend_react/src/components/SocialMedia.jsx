import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdPictureAsPdf } from 'react-icons/md';
import resume from '../assets/resume.pdf';

const SocialMedia = () => (
  <div className="app__social" style={{zIndex: 1}}>
    <div>
    <a href=
    "https://www.linkedin.com/in/joshua-narvaez/" target="_blank"rel="noreferrer" alt="linkedIn"><BsLinkedin /></a>
    </div>
    <div>
    <a href="https://github.com/joshuanarvaez" target="_blank" rel="noreferrer" ><BsGithub /></a>
    </div>
    <div>
    <a href={resume} download="MyResume" target='_blank' rel="noreferrer"><MdPictureAsPdf/> </a>
    </div>
   
  </div>
);

export default SocialMedia;