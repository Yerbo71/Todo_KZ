import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { AppContext } from "../App";
import { useContext } from "react";
import styles from "./Detail.module.scss";

export default function Detail() {
    const { todos,groups, setTodos,setGroups } = useContext(AppContext);
    const [value, setValue] = useState("");
    const [value2, setValue2] = useState("All");
    const { index } = useParams();
    
    const todoIndex = parseInt(index, 10);
    if (isNaN(todoIndex) || todoIndex < 0 || todoIndex >= todos.length) {
      return <div>Invalid Todo Index</div>;
    }
  
    const todo = todos[todoIndex];
    const group = groups[todoIndex];
  
    const handleOnSubmit = (event) => {
      event.preventDefault();
  
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos];
        updatedTodos[todoIndex] = value;
        return updatedTodos;
      });
      setGroups((prevGroups)=>{
        const updatedGroups = [...prevGroups];
        updatedGroups[todoIndex] = value2;
        return updatedGroups;
      })
      setValue("");
    };
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const handleChange2 = (event) => {
      setValue2(event.target.value);
    };
  
    return (
      <>
        <NavBar />
        <div className={styles.main}>
          <div className={styles.box}>
            <h2>Өзгерту</h2>
            <p>{todo} {group}</p>
            <form onSubmit={handleOnSubmit}>
            <input
              value={value}
              onChange={handleChange}
            />
            <select onChange={handleChange2}>
              <option value="All">All</option>
              <option value="Health" >Health</option>
              <option value="Education" >Education</option>
              <option value="Work" >Work</option>
              <option value="Networking" >Networking</option>
            </select>
            
          <div className={styles.boxbutton}>
            <button type="submit" className={styles.qosu}>Өзгерт</button>
            <Link to="/todo"><button className={styles.qospau}>Артқа</button></Link>
            </div>
          </form>

          </div>
          <div className={styles.boxbutton}>
          </div>
        </div>
      </>
    );
  }
  