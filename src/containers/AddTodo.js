import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index.js';

const AddTodo = ({dispatch}) => {
  let input;
  return (
    <div>
      <input type="text" ref={(node) => {input = node}}/>
      <button onClick={() => {
        if (input.value !== '') {
          dispatch(addTodo(input.value));
          input.value = '';
        }
      }}>add todo</button>
    </div>
  )
}

export default connect()(AddTodo);
