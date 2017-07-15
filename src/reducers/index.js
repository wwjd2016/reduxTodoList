import {combineReducers} from 'redux';
import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';

// const initalState = {
//   todos: [
//     {
//       id: 0,
//       text: 'this is a todo',
//       complete: false
//     }
//   ],
//   visibilityFilter: 'SHOW_ALL'
// }
const rootReducers = combineReducers({
  todos,
  visibilityFilter
})

export default rootReducers;
