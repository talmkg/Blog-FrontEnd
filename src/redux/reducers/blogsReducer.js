import { FETCH_BLOGS, SET_ID } from "../actions";

const initialState = {
  blogs: [],
  isLoading: true,
  id: "",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {
        ...state,
        blogs: action.payload,
        isLoading: false,
      };
    case SET_ID: {
      return {
        ...state,
        id: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
