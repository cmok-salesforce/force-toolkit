import React, { Component } from 'react';

export default class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (

        <button onClick={this.handleClick}>
          Click me
        </button>
        // This syntax ensures `this` is bound within handleClick
        //<button onClick={(e) => this.handleClick(e)}>
        //Click me - This syntax ensures `this` is bound within handleClick
        //</button>
      );
    }
  }