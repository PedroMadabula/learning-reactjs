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
      otherState: 'Some other value',
      showPersons: false
    }); 

    console.log(personsState);

    const switchNameHandler = (newName) => {
      console.log('Was clicked');
      // personsState.persons[0].name = 'Pedro';
      setPersonsState({
        persons: [
          { name: newName, age: 28},
          { name: 'Manu', age: 29},
          { name: 'Frederico', age: 29}
       ]
     });
    };

    const nameChangedHandler = (event) => {
      setPersonsState({
        persons: [
          { name: 'Pedro', age: 28},
          { name: event.target.value, age: 29},
          { name: "Fred", age: 29}
        ]  
      })
    }

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    const tooglePersonsHandler = () => {
      const doesShow = personsState.showPersons;
      setPersonsState({showPersons: !doesShow});
    }

    let persons = null;

    if (personsState.showPersons) {
      persons = (
        <div >
            <Person 
              name={personsState.persons[0].name} 
              age={personsState.persons[0].age}/>
            <Person 
              name={personsState.persons[1].name}
              age={personsState.persons[1].age}
              click = {switchNameHandler.bind(this, 'Pedrocas')}
              changed={nameChangedHandler}> I'm gonna be a great Full Stack Dev by the end of this Year</Person>
            <Person 
              name={personsState.persons[2].name} 
              age={personsState.persons[2].age}/>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
<<<<<<< HEAD
        <button 
          style={style} 
          onClick={tooglePersonsHandler}>Switch Name</button>
        {persons}
=======
        <button onClick={switchNameHandler.bind(this, 'Pedrocas')}>Switch Name</button>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}/>
        <Person 
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}/>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}
          click = {switchNameHandler.bind(this, 'Pedrocas')}> I'm gonna be a great Full Stack Dev by the end of this Year</Person>
>>>>>>> parent of 6639d53 (anotherWayToPassArguments)
      </div>
    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'It works now!'));
}

export default app;