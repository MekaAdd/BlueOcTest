import { configureStore } from '@reduxjs/toolkit'
import fetchApiReducer from '../features/FetchAPI/fetchApiSlice'

export default configureStore({
  reducer: {
    fetchApi: fetchApiReducer
  },
})