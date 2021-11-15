require("./db/connection");
const yargs = require("yargs");
const {
  addMovie,
  deleteMovie,
  updateMovie,
  listMovie,
  searchMovie,
} = require("./movie/movie.methods");

const Movie = require("./movie/movie.model");

const app = () => {
  if (process.argv[2] === "add movie") {
    addMovie({
      title: yargs.argv.title,
      actor: yargs.argv.actor,
    });
  } else if (process.argv[2] === "delete movie") {
    deleteMovie();
  } else if (process.argv[2] === "update movie") {
    updateMovie();
  } else if (process.argv[2] === "list movies") {
    listMovie();
  } else if (process.argv[2] === "search movies") {
    searchMovie();
  } else {
    console.log(
      'Inavild Command - Try: "add movie", "delete movie", "update movie", "list movies" or "search movies"'
    );
  }
};

app();
