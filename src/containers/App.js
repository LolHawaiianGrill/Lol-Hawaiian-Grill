import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import {Router} from '../utilities/router';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <Router/>
        <Footer/>
      </div>
    );
  }
}

export default App;
