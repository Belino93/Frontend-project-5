import { configureStore } from '@reduxjs/toolkit';
import filmSlice from '../containers/Films/filmSlice.js';


export default configureStore({
    reducer: {
        film: filmSlice,
    },
    
})