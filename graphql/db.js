let movies = [
    {
        id: 1,
        name: "Black Widow",
        score: 9
    },
    {
        id: 2,
        name: "Cruella",
        score: 8
    },
    {
        id: 3,
        name: "Japan Guy",
        score: 2
    }
];

export const getMovies = () => { return movies };

export const getById = id => {
    const filteredMovie = movies.filter(movie => movie.id === id);
    return filteredMovie[0];
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}

export const deleteMovie = id => {
    const cleanedMovie = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovie.length) {
        movies = cleanedMovie;
        return true;
    } else {
        return false;
    }
}