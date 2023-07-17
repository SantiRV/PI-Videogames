import axios from 'axios';
import {
    FILTER_BY_GENRE,
    FILTER_BY_PLATFORM,
    RESET_DETAILS,
    RESET_FILTERS,
} from './constants';

//Me  traigo los games del back
export function getVideogames() {
    return async function (dispatch) {
        let videogamesData = await axios.get('https://pi-videogames-amber-zeta.vercel.app/videogame', {}
        );
        return dispatch({
            type: "GET_VIDEOGAMES",
            payload: videogamesData.data,
        }); 
    };
};

export function getNameVideogame(name) {
    return async function (dispatch) {
        try {
            let nameData = await axios.get('https://pi-videogames-amber-zeta.vercel.app/videogame?name=' + name);
            return dispatch({
                type: "GET_NAME_VIDEOGAME",
                payload: nameData.data,
            });
        } catch (error) {
            alert("Videogame name Not Found")
        };
    };
};

export function getVideogameDetail(id) {
    return async function (dispatch) {
        const response = await axios.get(`https://pi-videogames-amber-zeta.vercel.app/videogame/${id}`);
        dispatch({
            type: "GET_VIDEOGAME_DETAIL",
            payload: response.data
        });
    };
};

export function getGenres() {
    return async function (dispatch) {
        let genres = await axios.get('https://pi-videogames-amber-zeta.vercel.app/genre');
        return dispatch({
            type: "GET_GENRES",
            payload: genres.data,
        });
    };
};

export function postVideogames(payload) {
    return async function (dispatch) {
        const data = await axios.get('https://pi-videogames-amber-zeta.vercel.app/videogame', payload);
        return data
    };
};

export function resetFilters(payload) {
    return {
        type: RESET_FILTERS,
        payload,
    };
};

export function resetVideogameDetail(payload) {
    return {
        type: RESET_DETAILS,
        payload,
    };
};

export function filterCreated(payload) {
    return {
        type: "FILTER_CREATED",
        payload,
    };
};

export function orderByName(payload) {
    return {
        type: "ORDER_BY_NAME",
        payload,
    };
};

export function orderByRating(payload) {
    return {
        type: "ORDER_BY_RATING",
        payload,
    };
};

export function getPlatforms() {
    return async function (dispatch) {
        const json = await axios.get('https://pi-videogames-amber-zeta.vercel.app/platforms');
        return dispatch({
            type: "GET_PLATFORMS",
            payload: json.data
        });
    };
};

export function getFilterByPlatforms(id) {
    return async function (dispatch) {
        const platformData = await axios.get(`https://pi-videogames-amber-zeta.vercel.app/platforms/${id}`);
        return dispatch({
            type: FILTER_BY_PLATFORM,
            payload: platformData.data
        });
    };
};

export function getFiltersByGenres(name) {
    return async function (dispatch) {
        const genreData = await axios.get(`https://pi-videogames-amber-zeta.vercel.app/genre/${name}`);
        return dispatch({
            type: FILTER_BY_GENRE,
            payload: genreData.data
        });
    };
};