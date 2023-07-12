import { useDispatch, useSelector } from "react-redux";
import { getFilterByPlatforms, getFiltersByGenres } from "../../redux/actions";
import styles from "./NavBar.module.css";

export default function  NavBar({
    handleFilterCreated,
    handleSortByName,
    handleSortByRating,
}) {

    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres);
    const platforms = useSelector((state) => state.platforms);

    function handleFilter(funcion, e) {
        dispatch(funcion(e.target.value));
    };

    return (
        <div>
            <aside className={styles.navegation}>
                <select
                className={styles.filter}
                onChange={(e) => {
                    handleSortByName(e);
                }}>
                    <option className={styles.options} selected="false" disabled>
                        Order
                    </option>
                    <option className={styles.options} value="Asc">
                        A-Z
                    </option>
                    <option className={styles.options} value="Desc">
                        Z-A
                    </option>
                </select>
                <select className={styles.filter}
                onChange={(e) => {
                    handleSortByRating(e);
                }}>
                    <option 
                    className={styles.options}
                    selected={true}
                    disabled="disabled"
                    >
                        Rating
                    </option>
                    <option className={styles.options} value="All">
                        All
                    </option>
                    <option className={styles.options} value="High">
                        Higest rating
                    </option>
                    <option className={styles.options} value="Less">
                        Lowest rating
                    </option>
                </select>
                <select 
                name="genres"
                className={styles.filter}
                onChange={(e) => {
                    
                        handleFilter(getFiltersByGenres, e);
                    
                }}
                >
                    <option className={styles.options}
                    selected={true}
                    disabled="disabled" 
                    value="">
                        Choose a genre
                    </option>
                    {genres && genres.map((genre) => (
                        <option
                        className={styles.options}
                        key={genre.id}
                        value={genre.name.toLowerCase()}
                        >
                            {genre.name}
                        </option>
                    ))}
                </select>
                <select 
                className={styles.filter}
                onChange={(e) => {
                    handleFilter(getFilterByPlatforms, e);
                }}
                name="platforms"
                >
                    <option 
                    className={styles.options}
                    selected={true}
                    disabled="disabled"
                    >
                        Choose a platform
                    </option>
                    {platforms && platforms.map((platform) => (
                        <option
                        className={styles.options}
                        key={platform.id}
                        value={platform.id}
                        >
                            {platform.name}
                        </option>
                    ))}
                </select>
                <select
                className={styles.filter}
                onChange={(e) => {
                    handleFilterCreated(e)
                }}
                >
                    <option className={styles.options} value="All">
                        All
                    </option>
                    <option className={styles.options} value="Created">
                        Created
                    </option>
                    <option className={styles.options} value="Api">
                        Existents
                    </option>
                </select>
            </aside>
        </div>
    )
};