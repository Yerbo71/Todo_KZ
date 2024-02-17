import React, { useContext, useState } from "react";
import styles from "./TodoList.module.scss";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import gavno from "./../assets/garbage.svg";
import gavno2 from "./../assets/Edit.svg";

export default function TodoList() {
  const { todos,groups, removeTodo } = useContext(AppContext);
  const [checkedTodos, setCheckedTodos] = useState([]);

  const handleDelete = (index) => {
    removeTodo(index);
  };

  const handleCheckboxChange = (index) => {
    setCheckedTodos((prevChecked) => {
      const newChecked = [...prevChecked];
      if (newChecked.includes(index)) {
        newChecked.splice(newChecked.indexOf(index), 1);
      } else {
        newChecked.push(index);
      }
      return newChecked;
    });
  };

  return (
    <>
      {todos.map((todos,index) => (
        <div key={index} className={styles.todoItem}>
          <div className={styles.group}>{groups[index]}</div>
          <input
            type="checkbox"
            checked={checkedTodos.includes(index)}
            onChange={() => handleCheckboxChange(index)}
          />
          <span style={{ textDecoration: checkedTodos.includes(index) ? "line-through" : "none" }}>
            {todos}
          </span>
          <button onClick={() => handleDelete(index)}><img src={gavno}/></button>
          <Link to={"/todo/" + index}><button><img src={gavno2}/></button></Link>
        </div>
      ))}
    </>
  );
}
