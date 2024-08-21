import { configureStore } from '@reduxjs/toolkit'

import aviasalesReducer from './aviasalesSlice'

export default configureStore({
  reducer: {
    aviasales: aviasalesReducer,
  },
})
