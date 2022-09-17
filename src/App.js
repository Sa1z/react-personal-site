import { useEffect, useState } from 'react';

import './index.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';



function App() {
  const [sections, setSections] = useState({
    home: true,
    about: false,
    portfolio: false,
    contact: false
  })

  return (
    <div className="App">
        <Navbar sections={sections} />
        {sections.home && <Home />}
        {sections.about && <About />}
        {sections.portfolio && <Portfolio />}
        {sections.contact && <Contact />}
    </div>
  );
}

export default App;
