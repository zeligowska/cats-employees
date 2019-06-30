import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CatsList from './components/CatsList';
import About from './components/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import './App.css';


function App() {
  const links = [
    { url: '/', text: 'Cats List' },
    { url: '/about', text: 'About' }
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar links={links} />

        <h1>List of excellent cat employees</h1>
        <Route path="/" exact component={CatsList} />
        <Route path="/About" component={About} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
