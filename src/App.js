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
    home: true,
    // About
    about: false,
    // Portfolio
    portfolio: false,
    // Contact
    contact: false
  })

  function changePage(section) {
    setSections(prevSection => prevSection.map(prev => {
      return prev.section == section ? {...prev, section: !prev.section} : prev
    }))
  }

  return (
    <div className="App">
        <Navbar changePage={()=> changePage()} />
        {sections.home && <Home />}
        {sections.about && <About />}
        {sections.portfolio && <Portfolio />}
        {sections.contact && <Contact />}
    </div>
  );
}

export default App;
