import { FETCH_BLOGS } from "../actions";

const initialState = {
  blogs: [],
  isLoading: true,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        blogs: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default mainReducer;
