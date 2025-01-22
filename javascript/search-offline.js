window.addEventListener('load', () => console.log("Search Javascript Loaded"));

const movies = [
{
  title: "Atlantis The Lost Empire",
  releaseDate: "2001-06-02",
  rating: 7.0,
  banner: "movies/atlantis-the-lost-empire/content/poster-mid.webp",
  link: "movies/atlantis-the-lost-empire/splash.html"
},

{
  title: "John Wick Chapter 4",
  releaseDate: "2023-03-22",
  rating: 7.7,
  banner: "movies/john-wick-chapter-4/content/poster-mid.webp",
  link: "movies/john-wick-chapter-4/splash.html"
},

{
  title: "John Wick Chapter 3 - Parabellum",
  releaseDate: "2019-05-15",
  rating: 7.4,
  banner: "movies/john-wick-chapter-3---parabellum/content/poster-mid.webp",
  link: "movies/john-wick-chapter-3---parabellum/splash.html"
},

{
  title: "John Wick Chapter 2",
  releaseDate: "2017-02-08",
  rating: 7.3,
  banner: "movies/john-wick-chapter-2/content/poster-mid.webp",
  link: "movies/john-wick-chapter-2/splash.html"
},

{
  title: "John Wick",
  releaseDate: "2014-10-22",
  rating: 7.4,
  banner: "movies/john-wick/content/poster-mid.webp",
  link: "movies/john-wick/splash.html"
},

{
  title: "Sonic the Hedgehog 3",
  releaseDate: "2024-12-19",
  rating: 7.6,
  banner: "movies/sonic-the-hedgehog-3/content/poster-mid.webp",
  link: "movies/sonic-the-hedgehog-3/splash.html"
},

{
  title: "Sonic the Hedgehog 2",
  releaseDate: "2022-03-30",
  rating: 7.5,
  banner: "movies/sonic-the-hedgehog-2/content/poster-mid.webp",
  link: "movies/sonic-the-hedgehog-2/splash.html"
},

{
  title: "Sonic the Hedgehog",
  releaseDate: "2020-02-12",
  rating: 7.3,
  banner: "movies/sonic-the-hedgehog/content/poster-mid.webp",
  link: "movies/sonic-the-hedgehog/splash.html"
},

{
  title: "Flow",
  releaseDate: "2024-08-29",
  rating: 8.4,
  banner: "movies/flow/content/poster-mid.webp",
  link: "movies/flow/splash.html"
},

{
  title: "Barbie",
  releaseDate: "2023-07-19",
  rating: 7.0,
  banner: "movies/barbie/content/poster-mid.webp",
  link: "movies/barbie/splash.html"
},

{
  title: "Reacher",
  releaseDate: "2022-02-03",
  rating: 8.1,
  banner: "tv-shows/reacher/poster-mid.webp",
  link: "tv-shows/reacher/splash1.html"
},

{
  title: "Oppenheimer",
  releaseDate: "2023-07-19",
  rating: 8.1,
  banner: "movies/oppenheimer/content/poster-mid.webp",
  link: "movies/oppenheimer/splash.html"
},

{
  title: "Forrest Gump",
  releaseDate: "1994-06-23",
  rating: 8.5,
  banner: "movies/forrest-gump/content/poster-mid.webp",
  link: "movies/forrest-gump/splash.html"
},

{
  title: "The Truman Show",
  releaseDate: "1998-06-04",
  rating: 8.1,
  banner: "movies/the-truman-show/content/poster-mid.webp",
  link: "movies/the-truman-show/splash.html"
},

{
  title: "Star Wars: Skeleton Crew",
  releaseDate: "2024-12-02",
  rating: 7.1,
  banner: "tv-shows/star-wars-skeleton-crew/poster-mid.webp",
  link: "tv-shows/star-wars-skeleton-crew/splash1.html"
},

{
  title: "The Wolf of Wall Street",
  releaseDate: "2013-12-25",
  rating: 8.0,
  banner: "movies/the-wolf-of-wall-street/content/poster-mid.webp",
  link: "movies/the-wolf-of-wall-street/splash.html"
},

{
  title: "The Majestic",
  releaseDate: "2001-12-21",
  rating: 6.8,
  banner: "movies/the-majestic/content/poster-mid.webp",
  link: "movies/the-majestic/splash.html"
},

{
  title: "Fight Club",
  releaseDate: "1999-10-15",
  rating: 8.4,
  banner: "movies/fight-club/content/poster-mid.webp",
  link: "movies/fight-club/splash.html"
},

{
  title: "La La Land",
  releaseDate: "2016-12-01",
  rating: 7.9,
  banner: "movies/la-la-land/content/poster-mid.webp",
  link: "movies/la-la-land/splash.html"
},

{
  title: "The Matrix Reloaded",
  releaseDate: "2003-05-15",
  rating: 7.1,
  banner: "movies/the-matrix-reloaded/content/poster-mid.webp",
  link: "movies/the-matrix-reloaded/splash.html"
},

{
  title: "The Matrix Revolutions",
  releaseDate: "2003-11-05",
  rating: 6.7,
  banner: "movies/the-matrix-revolutions/content/poster-mid.webp",
  link: "movies/the-matrix-revolutions/splash.html"
},

{
  title: "Saving Private Ryan",
  releaseDate: "1998-07-24",
  rating: 8.2,
  banner: "movies/saving-private-ryan/content/poster-mid.webp",
  link: "movies/saving-private-ryan/splash.html"
},

{
  title: "The Matrix",
  releaseDate: "1999-03-31",
  rating: 8.2,
  banner: "movies/the-matrix/content/poster-mid.webp",
  link: "movies/the-matrix/splash.html"
},

{
  title: "Back to the Future Part III",
  releaseDate: "1990-05-25",
  rating: 7.5,
  banner: "movies/back-to-the-future-part-iii/content/poster-mid.webp",
  link: "movies/back-to-the-future-part-iii/splash.html"
},

{
  title: "Back to the Future Part II",
  releaseDate: "1989-11-22",
  rating: 7.8,
  banner: "movies/back-to-the-future-part-ii/content/poster-mid.webp",
  link: "movies/back-to-the-future-part-ii/splash.html"
},

{
  title: "Back to the Future",
  releaseDate: "1985-07-03",
  rating: 8.3,
  banner: "movies/back-to-the-future/content/poster-mid.webp",
  link: "movies/back-to-the-future/splash.html"
},

{
  title: "Spirited Away",
  releaseDate: "2001-07-20",
  rating: 8.5,
  banner: "movies/spirited-away/content/poster-mid.webp",
  link: "movies/spirited-away/splash.html"
},

{
  title: "Django Unchained",
  releaseDate: "2012-12-25",
  rating: 8.2,
  banner: "movies/django-unchained/content/poster-mid.webp",
  link: "movies/django-unchained/splash.html"
},

{
  title: "WALL·E",
  releaseDate: "2008-06-22",
  rating: 8.1,
  banner: "movies/wall·e/content/poster-mid.webp",
  link: "movies/wall·e/splash.html"
},

{
  title: "Whiplash",
  releaseDate: "2014-10-10",
  rating: 8.4,
  banner: "movies/whiplash/content/poster-mid.webp",
  link: "movies/whiplash/splash.html"
},

{
  title: "The Shawshank Redemption",
  releaseDate: "1994-09-23",
  rating: 8.7,
  banner: "movies/the-shawshank-redemption/content/poster-mid.webp",
  link: "movies/the-shawshank-redemption/splash.html"
},

{
  title: "Interstellar",
  releaseDate: "2014-11-05",
  rating: 8.4,
  banner: "movies/interstellar/content/poster-mid.webp",
  link: "movies/interstellar/splash.html"
},

{
  title: "Trading Places",
  releaseDate: "1983-06-07",
  rating: 7.2,
  banner: "movies/trading-places/content/poster-mid.webp",
  link: "movies/trading-places/splash.html"
},

{
  title: "Gladiator",
  releaseDate: "2000-05-04",
  rating: 8.2,
  banner: "movies/gladiator/content/poster-mid.webp",
  link: "movies/gladiator/splash.html"
},

{
  title: "(500) Days of Summer",
  releaseDate: "2009-07-17",
  rating: 7.3,
  banner: "movies/500-days-of-summer/content/poster-mid.webp",
  link: "movies/500-days-of-summer/splash.html"
},

{
  title: "The Unbearable Weight of Massive Talent",
  releaseDate: "2022-04-20",
  rating: 6.8,
  banner: "movies/the-unbearable-weight-of-massive-talent/content/poster-mid.webp",
  link: "movies/the-unbearable-weight-of-massive-talent/splash.html"
},

{
  title: "End of Watch",
  releaseDate: "2012-09-20",
  rating: 7.3,
  banner: "movies/end-of-watch/content/poster-mid.webp",
  link: "movies/end-of-watch/splash.html"
},

{
  title: "Snakes on a Plane",
  releaseDate: "2006-08-17",
  rating: 5.4,
  banner: "movies/snakes-on-a-plane/content/poster-mid.webp",
  link: "movies/snakes-on-a-plane/splash.html"
},

{
  title: "The Iron Giant",
  releaseDate: "1999-08-06",
  rating: 7.9,
  banner: "movies/the-iron-giant/content/poster-mid.webp",
  link: "movies/the-iron-giant/splash.html"
},

{
  title: "Ice Age Continental Drift",
  releaseDate: "2012-06-27",
  rating: 6.4,
  banner: "movies/ice-age-continental-drift/content/poster-mid.webp",
  link: "movies/ice-age-continental-drift/splash.html"
},

{
  title: "Ice Age Collision Course",
  releaseDate: "2016-06-23",
  rating: 6.1,
  banner: "movies/ice-age-collision-course/content/poster-mid.webp",
  link: "movies/ice-age-collision-course/splash.html"
},

{
  title: "Ice Age Dawn of the Dinosaurs",
  releaseDate: "2009-06-26",
  rating: 6.8,
  banner: "movies/ice-age-dawn-of-the-dinosaurs/content/poster-mid.webp",
  link: "movies/ice-age-dawn-of-the-dinosaurs/splash.html"
},

{
  title: "Ice Age The Meltdown",
  releaseDate: "2006-03-29",
  rating: 6.7,
  banner: "movies/ice-age-the-meltdown/content/poster-mid.webp",
  link: "movies/ice-age-the-meltdown/splash.html"
},

{
  title: "Ice Age",
  releaseDate: "2002-03-10",
  rating: 7.4,
  banner: "movies/ice-age/content/poster-mid.webp",
  link: "movies/ice-age/splash.html"
},

{
  title: "The Santa Clause",
  releaseDate: "1994-11-11",
  rating: 6.5,
  banner: "movies/the-santa-clause/content/poster-mid.webp",
  link: "movies/the-santa-clause/splash.html"
},

{
  title: "13 Hours The Secret Soldiers of Benghazi",
  releaseDate: "2016-01-14",
  rating: 7.3,
  banner: "movies/13-hours-the-secret-soldiers-of-benghazi/content/poster-mid.webp",
  link: "movies/13-hours-the-secret-soldiers-of-benghazi/splash.html"
},

{
  title: "Penguins of Madagascar",
  releaseDate: "2014-11-22",
  rating: 6.5,
  banner: "movies/penguins-of-madagascar/content/poster-mid.webp",
  link: "movies/penguins-of-madagascar/splash.html"
},

{
  title: "Hacksaw Ridge",
  releaseDate: "2016-10-07",
  rating: 8.2,
  banner: "movies/hacksaw-ridge/content/poster-mid.webp",
  link: "movies/hacksaw-ridge/splash.html"
},

{
  title: "Inception",
  releaseDate: "2010-07-15",
  rating: 8.4,
  banner: "movies/inception/content/poster-mid.webp",
  link: "movies/inception/splash.html"
},

{
  title: "The Book of Life",
  releaseDate: "2014-10-01",
  rating: 7.5,
  banner: "movies/the-book-of-life/content/poster-mid.webp",
  link: "movies/the-book-of-life/splash.html"
},

{
  title: "Shooter",
  releaseDate: "2007-03-22",
  rating: 7.1,
  banner: "movies/shooter/content/poster-mid.webp",
  link: "movies/shooter/splash.html"
},

{
  title: "Pirates of the Caribbean Dead Men Tell No Tales",
  releaseDate: "2017-05-23",
  rating: 6.7,
  banner: "movies/pirates-of-the-caribbean-dead-men-tell-no-tales/content/poster-mid.webp",
  link: "movies/pirates-of-the-caribbean-dead-men-tell-no-tales/splash.html"
},

{
  title: "Pirates of the Caribbean On Stranger Tides",
  releaseDate: "2011-05-15",
  rating: 6.6,
  banner: "movies/pirates-of-the-caribbean-on-stranger-tides/content/poster-mid.webp",
  link: "movies/pirates-of-the-caribbean-on-stranger-tides/splash.html"
},

{
  title: "Pirates of the Caribbean At Worlds End",
  releaseDate: "2007-05-19",
  rating: 7.3,
  banner: "movies/pirates-of-the-caribbean-at-worlds-end/content/poster-mid.webp",
  link: "movies/pirates-of-the-caribbean-at-worlds-end/splash.html"
},

{
  title: "Pirates of the Caribbean Dead Mans Chest",
  releaseDate: "2006-07-06",
  rating: 7.4,
  banner: "movies/pirates-of-the-caribbean-dead-mans-chest/content/poster-mid.webp",
  link: "movies/pirates-of-the-caribbean-dead-mans-chest/splash.html"
},

{
  title: "Pirates of the Caribbean The Curse of the Black Pearl",
  releaseDate: "2003-07-09",
  rating: 7.8,
  banner: "movies/pirates-of-the-caribbean-the-curse-of-the-black-pearl/content/poster-mid.webp",
  link: "movies/pirates-of-the-caribbean-the-curse-of-the-black-pearl/splash.html"
},

{
  title: "The Dark Knight Rises",
  releaseDate: "2012-07-17",
  rating: 7.8,
  banner: "movies/the-dark-knight-rises/content/poster-mid.webp",
  link: "movies/the-dark-knight-rises/splash.html"
},

{
  title: "Batman Begins",
  releaseDate: "2005-06-10",
  rating: 7.7,
  banner: "movies/batman-begins/content/poster-mid.webp",
  link: "movies/batman-begins/splash.html"
},

{
  title: "The Dark Knight",
  releaseDate: "2008-07-16",
  rating: 8.5,
  banner: "movies/the-dark-knight/content/poster-mid.webp",
  link: "movies/the-dark-knight/splash.html"
},

{
  title: "The Batman",
  releaseDate: "2022-03-01",
  rating: 7.7,
  banner: "movies/the-batman/content/poster-mid.webp",
  link: "movies/the-batman/splash.html"
},

{
  title: "Return of the Jedi",
  releaseDate: "1983-05-25",
  rating: 7.9,
  banner: "movies/return-of-the-jedi/content/poster-mid.webp",
  link: "movies/return-of-the-jedi/splash.html"
},

{
  title: "The Empire Strikes Back",
  releaseDate: "1980-05-20",
  rating: 8.4,
  banner: "movies/the-empire-strikes-back/content/poster-mid.webp",
  link: "movies/the-empire-strikes-back/splash.html"
},

{
  title: "Star Wars",
  releaseDate: "1977-05-25",
  rating: 8.2,
  banner: "movies/star-wars/content/poster-mid.webp",
  link: "movies/star-wars/splash.html"
},

{
  title: "Rogue One A Star Wars Story",
  releaseDate: "2016-12-14",
  rating: 7.5,
  banner: "movies/rogue-one-a-star-wars-story/content/poster-mid.webp",
  link: "movies/rogue-one-a-star-wars-story/splash.html"
},

{
  title: "Star Wars Episode III - Revenge of the Sith",
  releaseDate: "2005-05-17",
  rating: 7.4,
  banner: "movies/star-wars-episode-iii---revenge-of-the-sith/content/poster-mid.webp",
  link: "movies/star-wars-episode-iii---revenge-of-the-sith/splash.html"
},

{
  title: "Star Wars Episode II - Attack of the Clones",
  releaseDate: "2002-05-15",
  rating: 6.6,
  banner: "movies/star-wars-episode-ii---attack-of-the-clones/content/poster-mid.webp",
  link: "movies/star-wars-episode-ii---attack-of-the-clones/splash.html"
},

{
  title: "Star Wars Episode I - The Phantom Menace",
  releaseDate: "1999-05-19",
  rating: 6.6,
  banner: "movies/star-wars-episode-i---the-phantom-menace/content/poster-mid.webp",
  link: "movies/star-wars-episode-i---the-phantom-menace/splash.html"
},

{
  title: "Field of Dreams",
  releaseDate: "1989-04-21",
  rating: 7.1,
  banner: "movies/field-of-dreams/content/poster-mid.webp",
  link: "movies/field-of-dreams/splash.html"
},

{
  title: "All Dogs Go to Heaven",
  releaseDate: "1989-11-17",
  rating: 6.8,
  banner: "movies/all-dogs-go-to-heaven/content/poster-mid.webp",
  link: "movies/all-dogs-go-to-heaven/splash.html"
},

{
  title: "The Terminal",
  releaseDate: "2004-06-17",
  rating: 7.3,
  banner: "movies/the-terminal/content/poster-mid.webp",
  link: "movies/the-terminal/splash.html"
},

{
  title: "Transformers One",
  releaseDate: "2024-09-11",
  rating: 8.1,
  banner: "movies/transformers-one/content/poster-mid.webp",
  link: "movies/transformers-one/splash.html"
},

{
  title: "Transformers Rise of the Beasts",
  releaseDate: "2023-06-06",
  rating: 7.3,
  banner: "movies/transformers-rise-of-the-beasts/content/poster-mid.webp",
  link: "movies/transformers-rise-of-the-beasts/splash.html"
},

{
  title: "Transformers The Last Knight",
  releaseDate: "2017-06-16",
  rating: 6.1,
  banner: "movies/transformers-the-last-knight/content/poster-mid.webp",
  link: "movies/transformers-the-last-knight/splash.html"
},

{
  title: "Transformers Age of Extinction",
  releaseDate: "2014-06-25",
  rating: 5.9,
  banner: "movies/transformers-age-of-extinction/content/poster-mid.webp",
  link: "movies/transformers-age-of-extinction/splash.html"
},

{
  title: "Transformers Dark of the Moon",
  releaseDate: "2011-06-28",
  rating: 6.2,
  banner: "movies/transformers-dark-of-the-moon/content/poster-mid.webp",
  link: "movies/transformers-dark-of-the-moon/splash.html"
},

{
  title: "Transformers Revenge of the Fallen",
  releaseDate: "2009-06-19",
  rating: 6.2,
  banner: "movies/transformers-revenge-of-the-fallen/content/poster-mid.webp",
  link: "movies/transformers-revenge-of-the-fallen/splash.html"
},

{
  title: "Transformers",
  releaseDate: "2007-06-27",
  rating: 6.8,
  banner: "movies/transformers/content/poster-mid.webp",
  link: "movies/transformers/splash.html"
},

{
  title: "Avengers Endgame",
  releaseDate: "2019-04-24",
  rating: 8.2,
  banner: "movies/avengers-endgame/content/poster-mid.webp",
  link: "movies/avengers-endgame/splash.html"
},

{
  title: "Avengers Infinity War",
  releaseDate: "2018-04-25",
  rating: 8.2,
  banner: "movies/avengers-infinity-war/content/poster-mid.webp",
  link: "movies/avengers-infinity-war/splash.html"
},

{
  title: "Avengers Age of Ultron",
  releaseDate: "2015-04-22",
  rating: 7.3,
  banner: "movies/avengers-age-of-ultron/content/poster-mid.webp",
  link: "movies/avengers-age-of-ultron/splash.html"
},

{
  title: "The Avengers",
  releaseDate: "2012-04-25",
  rating: 7.7,
  banner: "movies/the-avengers/content/poster-mid.webp",
  link: "movies/the-avengers/splash.html"
},

{
  title: "Lone Survivor",
  releaseDate: "2013-12-24",
  rating: 7.4,
  banner: "movies/lone-survivor/content/poster-mid.webp",
  link: "movies/lone-survivor/splash.html"
},

{
  title: "Jurassic Park",
  releaseDate: "1993-06-11",
  rating: 8.0,
  banner: "movies/jurassic-park/content/poster-mid.webp",
  link: "movies/jurassic-park/splash.html"
},

{
  title: "Real Steel",
  releaseDate: "2011-09-28",
  rating: 7.0,
  banner: "movies/real-steel/content/poster-mid.webp",
  link: "movies/real-steel/splash.html"
},

{
  title: "Blade Runner 2049",
  releaseDate: "2017-10-04",
  rating: 7.6,
  banner: "movies/blade-runner-2049/content/poster-mid.webp",
  link: "movies/blade-runner-2049/splash.html"
},

{
  title: "Tarzan",
  releaseDate: "1999-06-18",
  rating: 7.4,
  banner: "movies/tarzan/content/poster-mid.webp",
  link: "movies/tarzan/splash.html"
},

{
  title: "Toy Story 4",
  releaseDate: "2019-06-19",
  rating: 7.5,
  banner: "movies/toy-story-4/content/poster-mid.webp",
  link: "movies/toy-story-4/splash.html"
},

{
  title: "Toy Story 3",
  releaseDate: "2010-06-16",
  rating: 7.8,
  banner: "movies/toy-story-3/content/poster-mid.webp",
  link: "movies/toy-story-3/splash.html"
},

{
  title: "Toy Story 2",
  releaseDate: "1999-10-30",
  rating: 7.6,
  banner: "movies/toy-story-2/content/poster-mid.webp",
  link: "movies/toy-story-2/splash.html"
},

{
  title: "Toy Story",
  releaseDate: "1995-10-30",
  rating: 8.0,
  banner: "movies/toy-story/content/poster-mid.webp",
  link: "movies/toy-story/splash.html"
},

{
  title: "Ted 2",
  releaseDate: "2015-06-25",
  rating: 6.3,
  banner: "movies/ted-2/content/poster-mid.webp",
  link: "movies/ted-2/splash.html"
},

{
  title: "Ted",
  releaseDate: "2012-06-29",
  rating: 6.4,
  banner: "movies/ted/content/poster-mid.webp",
  link: "movies/ted/splash.html"
},

{
  title: "Finding Dory",
  releaseDate: "2016-06-16",
  rating: 7.0,
  banner: "movies/finding-dory/content/poster-mid.webp",
  link: "movies/finding-dory/splash.html"
},

{
  title: "Finding Nemo",
  releaseDate: "2003-05-30",
  rating: 7.8,
  banner: "movies/finding-nemo/content/poster-mid.webp",
  link: "movies/finding-nemo/splash.html"
},

{
  title: "The Baytown Outlaws",
  releaseDate: "2012-08-27",
  rating: 6.0,
  banner: "movies/the-baytown-outlaws/content/poster-mid.webp",
  link: "movies/the-baytown-outlaws/splash.html"
},

{
  title: "The Hangover",
  releaseDate: "2009-06-02",
  rating: 7.3,
  banner: "movies/the-hangover/content/poster-mid.webp",
  link: "movies/the-hangover/splash.html"
},

{
  title: "The SpongeBob Movie Sponge on the Run",
  releaseDate: "2020-08-14",
  rating: 7.5,
  banner: "movies/the-spongebob-movie-sponge-on-the-run/content/poster-mid.webp",
  link: "movies/the-spongebob-movie-sponge-on-the-run/splash.html"
},

{
  title: "Bee Movie",
  releaseDate: "2007-10-28",
  rating: 6.0,
  banner: "movies/bee-movie/content/poster-mid.webp",
  link: "movies/bee-movie/splash.html"
},

{
  title: "Pitch Perfect 3",
  releaseDate: "2017-12-20",
  rating: 6.5,
  banner: "movies/pitch-perfect-3/content/poster-mid.webp",
  link: "movies/pitch-perfect-3/splash.html"
},

{
  title: "Pitch Perfect 2",
  releaseDate: "2015-05-07",
  rating: 6.9,
  banner: "movies/pitch-perfect-2/content/poster-mid.webp",
  link: "movies/pitch-perfect-2/splash.html"
},

{
  title: "Pitch Perfect",
  releaseDate: "2012-09-28",
  rating: 7.3,
  banner: "movies/pitch-perfect/content/poster-mid.webp",
  link: "movies/pitch-perfect/splash.html"
},

{
  title: "Borderlands",
  releaseDate: "2024-08-07",
  rating: 5.8,
  banner: "movies/borderlands/content/poster-mid.webp",
  link: "movies/borderlands/splash.html"
},

{
  title: "Shutter Island",
  releaseDate: "2010-02-14",
  rating: 8.2,
  banner: "movies/shutter-island/content/poster-mid.webp",
  link: "movies/shutter-island/splash.html"
},

{
  title: "Kingsman The Secret Service",
  releaseDate: "2015-01-24",
  rating: 7.6,
  banner: "movies/kingsman-the-secret-service/content/poster-mid.webp",
  link: "movies/kingsman-the-secret-service/splash.html"
},

{
  title: "Lilo  Stitch",
  releaseDate: "2002-06-21",
  rating: 7.5,
  banner: "movies/lilo--stitch/content/poster-mid.webp",
  link: "movies/lilo--stitch/splash.html"
},

{
  title: "The Wild Robot",
  releaseDate: "2024-09-12",
  rating: 8.4,
  banner: "movies/the-wild-robot/content/poster-mid.webp",
  link: "movies/the-wild-robot/splash.html"
},

{
  title: "Cars",
  releaseDate: "2006-06-08",
  rating: 7.0,
  banner: "movies/cars/content/poster-mid.webp",
  link: "movies/cars/splash.html"
},

{
  title: "Coco",
  releaseDate: "2017-10-27",
  rating: 8.2,
  banner: "movies/coco/content/poster-mid.webp",
  link: "movies/coco/splash.html"
},

{
  title: "Wonka",
  releaseDate: "2023-12-06",
  rating: 7.1,
  banner: "movies/wonka/content/poster-mid.webp",
  link: "movies/wonka/splash.html"
},

{
  title: "TRON Legacy",
  releaseDate: "2010-12-14",
  rating: 6.5,
  banner: "movies/tron-legacy/content/poster-mid.webp",
  link: "movies/tron-legacy/splash.html"
},

{
  title: "Kung Fu Panda",
  releaseDate: "2008-06-04",
  rating: 7.3,
  banner: "movies/kung-fu-panda/content/poster-mid.webp",
  link: "movies/kung-fu-panda/splash.html"
},

{
  title: "Singin in the Rain",
  releaseDate: "1952-04-09",
  rating: 8.1,
  banner: "movies/singin-in-the-rain/content/poster-mid.webp",
  link: "movies/singin-in-the-rain/splash.html"
},	

{
  title: "How to Train Your Dragon",
  releaseDate: "2010-03-18",
  rating: 7.8,
  banner: "movies/how-to-train-your-dragon/content/poster-mid.webp",
  link: "movies/how-to-train-your-dragon/splash.html"
},

{
  title: "Catch Me If You Can",
  releaseDate: "2002-12-16",
  rating: 8.0,
  banner: "movies/catch-me-if-you-can/content/poster-mid.webp",
  link: "movies/catch-me-if-you-can/splash.html"
},

{
  title: "Big Hero 6",
  releaseDate: "2014-10-24",
  rating: 7.7,
  banner: "movies/big-hero-6/content/poster-mid.webp",
  link: "movies/big-hero-6/splash.html"
},

{
  title: "Tangled",
  releaseDate: "2010-11-24",
  rating: 7.6,
  banner: "movies/tangled/content/poster-mid.webp",
  link: "movies/tangled/splash.html"
},

{
  title: "Storks",
  releaseDate: "2016-09-22",
  rating: 6.7,
  banner: "movies/storks/content/poster-mid.webp",
  link: "movies/storks/splash.html"
},

{
  title: "Rango",
  releaseDate: "2011-03-02",
  rating: 6.9,
  banner: "movies/rango/content/poster-mid.webp",
  link: "movies/rango/splash.html"
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


