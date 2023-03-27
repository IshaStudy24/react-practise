import React from "react";

const UpdatedComponent = OriginalComponent => {
    class NewComp extends React.Component{
        render(){
            return <OriginalComponent name="The User" />;
        }
    }
    return NewComp;
}

export default UpdatedComponent;

// Higher Order Components:
// A higher-order component is a function that takes a component and returns a new component.
// It facilitates reusing of component logic.
// const NewComponent = higherOrderComponent(originalComponent)

