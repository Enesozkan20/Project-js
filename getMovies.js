const { showMovies } = require("./app");

export async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data.results);
    showMovies(data.results);
}
