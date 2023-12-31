import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetFilters } from "../../redux/actions/index"; 
import styles from "../header/NavHeader.module.css";

export default function NavHeader() {
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();
        dispatch(resetFilters());
    };

    return (
        <div className={styles.navBarHead}>
            <nav className={styles.navHeader}>
                <Link className={styles.navLink} to="/Createvideogame">
                    Create your own videogame
                </Link>
                <button
                className={styles.button}
                onClick={(e) => {
                    handleClick(e);
                }}
                >
                    Reload videogames
                </button>
            </nav>
        </div>
    )
};