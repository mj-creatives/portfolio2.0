import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Works2,
  Works3,
  Works4,
  StarsCanvas,
  DataWorks,
} from '../components';

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Works2 />
      <Works3 />
      <Works4 />
      <DataWorks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default App;
