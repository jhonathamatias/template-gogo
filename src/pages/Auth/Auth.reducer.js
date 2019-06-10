export default (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        auth: {
          ...state.auth,
          authenticated: true
        }
      };
    case "LOGOUT":
      return {
        ...state,
        auth: {
          ...state.auth,
          authenticated: false
        }
      };
    default:
      return state;
  }
};
