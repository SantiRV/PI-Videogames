import React from "react";
import { Link } from "react-router-dom"; 
import styles from "../videogame/Videogame.module.css";

export default function videogame({
    name,
    img,
    genres,
    id,
    rating,
    platforms
}) {
    let genero = genres.map((g) => g.name);
    let plataformas = platforms?.map((p) => p.name);

    return (
        <li id={id} className={styles.videogame}>
            <div className={styles.cards}>
                <img
                src={img || "https://m.media-amazon.com/images/I/611fcGzpVUL.jpg"}
                alt="Not found"
                />
                <div className={styles.content}>
                    <Link to={`/videogame/${id}`}>
                        <h2 className={styles.title}>{name}</h2>
                        <p className={styles.genres}>Genres: {genero.join(', ')}</p>
                        <p className={styles.rating}>Rating: {rating}</p>
                        <p className={styles.genres}>Platforms: {plataformas.join(', ')}</p>
                    </Link>
                </div>
            </div>
        </li>
    );
};