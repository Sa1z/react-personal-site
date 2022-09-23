import { useEffect, useState } from 'react';

import './index.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';



function App() {

  return (
    <div className="">
        <Navbar />
        <div className='p-2 mx-auto'>
          <Home />
          {/* <About />
          <Portfolio />
          <Contact /> */}
        </div>
    </div>
  );
}

export default App;
