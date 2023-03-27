import React, { Component } from 'react'

export class RegComp extends Component {
  render() {
    // console.log("Regular comp render");
    return (
      <div>I am RegComp {this.props.name}</div>
    )
  }
}

export default RegComp