import styles from "./Pagination.module.css";

export default function Pagination({
    videogamePerPage,
    allVideogames,
    pagination
}) {
    const pageNumber =  [];

    for (let i = 1; i <= Math.ceil(allVideogames / videogamePerPage); i++) {
        pageNumber.push(i);
    };

    return (
        <nav className={styles.container}>
            <ul className={styles.pagination}>
                {pageNumber && pageNumber.map((number) =>  (
                    <li key={number} >
                        <a className={styles.number} onClick={() => pagination(number)} >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}