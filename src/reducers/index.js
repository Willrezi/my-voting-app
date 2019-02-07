const initialState = {
  angular: 0,
  react: 0,
  vuejs: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "VOTE_ANGULAR":
      console.log("Your choice is Angular!");
      return { ...state, angular: state.angular + 1 };
    case "VOTE_REACT":
      console.log("Your choice is React!");
      return { ...state, react: state.react + 1 };
    case "VOTE_VUEJS":
      console.log("Your choice is Vue.js!");
      return { ...state, vuejs: state.vuejs + 1 };

    default:
      return state;
  }
};
