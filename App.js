import React from 'react';
import  NavBar  from './NavBar';
import  HomePage  from './HomePage'; 
import  Reviews  from './Reviews'; 
import  Footer  from './Footer'; 
import  About  from './About'; 
import Contact from './Contact';
import Guides from './Guides';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <About/>
      <Guides/>
\      <Reviews />
      <Contact/>
      <Footer />

    </div>
  );
}

export default App;
