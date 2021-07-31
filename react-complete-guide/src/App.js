import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
      persons: [
        { name: 'Max', age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 26}
      ],
      otherState: 'Some other value'
    }); 

    console.log(personsState);

    const switchNameHandler = () => {
      console.log('Was clicked');
      // personsState.persons[0].name = 'Pedro';
      setPersonsState({
        persons: [
          { name: 'Pedro', age: 28},
          { name: 'Manu', age: 29},
          { name: 'Frederico', age: 29}
       ]
     });
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>I'm gonna be a great Full Stack Dev by the end of this Year</Person>
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'It works now!'));
}

export default app;