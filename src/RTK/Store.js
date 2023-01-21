import { configureStore } from '@reduxjs/toolkit'
import reducer from './Slice'
import countReducer from './CountSlice'

const store = configureStore({
	reducer: {
		todo:reducer,
		count:countReducer
	},
})


export default store;