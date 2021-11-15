const yargs = require("yargs");
const Movie = require("./movie.model");
const Actor = require("../actor/actor.model");

const addMovie = async (movieObj) => {
  try {
    await Movie.sync();
    await Actor.sync();
    const actor = await Actor.findOrCreate({
      where: {
        actorName: movieObj.actor,
      },
    });

    movieObj.actor = actor[0].dataValues.actorID;
    await Movie.create(movieObj);

    console.log(movieObj);
  } catch (err) {
    console.error(error);
  }
};

const deleteMovie = async () => {
  try {
    await Movie.destroy({ where: { title: yargs.argv.title } });
    console.log("Specified Movie deleted from the database!");
  } catch (error) {
    console.log(error);
  }
};

const updateMovie = async () => {
  try {
    await Movie.update(
      { actor: yargs.argv.actor },
      {
        where: {
          title: yargs.argv.title,
        },
      }
    );
    console.log("Movie updated!");
  } catch (error) {
    console.log(error);
  }
};

const listMovie = async () => {
  try {
    const allMovies = await Movie.findAll();
    console.log(allMovies.every((allMovies) => allMovies instanceof Movie));
    console.log("All Movies:", JSON.stringify(allMovies, null, 2));
  } catch (error) {
    console.log(error);
  }
};

const searchMovie = async () => {
  try {
    const searchResults = await Movie.findOne({
      where: { title: yargs.argv.title },
    });
    if (searchResults === null) {
      console.log("No results found!");
    } else {
      console.log(searchResults);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addMovie, deleteMovie, updateMovie, listMovie, searchMovie };

// const addMovie = async (movieObj) => {
//     try {
//       const actor = await Actor.findOne({ where: { name: movieObj.actor } });
//       movieObj.actor = actor.id;
//         await Movie.create(movieObj);

//       await Movie.sync();
//         await Movie.create(movieObj);

//       console.log("Movie added to the database!");
//     } catch (error) {
//       console.log(error);
//     }
//   };
