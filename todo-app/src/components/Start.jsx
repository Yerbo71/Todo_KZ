import { Link } from "react-router-dom";
import styles from "./Start.module.scss";
function Start () {
    return(
        <div className={styles.main}>
            <div className={styles.box}>
                <h1>ZhaSa</h1>
                <p>Жұмыстарды оңай басқару</p>
                <Link to="/todo">
                    <button>Кеттік!</button>
                </Link>
            </div>
        </div>
    );
}
export default Start;