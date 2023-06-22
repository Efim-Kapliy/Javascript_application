"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (personalMovieDB.count === "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const latestMovies = prompt("Один из последних просмотренных фильмов?", "").trim(),
        ratingMovies = +prompt("На сколько оцените его?", "").trim();

      if (latestMovies !== null && ratingMovies !== null && latestMovies !== "" && ratingMovies !== "" && latestMovies.length < 50) {
        personalMovieDB.movies[latestMovies] = ratingMovies;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function (genres) {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`, "").toLowerCase();

      if (genre === "" || genre == null) {
        console.log("Вы ввели некорректные данные или не ввели их совсем");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }

    personalMovieDB.genres.forEach((element, index) => {
      console.log(`Любимый жанр ${index + 1} — это ${element}`);
    });
  },
};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres(personalMovieDB.genres);
// personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
