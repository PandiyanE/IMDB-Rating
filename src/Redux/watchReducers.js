import { createSlice } from '@reduxjs/toolkit'

const watchListSlice = createSlice({
    name:'watchListMovies',
    initialState:[],
    reducers:{
        add(state, action){
            console.log(action);
            state.push(action.payload)
        },

    } 
})

export const {add} = watchListSlice.actions 
export default watchListSlice.reducer 