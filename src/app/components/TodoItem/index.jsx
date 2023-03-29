import React from "react";

import { Paper } from "@mui/material";
import {
  CheckCircleOutlineOutlined as DoneIcon,
  DeleteOutlined as DeleteIcon,
} from "@mui/icons-material";

import cn from "classnames";

import styles from "./TodoItem.module.scss";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoDone } from "../../store/todoList";

const TodoItem = ({ item }) => {
  const iconStyles = cn({
    [styles.todo_item_done_icon]: true,
    [styles.todo_item_done_icon_hide]: !item.done,
  });

  const dispatch = useDispatch();

  const handleClickDone = () => {
    dispatch(toggleTodoDone(item.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(item.id));
  };

  return (
    <Paper onClick={handleClickDone} className={styles.todo_item}>
      {item.text}

      <div className={styles.todo_item_icons_container}>
        <DoneIcon className={iconStyles} />
        <DeleteIcon onClick={handleDelete} />
      </div>
    </Paper>
  );
};

export default TodoItem;
