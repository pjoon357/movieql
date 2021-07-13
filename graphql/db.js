import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    let REQUEST_API = API_URL;
    if (limit > 0) {
        REQUEST_API += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_API += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_API)
        .then(res => res.json())
        .then(json => json.data.movies);
};
