import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomepageClass from './components/home/homepage';

class App extends Component {
  componentDidMount() {
    document.title="Grandma's Cookbook"
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomepageClass}/>
        </div>
      </Router>
    );
  }
}

export default (App);
