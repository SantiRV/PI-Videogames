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
            <nav className={styles.pagination}>
                {pageNumber && pageNumber.map((number, index) =>  {
                   return (
                    <div key={index} className={styles.item}>
                        <button className={styles.button} onClick={() => pagination(number)}>
                            {number}
                        </button>
                    </div>
                   )
                   })}
            </nav>
        </nav>
    )
}