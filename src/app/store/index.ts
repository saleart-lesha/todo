import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TaskService } from '../services/TaskService'

const rootReducer = combineReducers({
  [TaskService.reducerPath]: TaskService.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(TaskService.middleware),
})
