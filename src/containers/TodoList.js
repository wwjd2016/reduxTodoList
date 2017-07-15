import React from 'react';
import {connect} from 'react-redux';
import {togoleTodo} from '../actions/index.js';

const TodoList = ({todos, onClickTodo}) => {
  return (
    <ul>
      {
        todos.map(item => {
          return <li
            key={item.id}
            onClick={() => {onClickTodo(item.id)}}
            style={{color: item.complete ? '#d5d5d5' : '#000'}}
          >{item.text}</li>
        })
      }
    </ul>
  )
}

const getVisibilityTodos = (state) => {
  console.log(23231, state.visibilityFilter)
  switch (state.visibilityFilter) {
    case 'SHOW_COMPLETE':
      return state.todos.filter(item => item.complete)
    case 'SHOW_ACTIVITY':
      return state.todos.filter(item => !item.complete)
    default:
      return state.todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibilityTodos(state)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClickTodo: (id) => {
      dispatch(togoleTodo(id))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
