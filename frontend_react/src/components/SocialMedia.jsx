import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social" style={{zIndex: 1}}>
    <div>
    <a href=
    "https://www.linkedin.com/in/joshua-narvaez/" target="_blank"rel="noreferrer" alt="linkedIn"><BsLinkedin /></a>
    </div>
    <div>
    <a href="https://github.com/joshuanarvaez" target="_blank" rel="noreferrer" ><BsGithub /></a>
    </div>
  </div>
);

export default SocialMedia;