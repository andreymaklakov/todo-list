import React from "react";
import { useSelector } from "react-redux";

import { getList } from "../../store/todoList";

import styles from "./Counter.module.scss";

const Counter = () => {
  const list = useSelector(getList());

  if (!list.length) {
    return null;
  }

  const doneQnty = list.filter((item) => item.done === true).length;
  const outstandingQnty = list.length - doneQnty;

  return (
    <div className={styles}>
      <h3>
        Done: {doneQnty} / Outstanding: {outstandingQnty}
      </h3>
    </div>
  );
};

export default Counter;
