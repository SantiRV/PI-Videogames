import React from "react";
import { Link } from "react-router-dom";

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
        <li id={id} className="">
            <div className="">
                <img
                src={img || "https://m.media-amazon.com/images/I/611fcGzpVUL.jpg"}
                alt="Not found"
                />
                <div className="">
                    <Link to={`/videogame/${id}`}>
                        <h2 className="">{name}</h2>
                        <p className="">Genres: {genero.join(', ')}</p>
                        <p className="">Rating: {rating}</p>
                        <p className="">Platforms: {plataformas.join(', ')}</p>
                    </Link>
                </div>
            </div>
        </li>
    );
};