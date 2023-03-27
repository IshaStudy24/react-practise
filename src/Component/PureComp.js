import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    // console.log("Pure comp render");
    return (
      <div>I am PureComp {this.props.name}</div>
    )
  }
}

export default PureComp

// Pure Component:
// React.Component is the base class for React Components. 
// React.PureComponent is a variation of React.Component class and does a shallow comparison of prop and state.
// It is always better to use pure component, because first it compares and then render