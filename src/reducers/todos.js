const initalListState = [];
let i = 0;

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: i++,
        text: action.text,
        complete: false
      }
    case 'TOGOLE_TODO':
      if (state.id === action.id) {
        return Object.assign({}, state, {complete: !state.complete})
      }
      return state
    default:
      return state
  }
}

const todos = (state = initalListState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)]
    case 'TOGOLE_TODO':
      return state.map(item => todo(item, action))
    default:
      return state
  }
}

export default todos;
