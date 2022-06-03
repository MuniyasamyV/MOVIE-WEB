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
function sections(id){ 
  if(id==="section-1"){
    document.getElementById("section-1").style.display="block";
    document.getElementById("section-2").style.display="none";
    document.getElementById("section-3").style.display="none";
    document.getElementById("section-4").style.display="none";
    document.getElementById("section-5").style.display="none";
  }
  else if(id==="section-2"){
    document.getElementById("section-2").style.display="block";
    document.getElementById("section-1").style.display="none";
    document.getElementById("section-3").style.display="none";
    document.getElementById("section-4").style.display="none";
    document.getElementById("section-5").style.display="none";
  }
  else if(id==="section-3"){
    document.getElementById("section-3").style.display="block";
    document.getElementById("section-1").style.display="none";
    document.getElementById("section-2").style.display="none";
    document.getElementById("section-4").style.display="none";
    document.getElementById("section-5").style.display="none";
  }
  else if(id==="section-4"){
    document.getElementById("section-4").style.display="block";
    document.getElementById("section-1").style.display="none";
    document.getElementById("section-2").style.display="none";
    document.getElementById("section-3").style.display="none";
    document.getElementById("section-5").style.display="none";
  }
  else{
    document.getElementById("section-5").style.display="block";
    document.getElementById("section-1").style.display="none";
    document.getElementById("section-2").style.display="none";
    document.getElementById("section-3").style.display="none";
    document.getElementById("section-4").style.display="none";
  }
}

