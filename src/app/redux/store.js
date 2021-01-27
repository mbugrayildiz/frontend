import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './reducers/globalReducer'

export default configureStore({
  reducer: {
    global: globalReducer
  }
})
