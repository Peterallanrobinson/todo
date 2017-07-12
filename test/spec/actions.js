import jasmineEnzyme from 'jasmine-enzyme';
import * as actions from '../../app/actions/actions.js';

describe('Actions:', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  describe('addTodo', function() {
    it('should return a valid add todo action', function() {
      const result = actions.addTodo("Chicken Dinner");

      expect(result).toEqual({
        type: actions.ADD_TODO,
        todoText: "Chicken Dinner"
      });
    });
  });

  describe("removeTodo", function() {
    it('should return a valid remove todo action', () => {
      const result = actions.removeTodo(12);

      expect(result).toEqual({
        type: actions.REMOVE_TODO,
        id: 12
      });
    });
  });


  describe("editTodoStatus", function() {
    it('should return a valid edit todo status action', () => {
      const result = actions.editTodoStatus(14);

      expect(result).toEqual({
        type: actions.EDIT_TODO_STATUS,
        id: 14
        status:status //or Editing?

      });
    });
  });

  
  describe("startEditingTodo", function() {
    it('should return a valid action to start editing the todo', () => {
      const result = actions.startEditingTodo(14);

      expect(result).toEqual({
        type: actions.START_EDITING_TODO
        id: 14

      });
    });
  });


  describe("editTodoText", function() {
    it('should return a valid edit todo text action', () => {
      const result = actions.editTodoText("Turkey Dinner");

      expect(result).toEqual({
        type: actions.EDIT_TODO_TEXT,
        id: 14
        todoText:"Turkey Dinner"

      });
    });
  });
//
  
  describe("stopEditingTodo", function() {
    it('should return a valid stop editing todo action', () => {
      const result = actions.stopEditingTodo("Turkey Dinner");

      expect(result).toEqual({
        type: actions.STOP_EDITING_TODO,
        id: 14
        todoText:"Turkey Dinner"
      });
    });
  });

  //I think we need here some type of editing status again so if the todo is completed we can clear the data as shown below.
  describe("clearData", function() {
    it('should return a valid clear data action', () => {
      const result = actions.clearData(14);

      expect(result).toEqual({
        type: actions.CLEAR_DATA,
      });
    });
  });



});