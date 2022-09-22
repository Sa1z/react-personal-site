import { useEffect, useState } from 'react';

import './index.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';



function App() {
  const [sections, setSections] = useState({
    // Home
    home: {
      id: 1,
      current: true
    },
    // About
    about: {
      id: 2,
      current: false
    },
    // Portfolio
    portfolio: {
      id: 3,
      current: false
    },
    // Contact
    contact: {
      id: 4,
      current: false
    }
  })

  function changePage(section) {
    setSections(prevSection => prevSection.map(prev => {
      return prev.about.id === section ? 
      {about: {current: true}} : 
      prev
    }))
  }

  return (
    <div className="">
        <Navbar changePage={()=> changePage()} />
        <div className='p-2 max-w-prose mx-auto'>
          <Home />
          {/* <About />
          <Portfolio />
          <Contact /> */}
        </div>
    </div>
  );
}

export default App;
