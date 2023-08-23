import React from 'react';
import ProjectCard from './ProjectCard';
import { SectionWrapper2 } from '../hoc';
import { projects3 } from '../constants';

const Works3 = () => {
  return (
    <>
      <div className="mt-2.5 flex flex-wrap justify-center items-center gap-7">
        {projects3.map((project, index) => (
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

export default SectionWrapper2(Works3, '');
