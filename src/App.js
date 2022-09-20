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
      {home: {current: true}} : 
      {current: false}
    }))
  }

  return (
    <div className="App">
        <Navbar changePage={()=> changePage()} />
        {sections.home.current && <Home />}
        {sections.about.current && <About />}
        {sections.portfolio.current && <Portfolio />}
        {sections.contact.current && <Contact />}
    </div>
  );
}

export default App;
