import React from 'react';
import classes from './Person.css';

// class Person extends Component {
//   render() {
//     return (
//       <div>
//         <p>
//           I'm {this.props.name} and I am {this.props.age} year old!
//         </p>
//         <p>{this.props.children}</p>
//       </div>
//     );
//   }
// }

const person = props => {
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} year old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

// export default Person;
export default person;
