import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from "../reducers/blogsReducer"

const bigReducer = {
  blogs: blogsReducer,
}

const store = configureStore({
  reducer: bigReducer,
});

export default store;
