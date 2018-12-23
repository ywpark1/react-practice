import React, { Component } from 'react';

import Person from './Person/Person';

// const persons = props =>
//   props.persons.map((person, index) => {
//     return (
//       <Person
//         click={() => props.clicked(index)}
//         name={person.name}
//         age={person.age}
//         key={person.id}
//         changed={event => props.changed(event, person.id)}
//       />
//     );
//   });

//   export default persons;

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      '[UPDATE Persons.js] Inside componentWillReceiveProps(nextProps)',
      nextProps
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE Persons.js] Inside shouldComponentUpdate(nextProps, nextState)',
      nextProps,
      nextState
    );

    return (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked
    );
    // return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE Persons.js] Inside componentWillUpdate(nextProps, nextState)',
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate()');
  }

  render() {
    console.log('[Persons.js] Inside render()');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
