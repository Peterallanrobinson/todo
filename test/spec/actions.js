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
});