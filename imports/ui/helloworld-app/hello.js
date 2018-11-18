import React, { Component } from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1 className="greeting">
    Hello, {formatName(user)}!
  </h1>
  
);

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

// App component - represents the whole app
export default class HelloWorld extends Component {
  render() {
    return (
      <div>
        {element}
        <h2>Good to see you here.</h2>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );  
  }
}