import store from './store.js';
import {addTodo, togoleTodo, setFilter} from './actions/index.js';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';

store.subscribe(() => {
  console.log(store.getState());
})
// store.dispatch(addTodo('hello'));
// store.dispatch(addTodo('hello'));
// store.dispatch(addTodo('world'));
// store.dispatch(addTodo('hehe'));

// setTimeout(()=>{
//   store.dispatch(togoleTodo(0));
// }, 2000)




 render(<Provider store={store} >
  <App />
  </Provider>, document.getElementById('root'))
