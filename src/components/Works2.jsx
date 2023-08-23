import React from 'react';
import ProjectCard from './ProjectCard';
import { SectionWrapper2 } from '../hoc';
import { projects2 } from '../constants';

const Works2 = () => {
  return (
    <>
      <div className="mt-2.5 flex flex-wrap justify-center items-center gap-7">
        {projects2.map((project, index) => (
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

export default SectionWrapper2(Works2, '');
