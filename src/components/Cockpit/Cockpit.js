import React, { Fragment } from 'react';
import classes from './Cockpit.css';
// import Aux from '../hoc/Aux.js';

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Fragment>
      <h1>Hello World!!</h1>
      <p className={assignedClasses.join(' ')}>This is really working!!!</p>
      <button className={btnClass} onClick={props.clicked}>
        {!props.showPersons ? 'Show People' : 'Hide People'}
      </button>
      <button onClick={props.login}>Log in</button>
    </Fragment>
  );
};

export default React.memo(cockpit);
