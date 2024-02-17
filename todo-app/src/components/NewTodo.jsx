import styles from "./NewTodo.module.scss";
import { useContext, useState } from "react";
import NavBar from "./NavBar";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

export default function NewTodo() {
  const { addTodo,addGroup } = useContext(AppContext);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("All");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    addTodo(value);
    addGroup(value2);
    setValue("");
    setValue2("Health");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleChangeQospau = () => {
    setValue("");
  };

  return (
    <>
      <NavBar />
      <div className={styles.main}>
        <div className={styles.box}>
          <h2>Жаңа тапсырма</h2>
          <form onSubmit={handleOnSubmit}>
            <input
              placeholder="Атауын Жазыңыз"
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
              <button type="submit" className={styles.qosu}>
                Қосу
              </button>
              <Link to="/todo">
              <button
                className={styles.qospau}
                onClick={handleChangeQospau}
              >
                Қоспау
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
