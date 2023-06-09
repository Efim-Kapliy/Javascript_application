const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
for (let i = 0; i < 2; i++) {
  const latestMovies = prompt("Один из последних просмотренных фильмов?", ""),
    ratingMovies = +prompt("На сколько оцените его?", "");
  if (latestMovies !== null && ratingMovies !== null && latestMovies !== "" && ratingMovies !== "" && latestMovies.length < 50) {
    personalMovieDB.movies[latestMovies] = ratingMovies;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);
