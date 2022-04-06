import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import  './styles/App.css';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div class="mainContainer">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
