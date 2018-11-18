import React, { Component } from 'react';



export default class Blog extends React.Component {
    render() {
      return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
        );
    }
  }