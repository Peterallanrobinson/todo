export const ADD_TODO = "ADD_TODO";
export function addTodo(todoText) {
    return {
        type: ADD_TODO,
        todoText: todoText
    };
}

export const REMOVE_TODO = "REMOVE_TODO";
export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    };
}

export const EDIT_TODO_STATUS = "EDIT_TODO_STATUS";
export function editTodoStatus(id, status) {
    return {
        type: EDIT_TODO_STATUS,
        id,
        status
    };
}

export const START_EDITING_TODO = "START_EDITING_TODO";
export function startEditingTodo(id) {
    return {
        type: START_EDITING_TODO,
        id
    };
}

export const EDIT_TODO_TEXT = "EDIT_TODO_TEXT";
export function editTodoText(id, todoText) {
    return {
      type: EDIT_TODO_TEXT,
      id,
      todoText
    };
}

export const STOP_EDITING_TODO = "STOP_EDITING_TODO";
export function stopEditingTodo() {
    return {
        type: STOP_EDITING_TODO
    };
}

export const CLEAR_DATA = "CLEAR_DATA";
export function clearData() {
  return {
    type: CLEAR_DATA
  };
}
