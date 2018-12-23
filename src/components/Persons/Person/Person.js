import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import withClass from '../../hoc/WithClass';
import PropTypes from 'prop-types';
import { AuthContext } from '../../containers/App';

// const person = props => {
//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>
//         I'm {props.name} and I am {props.age} year old!
//       </p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.changed} value={props.name} />
//     </div>
//   );
// };

// export default person;

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Person.js] Inside render()');
    return (
      <Fragment>
        <AuthContext.Consumer>
          {auth => (auth ? <p>I'm authenticated!</p> : null)}
        </AuthContext.Consumer>
        {/* {this.props.authenticated ? <p>I'm authenticated!</p> : null} */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} year old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
// export default Person;
