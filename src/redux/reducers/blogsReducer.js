import { FETCH_BLOGS } from "../actions";

const initialState = {
  blogs: [],
  isLoading: true
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      const newState = {
        ...state,
        blogs: action.payload,
        isLoading: false,
      };
      return newState;
    default:
      return state;
  }
};

export default mainReducer;
