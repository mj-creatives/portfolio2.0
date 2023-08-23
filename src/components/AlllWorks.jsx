import React from 'react';
import Works from './Works';
import Works2 from './Works2';
import Works3 from './Works3';
import { SectionWrapper } from '../hoc';

const AllWorks = () => {
  return (
    <>
      <Works />
      <Works2 />
      <Works3 />
    </>
  );
};

export default SectionWrapper(AllWorks, '');
