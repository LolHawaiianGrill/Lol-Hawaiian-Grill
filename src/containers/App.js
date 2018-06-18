import React from 'react';
import Header from '../components/Header';
import {Router} from '../utilities/router';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Router/>
      </div>
    );
  }
}

export default App;
