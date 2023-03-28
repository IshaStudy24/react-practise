import React, { Component } from 'react'

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}! Welcome from {this.props.place}...</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default ClassProps

// Props:
// Short form for properties allows the user to pass arguments or data to components.
// props can be send from parent to child components, hence child cannot make any changes
// props are read-only and cannot be changed