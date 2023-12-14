import React from 'react';
import './App.css';
import {NavBar} from './components/NavBar.js';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Contacts} from './components/Contacts';
import {Footer} from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Certificates } from './Certificates';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Certificates />
      <Projects />
      <Contacts />      
      <Footer />
    </div>
  );
}

export default App;
