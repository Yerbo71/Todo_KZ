import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import styles from "./Todo.module.scss";
import TodoList from "./TodoList";



function Todo () {
    return(
        <>
        <NavBar/>
        <div className={styles.filter}>
            </div>
        <div className={styles.main}>
            <div className={styles.box}>
                <div className={styles.link}>
                    <Link to="/newtodo">
                       Жаңа тапсырма қосу
                    </Link>
                </div>
                <TodoList/>
            </div>
        </div>
        </>
    );
}
export default Todo;