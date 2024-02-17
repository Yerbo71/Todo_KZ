import styles from "./NavBar.module.scss";
import {Link} from "react-router-dom";
import ava from "./../assets/ava.png";
import { useContext } from "react";
import { AppContext } from "../App";

function NavBar () {
    const {todos} = useContext(AppContext);
    return(
    <div className={styles.nav}>
        <div className={styles.profile}>
            <img src={ava} alt="UserAvatar"/>
            <div className={styles.avatext}>
                <p>Сәлем, Ерболат 👋</p>
                <div className={styles.redtext}>
                    {todos.length} тапсырма бар
                </div>
            </div>
        </div>
        <h1>ZhaSa</h1>
        <Link to="/">
            <div className={styles.link}>
                Шығу
            </div>
        </Link>

    </div>
    );
}
export default NavBar;