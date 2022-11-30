import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';


const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      // the following methods render our experiences in chronological order
      data.sort();
      data.reverse();
      data.push(data.splice(2, 1)[0]);
      setExperiences(data);
    });

    client.fetch(skillsQuery).then((data) => {
      data.sort();
      data.reverse();
      data.push(data.splice(11, 1)[0]); // html
      data.push(data.splice(17, 1)[0]); // css
      data.push(data.splice(0, 1)[0]); // javascript
      data.push(data.splice(10, 1)[0]); // react
      data.push(data.splice(4, 1)[0]); // next
      data.push(data.splice(15, 1)[0]); // node
      data.push(data.splice(6, 1)[0]); // redux
      data.push(data.splice(9, 1)[0]); // rest
      data.push(data.splice(10, 1)[0]); // sql
      data.push(data.splice(4, 1)[0]); // mysql
      data.push(data.splice(3, 1)[0]); // postgresql
      data.push(data.splice(5, 1)[0]); // sanity
      data.push(data.splice(1, 1)[0]); // express
      data.push(data.splice(6, 1)[0]); // aws
      data.push(data.splice(5, 1)[0]); // git
      data.push(data.splice(5, 1)[0]); // github
      data.push(data.splice(3, 1)[0]); // ant design
      data.push(data.splice(3, 1)[0]); // bootstrap
      data.push(data.splice(1, 1)[0]); // chakra ui
      data.push(data.splice(1, 1)[0]); // material ui
      data.push(data.splice(0, 1)[0]); // tailwind






      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text-3"><span>Skills</span> & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
              
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div 
              className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                  <a href={work.docLink} className="bold-text" target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    </a>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#2d87ea"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
                  </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);