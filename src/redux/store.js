import { configureStore } from '@reduxjs/toolkit';
import postDataReducer from '../redux/slices/postDataSlice'

const store = configureStore({
  reducer: {
    postData: postDataReducer, // Add the postData slice
  },
});

export default store