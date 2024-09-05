import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async thunk to fetch posts for each category
export const fetchPostsByCategory = createAsyncThunk(
  'postData/fetchPostsByCategory',
  async (category, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://dashboard.ranipadmawatiasm.in/wp-json/wp/v2/posts?categories=${category}`);
      return { category, data: response.data };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Define async thunk to fetch the main notice page
export const fetchMainNotice = createAsyncThunk(
  'postData/fetchMainNotice',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://dashboard.ranipadmawatiasm.in/wp-json/wp/v2/pages/157');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Define async thunk to fetch the gallery data
export const fetchGallery = createAsyncThunk(
  'postData/fetchGallery',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://dashboard.ranipadmawatiasm.in/wp-json/wp/v2/pages/250');
      return response.data; // Assuming gallery data is an object
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state for different post categories
const initialState = {
  academic: [],
  administrative: [],
  faculty: [],
  gallery: {}, // Update gallery to be an object
  library: [],
  notice: [],
  result: [],
  mainNotice: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const postDataSlice = createSlice({
  name: 'postData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        switch (action.payload.category) {
          case 11:
            state.academic = action.payload.data;
            break;
          case 9:
            state.administrative = action.payload.data;
            break;
          case 10:
            state.faculty = action.payload.data;
            break;
          case 7:
            state.library = action.payload.data;
            break;
          case 3:
            state.notice = action.payload.data;
            break;
          case 5:
            state.result = action.payload.data;
            break;
          default:
            break;
        }
      })
      .addCase(fetchPostsByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchMainNotice.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMainNotice.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mainNotice = action.payload;
      })
      .addCase(fetchMainNotice.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchGallery.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGallery.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.gallery = action.payload; // Update to handle object data
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  }
});

export default postDataSlice.reducer;
