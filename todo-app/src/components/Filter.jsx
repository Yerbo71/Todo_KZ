import { useContext, useState } from "react";
import styles from "./Filter.module.scss";
import { AppContext } from "../App";
function Filter () {
    const {groups, setGroups} = useContext(AppContext);
    const [value, setValue] = useState("All")
    return(
    <div className={styles.box}>
        <select >
            <option value="All" >All</option>
            <option value="Health" >Health</option>
            <option value="Education" >Education</option>
            <option value="Work" >Work</option>
            <option value="Networking" >Networking</option>
        </select>
    </div>
    );
}
export default Filter;