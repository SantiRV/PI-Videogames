import {
    FILTER_BY_GENRE,
    FILTER_BY_PLATFORM,
    RESET_DETAILS,
    RESET_FILTERS   
} from "../actions/constants";

const initialState = {
    videogames: [],
    allVideogames: [],
    platforms: [],
    videogameDetail: [],
    genres: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_VIDEOGAMES":
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload,
            };
        case RESET_FILTERS:
            return {
                ...state,
                videogames: state.allVideogames,
            };
        case RESET_DETAILS:
            return {
                ...state,
                videogameDetail: [],
            };
        case "GET_GENRES":
            return {
                ...state,
                genres: action.payload,
            };
        case "GET_PLATFORMS":
            return {
                ...state,
                platforms: action.payload,
            };
        case "POST_VIDEOGAME": {
            return {
                ...state,
            };
        };
        case FILTER_BY_PLATFORM:
            return {
                ...state,
                videogames: action.payload,
            };
        case FILTER_BY_GENRE:
            return {
                ...state,
                videogames: action.payload
            };
        case "FILTER_CREATED":
            const createdFilter =
            action.payload === "Created" ?
            state.allVideogames.filter((v) => v.id.length > 10) :
            state.allVideogames.filter((v) => v.id.toString().length < 6);

            return {
                ...state,
                videogames: action.payload === "All" ? 
                state.allVideogames : createdFilter,
            };
        case "GET_NAME_VIDEOGAME":
            return {
                ...state,
                videogames: action.payload,
            };
        case "GET_VIDEOGAME_DETAIL":
            return {
                ...state,
                videogameDetail: action.payload,
            };
        case "ORDER_BY_NAME":
            let arraySort = 
            action.payload === 'Asc' ?
            state.videogames.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;
            }) :
            state.videogames.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                videogames: arraySort,
            };
        case "ORDER_BY_RATING":
            let arraySortS = 
            action.payload === 'Less' ?
            state.videogames.sort(function (a, b) {
                if (a.rating > b.rating) {
                    return 1;
                }
                if (b.rating > a.rating) {
                    return -1;
                }
                return 0;
            }) :
            state.videogames.sort(function (a, b) {
                if (a.rating > b.rating) {
                    return -1;
                }
                if (b.rating > a.rating) {
                    return 1;
                }
                return 0;
            });
            return {
                ...state,
                videogames: action.payload === "All" ?
                state.videogames :
                arraySortS
            };
        default:
            return state;
    };
};

export default rootReducer;