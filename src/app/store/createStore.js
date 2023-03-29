import { combineReducers, configureStore } from "@reduxjs/toolkit";

import todoListReducer from "./todoList";

const rootReducer = combineReducers({
  todoList: todoListReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
