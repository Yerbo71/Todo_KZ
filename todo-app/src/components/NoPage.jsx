import styles from "./NoPage.module.scss";
import { Link } from "react-router-dom";
export default function NoPage() {
    return(
        <div className={styles.main}>
            <div className={styles.box}>
                <h1>404</h1>
                <p>Парақша табылмады!</p>
                <Link to="/">
                    <button>Қайту!</button>
                </Link>
            </div>
        </div>
    );
}