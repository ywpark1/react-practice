import React, { PureComponent, Fragment } from 'react';
import classes from './App.css';
import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';
import withClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);

    this.state = {
      persons: [
        { id: 'abc1', name: 'Max', age: 28 },
        { id: 'def2', name: 'Manu', age: 29 },
        { id: 'ghi3', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(
  //       '[UPDATE App.js] Inside shouldComponentUpdate(nextProps, nextState)',
  //       nextProps,
  //       nextState
  //     );

  //     // return true;
  //     return (
  //       nextState.persons !== this.state.persons ||
  //       nextState.showPersons !== this.state.showPersons
  //     );
  //   }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE App.js] Inside componentWillUpdate(nextProps, nextState)',
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }

  // Newer version of setting state
  //   state = {
  //     persons: [
  //       { id: 'abc1', name: 'Max', age: 28 },
  //       { id: 'def2', name: 'Manu', age: 29 },
  //       { id: 'ghi3', name: 'Stephanie', age: 26 }
  //     ],
  //     otherState: 'some other value',
  //     showPersons: false
  //   };

  //   switchNameHandler = newName => {
  //     // DONT DO THIS
  //     // this.state.persons[0].name = 'Maxence';

  //     this.setState({
  //       persons: [
  //         { name: newName, age: 28 },
  //         { name: 'Manu', age: 29 },
  //         { name: 'Stephanie', age: 27 }
  //       ]
  //     });
  //   };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    // Alternative way
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      //   <WithClass classes={classes.App}>
      <Fragment>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </Fragment>
      //   </WithClass>
    );
  }
}

export default withClass(App, classes.App);
// export default App;
