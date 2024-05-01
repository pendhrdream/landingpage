
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Solutions from './components/solutions/Solutions';
import Products from './components/products/Products';
import Industries from './components/industries/Industries';
import About from './components/about/About';
import Policy from './components/legal/Policy';

function App() {
  const [ selectedComponent, setSelectedComponent ] = useState('Home');

  const handleItemClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className="App">
      <Navbar handleItemClick={handleItemClick} />
      <div className="">
        {selectedComponent === 'Home' && <Home />}
        {selectedComponent === 'Solutions' && <Solutions />}
        {selectedComponent === 'Products' && <Products />}
        {selectedComponent === 'Industries' && <Industries />}
        {selectedComponent === 'About' && <About />}
        {selectedComponent === 'Policy' && <Policy />}
      </div>
    </div>
  );
}

export default App;
