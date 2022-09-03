const todoReducer = (state = [], action) => {
  //   update state
  switch (action.type) {
    case "ADD_TODO":
      return [action.data.todo, ...state];
    default:
      return state;
  }
};

export default todoReducer;
