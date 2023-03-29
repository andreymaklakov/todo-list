import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { TextField, Button } from "@mui/material";

import { addTodo } from "../../store/todoList";

import styles from "./InputForm.module.scss";

const InputForm = () => {
  const [newTodo, setNewTodo] = useState({ text: "", done: false });

  const dispatch = useDispatch();

  const maxInputLength = 100;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(newTodo));

    setNewTodo((prevState) => ({ ...prevState, text: "" }));
  };

  const handleChange = (e) => {
    setNewTodo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className={styles.input}
        value={newTodo.text}
        onChange={handleChange}
        label="Todo"
        name="text"
        variant="outlined"
        placeholder="Enter your todo..."
      />
      <Button
        className={styles.button}
        disabled={!newTodo.text || newTodo.text.length >= maxInputLength}
        variant="contained"
        type="submit"
      >
        Add
      </Button>
    </form>
  );
};

export default InputForm;
