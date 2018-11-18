import React, { Component } from 'react';

function Bienvenue(props) {
    return (<div>
        <h1>Hello, {props.name}</h1>
    </div>);
  }
  
  function App() {
    return (
      <div>
        <Bienvenue name="Sara" />
        <Bienvenue name="Cahal" />
        <Bienvenue name="Edite" />
      </div>
    );
  }

// App component - represents the whole app
export default class Welcome extends Component {
  render() {
    return (
      <div>
        {App()}
      </div>
    );  
  }
}