import {configureStore} from '@reduxjs/toolkit';
//importiong slices
import webInfoReducer from './slices/webinfo'

export const store = configureStore({
  reducer:{
    info:webInfoReducer,
  }
})



