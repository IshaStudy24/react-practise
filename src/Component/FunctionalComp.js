import React from 'react'

function FunctionalComp(props){
    return <p>Hello {props.name}! This is a functional component.</p>
}

export default FunctionalComp;
// feature of default export is you can rename component while importing it
// when we use props with functional components we should pass props in parameter.
