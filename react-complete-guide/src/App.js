import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29"/>
        <Person name="Fred" age="3">I'm gonna be a great Full Stack Dev by the end of this Year</Person>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'It works now!'));
  }
}

export default App;