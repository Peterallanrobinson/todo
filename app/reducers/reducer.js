import * as actions from '../actions/actions.js';

const initialState = {
  date: Date.now(),
  todoBeingEdited: null,
  todos: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(actions.ADD_TODO):
      state.todos.push({
        todoText: action.todoText,
        status: "incomplete"
      });

      return state;
    default:
      return state;
  }
}

export default reducer;
