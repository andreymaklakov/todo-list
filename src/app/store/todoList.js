import { createSlice } from "@reduxjs/toolkit";

import { setToLS } from "../utils/setToLocalStorage";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    list: [],
    currentFilter: 0,
  },
  reducers: {
    todosLoaded(state, action) {
      const todos = JSON.parse(action.payload);
      state.list = todos;
    },
    todoAdded(state, action) {
      const lastId = state.list[state.list.length - 1]?.id || 0;

      state.list = [...state.list, { ...action.payload, id: lastId + 1 }];

      setToLS(state.list);
    },
    todoDone(state, action) {
      const todo = state.list.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.done = !todo.done;

        setToLS(state.list);
      }
    },
    todoDeleted(state, action) {
      state.list = state.list.filter((item) => item.id !== action.payload);

      setToLS(state.list);
    },
    filterChanged(state, action) {
      state.currentFilter = action.payload;
    },
  },
});

const { reducer: todoListReducer, actions } = todoListSlice;
const { todoAdded, todoDone, todoDeleted, todosLoaded, filterChanged } =
  actions;

export const loadTodoList = (todos) => (dispatch) => {
  dispatch(todosLoaded(todos));
};

export const addTodo = (todo) => (dispatch) => {
  dispatch(todoAdded(todo));
};

export const toggleTodoDone = (todoId) => (dispatch) => {
  dispatch(todoDone(todoId));
};

export const deleteTodo = (todoId) => (dispatch) => {
  dispatch(todoDeleted(todoId));
};

export const changeFilter = (data) => (dispatch) => {
  dispatch(filterChanged(data));
};

export const getList = () => (state) => state.todoList.list;
export const getFilter = () => (state) => state.todoList.currentFilter;

export default todoListReducer;
