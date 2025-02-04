import {configureStore} from '@reduxjs/toolkit';
import watchReducer from '../Redux/watchReducers'

const store = configureStore({
    reducer:{
        watchListData: watchReducer,
    }
})

export default store
