import React from 'react';
import ProjectCard from './ProjectCard';
import { SectionWrapper2 } from '../hoc';
import { projects4 } from '../constants';

const Works4 = () => {
  return (
    <>
      <div className="mt-2.5 flex flex-wrap justify-center items-center gap-7">
        {projects4.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper2(Works4, '');
