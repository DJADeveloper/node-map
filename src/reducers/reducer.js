const defaultState = {
  currentUser: {},
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case "SET USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
