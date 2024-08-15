import { createSlice } from '@reduxjs/toolkit'

import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchApiSlice = createSlice({
    name: 'fetchApi',
    initialState: {
        value: [], 
        loading: false,
        error: null,
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            state.value = action.payload;
        },
        fetchFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
})

export const { fetchStart, fetchSuccess, fetchFailure } = fetchApiSlice.actions;
  
export const fetch = () => async (dispatch) => {
    dispatch(fetchStart());
    try {
        const data = await fetchData();
        dispatch(fetchSuccess(data));
    } catch (error) {
        dispatch(fetchFailure(error.message));
    }
};

export default fetchApiSlice.reducer