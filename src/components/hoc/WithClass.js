import React, { Component } from 'react';

// const withClass = props => (
//   <div className={props.classes}>{props.children}</div>
// );

// const withClass = (WrappedComponent, className) => {
//   return props => (
//     <div className={className}>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

const withClass = (WrappedComponent, className) => {
  const WithClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardRef} {...this.props} />
        </div>
      );
    }
  };

  return React.forwardRef((props, ref) => {
    return <WithClass {...props} forwardRef={ref} />;
  });
};

export default withClass;
