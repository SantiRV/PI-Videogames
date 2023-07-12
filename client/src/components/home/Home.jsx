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
    resetVidogameDetail
 } from "../../redux/actions/index";
import Videogame from "../videogame/Videogame";
import SearchBar from "../searchBar/SearchBar";
import Header from "../header/Header";
import NavBar from "../navBar/NavBar";
import Pagination from "../pagination/Pagination";