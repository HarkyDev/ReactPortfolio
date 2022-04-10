import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import  './styles/App.css';
import projects from './myProjects';
import ProjectList from './components/ProjectList';
import ContactSection  from './components/contactSection';
import About  from './components/About';

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div class="mainContainer">
      <Navbar />
      <Hero />
      <ProjectList projects = {projects} />
      <About />
      <ContactSection />
    </div>
  );
}

export default App;
