import React, { Component } from 'react';

const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

// App component - represents the whole app
export default class HelloWorld extends Component {


  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );  
  }
}