import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    count:2
}

const CountSlice = createSlice({
    //name of slice
    name: 'count',
    //initial state
    initialState,
    //reducer as an object
    reducers:{
        Count: (state)=>{state.count++}
        
    }
})

export const {Count} = CountSlice.actions
export default CountSlice.reducer;


