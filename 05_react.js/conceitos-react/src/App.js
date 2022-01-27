import React, { Component } from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import '../node_modules/jquery/dist/jquery.min'
import '../node_modules/popper.js/dist/umd/popper.min'
import '../node_modules/bootstrap/dist/js/bootstrap.min'

import Menu from './components/Menu'
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <>
        <Menu />
        <br />
        <div className="container" >
          <Routes />
        </div>
      </>
    )
  }
}

export default App;