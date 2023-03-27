import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "simplilearn"
    }
  }
  componentDidMount(){
    setInterval(() => {
        this.setState({
            name: "simplilearn"
        })
    },3000)
  }

  render() {
    // console.log("Parent comp render");
    return (
      <div>
        I am ParentComp
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp


// Mounting of components: componentWillMount => render => componentDidMount
// componentWilMount => is called immediatelt before the initial rendering occurs
// componentDidMount => is invoked after React inserts component in DOM

// Updatation:
// componentWillReceiveProps => invokes when component received props
// shouldComponentUpdate() => decides whether a next component's state should trigger re-render or not
// componentWillUpdate() => is invoked before rendering
// componentDidUpdate() => is called after react updated a DOM

// Unmounting:
// componentWillUnmount() => is called while unmounting th component. It performs any cleanup necessary. 