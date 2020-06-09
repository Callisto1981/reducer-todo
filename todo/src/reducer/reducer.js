export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 1
  },
  {
    item: "study",
    complete: false,
    id: 2
  },
  {
    item: "Learn about reducers",
    completed: false,
    id: 3
  },
  {
    item: "study",
    complete: false,
    id: 4
  }
];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        todo: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todo: action.payload,
        completed: false
      };
    case "CLEAR_TODO":
      return {
        ...state,
        complete: !state.completed
      };

    default:
      return state;
  }
};
