import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

//import App from '../imports/ui/todo-app/App.js';
//import HelloWorld from '../imports/ui/helloworld-app/hello.js';
import Welcome from '../imports/ui/helloworld-app/welcome';
import Comment from '../imports/ui/helloworld-app/Comment';
import Clock from '../imports/ui/helloworld-app/Clock';
import Toggle from '../imports/ui/helloworld-app/Toggle';
import LoggingButton from '../imports/ui/helloworld-app/LoggingButton';
import LoginControl from '../imports/ui/helloworld-app/LoginControl';
import Page from '../imports/ui/helloworld-app/Page';
import ListKey from '../imports/ui/helloworld-app/ListKey';
import Blog from '../imports/ui/helloworld-app/Blog';

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

Meteor.startup(() => {
  //render(<App />, document.getElementById('react-target'));
  //render(<HelloWorld />, document.getElementById('react-target'));
  //render(<Welcome />, document.getElementById('react-target'));
  //render(<div><Clock /><Clock /><Clock /></div>, document.getElementById('react-target'));
  //render(<Toggle />, document.getElementById('react-target'));
  //render(<LoggingButton />, document.getElementById('react-target'));
  //render(<LoginControl />, document.getElementById('react-target'));
  //render(<Page />, document.getElementById('react-target'));
  render(<ListKey />, document.getElementById('react-target'));
  //render(<Blog posts={posts}/>, document.getElementById('react-target'));

});
