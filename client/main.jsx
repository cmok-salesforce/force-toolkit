import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

//import App from '../imports/ui/todo-app/App.js';
//import HelloWorld from '../imports/ui/helloworld-app/hello.js';
import Welcome from '../imports/ui/helloworld-app/welcome';
import Comment from '../imports/ui/helloworld-app/Comment';
import Clock from '../imports/ui/helloworld-app/Clock';
import Toggle from '../imports/ui/helloworld-app/Toggle';


Meteor.startup(() => {
  //render(<App />, document.getElementById('react-target'));
  //render(<HelloWorld />, document.getElementById('react-target'));
  //render(<Welcome />, document.getElementById('react-target'));
  //render(<div><Clock /><Clock /><Clock /></div>, document.getElementById('react-target'));
  render(<Toggle />, document.getElementById('react-target'));

});
