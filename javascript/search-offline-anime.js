window.addEventListener('load', () => console.log("Search Javascript Loaded"));

const movies = [
{
  title: "Kaguya-sama: Love Is War",
  releaseDate: "2019-01-12",
  rating: 8.6,
  banner: "tv-shows/kaguya-sama-love-is-war/poster.webp",
  link: "tv-shows/kaguya-sama-love-is-war/splash1.html"
},

{
  title: "Golden Time",
  releaseDate: "2013-10-03",
  rating: 8.6,
  banner: "tv-shows/golden-time/poster.webp",
  link: "tv-shows/golden-time/splash1.html"
},

{
  title: "Cyberpunk: Edgerunners",
  releaseDate: "2022-09-13",
  rating: 8.5,
  banner: "tv-shows/cyberpunk-edgerunners/poster.webp",
  link: "tv-shows/cyberpunk-edgerunners/splash1.html"
},

{
  title: "To Your Eternity",
  releaseDate: "2021-04-12",
  rating: 8.2,
  banner: "tv-shows/to-your-eternity/poster.webp",
  link: "tv-shows/to-your-eternity/splash1.html"
},

{
  title: "Kaiju No. 8",
  releaseDate: "2024-04-13",
  rating: 8.6,
  banner: "tv-shows/kaiju-no-8/poster.webp",
  link: "tv-shows/kaiju-no-8/splash1.html"
},

{
  title: "Akame ga Kill!",
  releaseDate: "2014-07-07",
  rating: 8.3,
  banner: "tv-shows/akame-ga-kill/poster.webp",
  link: "tv-shows/akame-ga-kill/splash1.html"
},

{
  title: "Plastic Memories",
  releaseDate: "2015-04-05",
  rating: 8.4,
  banner: "tv-shows/plastic-memories/poster.webp",
  link: "tv-shows/plastic-memories/splash1.html"
},

{
  title: "Dan Da Dan",
  releaseDate: "2024-10-04",
  rating: 8.8,
  banner: "tv-shows/dan-da-dan/poster.webp",
  link: "tv-shows/dan-da-dan/splash1.html"
},

{
  title: "Your Lie in April",
  releaseDate: "2014-10-10",
  rating: 8.6,
  banner: "tv-shows/your-lie-in-april/poster.webp",
  link: "tv-shows/your-lie-in-april/splash1.html"
},

{
  title: "ERASED",
  releaseDate: "2016-01-08",
  rating: 8.5,
  banner: "tv-shows/erased/poster.webp",
  link: "tv-shows/erased/splash1.html"
},

{
  title: "Toradora!",
  releaseDate: "2008-10-02",
  rating: 8.3,
  banner: "tv-shows/toradora/poster.webp",
  link: "tv-shows/toradora/splash1.html"
},

{
  title: "Bloom Into You",
  releaseDate: "2018-10-05",
  rating: 7.5,
  banner: "tv-shows/bloom-into-you/poster.webp",
  link: "tv-shows/bloom-into-you/splash1.html"
},

{
  title: "AnoHana: The Flower We Saw That Day",
  releaseDate: "2011-04-15",
  rating: 8.3,
  banner: "tv-shows/anohana-the-flower-we-saw-that-day/poster.webp",
  link: "tv-shows/anohana-the-flower-we-saw-that-day/splash1.html"
},

{
  title: "Elfen Lied",
  releaseDate: "2004-07-25",
  rating: 8.3,
  banner: "tv-shows/elfen-lied/poster.webp",
  link: "tv-shows/elfen-lied/splash1.html"
},

{
  title: "More Than a Married Couple, But Not Lovers",
  releaseDate: "2022-10-09",
  rating: 7.4,
  banner: "tv-shows/more-than-a-married-couple-but-not-lovers/poster.webp",
  link: "tv-shows/more-than-a-married-couple-but-not-lovers/splash1.html"
},

{
  title: "A Silent Voice The Movie",
  releaseDate: "2016-09-17",
  rating: 8.1,
  banner: "movies/a-silent-voice-the-movie/content/poster.webp",
  link: "movies/a-silent-voice-the-movie/splash.html"
},

{
  title: "aaaaaaaainvnqeriqeijnidakj cwqd9-134-iuf13-iu13n-ifu13n4f-iun13i4nf1i3nf",
  releaseDate: "2030-10-11",
  rating: 10.1,
  banner: "images/show-more.webp",
  link: "#*"
}
];

let moviesPerPage = 36; // Number of movies to display per page
let currentPage = 1; // Current page number
const movieGrid = document.querySelector(".movie-grid");
const searchInput = document.querySelector("input[type='text']");
const sortSelect = document.querySelector("#sort");


// Sort movies alphabetically with numbers at the end
function sortMoviesAlphabetically() {
  movies.sort((a, b) => {
    if (isNumberStart(a.title) && !isNumberStart(b.title)) {
      return 1; // b comes before a
    } else if (!isNumberStart(a.title) && isNumberStart(b.title)) {
      return -1; // a comes before b
    } else {
      return a.title.localeCompare(b.title); // Sort alphabetically
    }
  });
}

// Check if a string starts with a number
function isNumberStart(title) {
  return /^\d/.test(title);
}

function displayMovies(movies, page) {
  movieGrid.innerHTML = "";
  const startIndex = (page - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  // Find the movie you want to display last
  const movieToDisplayLast = movies.find(movie => movie.title === "aaaaaaaainvnqeriqeijnidakj cwqd9-134-iuf13-iu13n-ifu13n4f-iun13i4nf1i3nf");

  // Create a new array without the movie to be displayed last
  const moviesWithoutLast = movies.filter(movie => movie !== movieToDisplayLast);

  const modifiedMovies = moviesWithoutLast.slice(startIndex, endIndex - 1); // Display all but the last movie
  modifiedMovies.push(movieToDisplayLast); // Add the chosen movie as the last one

  modifiedMovies.forEach(movie => {
    const movieBanner = document.createElement("a");
    movieBanner.href = movie.link;
    movieBanner.classList.add("movie-banner");
    movieBanner.style.backgroundImage = `url(${movie.banner})`;

    if (movie === movieToDisplayLast) {
      movieBanner.id = "loadMore"; // Set the id for the chosen movie
      movieBanner.addEventListener("click", () => {
        // Handle the "loadMore" click event here
        moviesPerPage += 18;
        console.log("18 more movies loaded");
        displayMovies(movies, currentPage);
      });
    }

    movieGrid.appendChild(movieBanner);
  });
}



function sortMovies(sortBy) {
  switch (sortBy) {
    case "title":
      sortMoviesAlphabetically();
      break;
    case "year":
      movies.sort((a, b) => {
        const dateA = new Date(a.releaseDate);
        const dateB = new Date(b.releaseDate);

        if (dateA.getTime() === dateB.getTime()) {
          return a.title.localeCompare(b.title);
        } else {
          return dateB.getTime() - dateA.getTime();
        }
      });
      break;
    case "release_date":
      movies.sort((a, b) => {
        const dateA = new Date(a.releaseDate);
        const dateB = new Date(b.releaseDate);

        if (dateA.getTime() === dateB.getTime()) {
          return a.title.localeCompare(b.title);
        } else {
          return dateB.getTime() - dateA.getTime();
        }
      });
      break;
    case "rating":
      movies.sort((a, b) => {
        if (a.rating === b.rating) {
          return a.title.localeCompare(b.title);
        } else {
          return b.rating - a.rating;
        }
      });
      break;
    default:
      break;
  }
  displayMovies(movies, currentPage);
}


sortSelect.addEventListener("change", (event) => {
  const selectedSortOption = event.target.value;
  sortMovies(selectedSortOption); // Call the sorting function with the selected option
  filterMovies(searchInput.value); // Reapply the filter based on the current search term
});

function filterMovies(searchTerm) {
  const filteredMovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  displayMovies(filteredMovies, currentPage); // Display filtered movies on the current page
}

function initializePage() {
  sortMovies("release_date");
  displayMovies(movies, currentPage);
  filterMovies("");
}

window.addEventListener('load', initializePage);

searchInput.addEventListener("input", () => {
  filterMovies(searchInput.value);
});

sortSelect.addEventListener("change", () => {
  sortMovies(sortSelect.value);
});


