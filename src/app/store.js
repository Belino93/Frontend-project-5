import { configureStore } from '@reduxjs/toolkit';
import filmSlice from '../containers/Films/filmSlice';


export default configureStore({
    reducer: {
        film: filmSlice,
    },
    
})