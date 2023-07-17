import React from "react"; 
import NavHeader from "./NavHeader";
import styles from "../header/Header.module.css";
import SearchBar from "../searchBar/SearchBar"

export default function Header({title}) {
    return(
        <header className={styles.headerFondo}>    
                <div className={styles.container}>
                    <h1 className={styles.title}>{title}</h1> 
                    <p className={styles.text}>Discover all games</p>
                    <SearchBar />
                    <NavHeader />
                </div>
        </header>
    )
};