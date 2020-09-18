import React, { Component } from 'react';
import './App.css';
import Users from './Component/Users'
import Data from './Component/data'

export default class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <Users />
      </div>
    )
  }
}