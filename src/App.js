import React from 'react';
import './App.css';
import {NavBar} from './components/NavBar.js';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
//import {Projects} from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      
    </div>
  );
}

export default App;
