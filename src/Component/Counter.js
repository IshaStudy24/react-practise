import React, { Component } from 'react'
import UpdatedComponent from './HigherOrder'

export class Counter extends Component {

    constructor(props) {
        super(props)  
        this.state = {
           count: 0
        }
    }

    IncrementCount = () =>{
      this.setState({count: this.state.count + 1})
    }

  render() {
    const { count } = this.state 
    return (
      <div>
        <button onMouseEnter={this.IncrementCount}>{this.props.name} Incremented to {count}</button>
      </div>
    )
  }
}

export default UpdatedComponent(Counter)

// State:
// A state is an object that stores values of properties belonging to a component that could change over a 
// period of TimeRanges.
// everytime state of object changes, react re-render component, state is initialised in constructor
// state can store multiple properties

// Props Vs State:
// Props:
// 1.Props are used to pass data and event handler to child component.
// 2. Props are immutable, once set cannot be changed
// 3.Props can be used in both functional and class components.
// 4.Props are set by the parents component for child components.

// State:
//  1.state is used to store data of components that has to be rendered to the view.
// 2.State holds the data and can change over the time
// 3.State can only be used in class components.
// 4.state is generally updated by the event handlers.

// setState() methos enques all the update made to the component state and instruct React to re-render
// the component and its children with updated state.