import jasmineEnzyme from 'jasmine-enzyme';
import reducer from '../../app/reducers/reducer.js';
import * as actions from '../../app/actions/actions.js';

describe('Reducers:', () => {
  beforeEach(() => {
    jasmineEnzyme();
  });

  describe('ADD_TODO', function() {
    it('should add a todo to the state', function() {
      let state = {
        todos: []
      };
      const result = reducer(state, actions.addTodo("Chicken Dinner"));

      expect(result).toEqual({
        todos: [
          {
            todoText: "Chicken Dinner",
            status: "incomplete"
          }
        ]
      });
    });

    it('should add more than one todo', function() {
      let state = {
        todos: []
      };

      const result = reducer(state, actions.addTodo("Chicken Dinner, Turkey Dinner, Roast Beef"));

      expect(result).toEqual({
        todos: [
          {
            todoText: "Chicken Dinner, Turkey Dinner, Roast Beef",
            status: "incomplete"
          }
        ]
      });
    });
  });
  describe('REMOVE_TODO' , function() {
   it('should remove a todo from the state' , function() {
    let state = {
     todos: [
      {
        todoText:"Turkey Dinner",
        status: "complete"
      }
    ]

    };
     
    const result = reducer(state, actions.removeTodo("Turkey Dinner"));
    
    expect(result).toEqual({
      todos: [
        {
          todoText: "Turkey Dinner"
        }
       
       ]
      });
    )};
  }};
  















}); //this is the endline 

