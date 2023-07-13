import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    getVideogames,
    filterByGenre,
    filterCreated,
    getGenres,
    orderByName,
    orderByRating,
    getPlatforms,
    resetVideogameDetail
 } from "../../redux/actions/index";
import Videogame from "../videogame/Videogame";
import SearchBar from "../searchBar/SearchBar";
import Header from "../header/Header";
import NavBar from "../navBar/NavBar";
import Pagination from "../pagination/Pagination";
import styles from "./Home.module.css";

export default function Home() {
    
    const dispatch = useDispatch();
    
    const allVideogames = useSelector((state) => state.videogames);
    
    const [currentPage, setCurrentPage] = useState(1);
    
    const [videogamesPerPage, setVideogamesPerPage] = useState(15);
    
    const indexOfLastVideogame = currentPage * videogamesPerPage;
    
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
    
    const currentVideogames = allVideogames.slice(
        indexOfFirstVideogame,
        indexOfLastVideogame
    );
    
    const [order, setOrder] = useState("");

    const pagination = (pagNumber) => {
        setCurrentPage(pagNumber)
    };

    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(filterCreated(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };

    function handleSortByName(e) {
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };

    function handleSortByRating(e) {
        dispatch(orderByRating(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value);
    };

    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
        dispatch(getPlatforms());
        dispatch(resetVideogameDetail());
    }, []);

    return (
        <div>
            <Header title="New and trending" />
            <div>
                <SearchBar />
                <Pagination
                videogamePerPage={videogamesPerPage}
                allVideogames={allVideogames.length}
                pagination={pagination}
                />
                <div className={styles.mainContainer}>
                    <div className={styles.sideBar}>
                        <NavBar
                        handleFilterCreated={handleFilterCreated}
                        handleSortByName={handleSortByName}
                        handleSortByRating={handleSortByRating}
                        />
                    </div>
                    <div>
                        <ul className={styles.videogameGrid}>
                            {currentVideogames && currentVideogames.map((g) => {
                                return (
                                    <Videogame
                                    id={g.id}
                                    name={g.name}
                                    key={g.id}
                                    img={g.img}
                                    genres={g.genres}
                                    rating={g.rating}
                                    platforms={g.platforms}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <Pagination
                videogamePerPage={videogamesPerPage}
                allVideogames={allVideogames.length}
                pagination={pagination}
                />
            </div>
        </div>
    )
};