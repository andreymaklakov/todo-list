import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { MenuItem, Select } from "@mui/material";

import { filterValues } from "../../utils/constants";
import { changeFilter, getFilter } from "../../store/todoList";

import styles from "./Filter.module.scss";

const Filter = () => {
  const filter = useSelector(getFilter());

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Select
      className={styles.selectField}
      value={filter}
      onChange={handleChange}
    >
      {filterValues.map((item, i) => (
        <MenuItem className={styles.menuItem} key={i} value={i}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Filter;
