import React from "react";
import { useSelector } from "react-redux";

import { getFilter, getList } from "../../store/todoList";
import TodoItem from "../TodoItem";

const List = () => {
  const list = useSelector(getList());
  const filter = useSelector(getFilter());

  const filteredList = list.filter((item) => {
    if (filter === 0) {
      return item;
    } else if (filter === 1) {
      return item.done === true;
    } else if (filter === 2) {
      return item.done === false;
    }
    return item;
  });

  return filteredList.map((item) => <TodoItem key={item.id} item={item} />);
};

export default List;
