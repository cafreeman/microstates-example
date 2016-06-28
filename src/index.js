import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';
import App from './components/App';

const root = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

const todos = [
  {
    // id: 1,
    task: 'do stuff',
  },
  {
    // id: 2,
    task: 'do some more stuff',
  },
  {
    // id: 3,
    task: 'the third todo',
  },
  {
    // id: 4,
    task: 'microstates are awesome!',
  },
];

const store = new Store(todos);

ReactDOM.render(
  <App store={store} />,
  document.querySelector('#app')
);
