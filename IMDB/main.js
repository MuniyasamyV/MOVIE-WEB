var API_KEY = "3a37651c";
var searchBoxElement = document.getElementById("searchBox");
var movieNameElement = document.getElementById("movie_name");
var movieImgElement = document.getElementById("movie_image");
var movieImdbElement = document.getElementById("imdb_rate");
var movieTimeElement = document.getElementById("Time_movie");
var movieReleasedElement = document.getElementById("Release");
var movieAboutElement = document.getElementById("Description");

var getMovieUrlByID = function (movieID) {
  return `http://www.omdbapi.com/?i=${movieID}&apikey=${API_KEY}`;
};

var getMovieUrlByName = function (movieName) {
  return `http://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`;
};
async function fetchMovie(type, data) {
  try {
    var url = type == "id" ? getMovieUrlByID(data) : getMovieUrlByName(data);
    var movieFetchObject = await fetch(url);
    var movieData = await movieFetchObject.json();
    return movieData;
  } catch (e) {
    console.log("error in fetch the movie");
  }
}

function mySearch() {
  const searchBoxElement = document.getElementById("searchBox").value;
  fetchMovie("name", searchBoxElement).then(function (movieData) {
    console.log("got movie data", movieData);
    movieNameElement.innerText = movieData.Title;
    movieImgElement.setAttribute("src", movieData.Poster);
    movieImdbElement.innerText = movieData.imdbRating;
    movieTimeElement.innerText = movieData.Runtime;
    movieReleasedElement.innerText = movieData.Year;
    movieAboutElement.innerText = movieData.Plot;
  });
}


