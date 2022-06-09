import './App.css';
import { AddColor } from './AddColor';
import { Movie } from './Movie';
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate, useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  const INITIAL_MOVIE_LIST = [

    {

      "name": "RRR",
      "poster":
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      "rating": 8.8,
      "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      "trailer": "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {

      "name": "Iron man 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 7,
      "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      "trailer": "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {

      "name": "No Country for Old Men",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      "rating": 8.1,
      "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      "trailer": "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {

      "name": "Jai Bhim",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      "rating": 8.8,
      "trailer": "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {

      "name": "The Avengers",
      "rating": 8,
      "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      "trailer": "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {

      "name": "Interstellar",
      "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      "rating": 8.6,
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {

      "name": "Baahubali",
      "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      "rating": 8,
      "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      "trailer": "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {

      "name": "Ratatouille",
      "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      "rating": 8,
      "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
  ];

  // passing array of object 
  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);

  return (
    <div className="App">
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/color-game">Color-game</Link></li>
        <li><Link to="/movies">Movies</Link></li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList} />} />

        <Route path="/movies/:id" element={<MovieDetails movieList={movieList} />} />

        {/* Redirection */}
        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route path="/404" element={<NotFound />} />
        {/* Redirection */}
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>

      {/* pasing array as a prop  and function as a prop*/}
      {/* <MovieList movieList={movieList} setMovieList={setMovieList}/> */}
      {/* <AddColor /> */}
    </div>
  );
}
function MovieDetails({ movieList }) {
  console.log(useParams());
  const { id } = useParams();
  console.log(id);
  // console.log(movieList);  //it will give array

  const movie = movieList[id];
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  }
  const navigate = useNavigate();
  return <div>
    <iframe width="100%"
      height="650"
      src={movie.trailer}
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <div className="movie-detail-container">
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        {/* Passing the object through styles */}
        <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
      </div>
      <p className="movie-summary">{movie.summary}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  </div>
}

function NotFound() {
  return <div>
    <img src="https://cdn.svgator.com/images/2022/01/404-page-animation-example.gif"
      alt="404 Not Found"
      className="not-found"
    />

  </div>
}

function Home() {
  return <h1>Welcome to the Movie App</h1>
}

export default App;

function MovieList({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary
    };
    console.log(newMovie);
    {/* Copy the movieList and add the new MOvie to it */ }
    setMovieList([...movieList, newMovie]);
  }
  return (
    <div>
      <div className="add-movie-form">
        {/* Input - >  TextField placeholder ->label */}
        <TextField  label="Name" size="small" onChange={(event) => setName(event.target.value)} variant="outlined" />
        <TextField  label="Poster" size="small" onChange={(event) => setPoster(event.target.value)} variant="outlined" />
        <TextField  label="Rating" size="small" onChange={(event) => setRating(event.target.value)} variant="outlined" />
        <TextField  label="Summary" size="small" onChange={(event) => setSummary(event.target.value)} variant="outlined" />
        {/* <p>name : {name}</p>
        <p>poster : {poster}</p>
        <p>rating : {rating}</p>
        <p>summary : {summary}</p> */}

        <Button onClick={addMovie} variant="outlined">Add Movie</Button>
      </div>
      <div className="movie-list">
        {/* {movieList.map(movie => <Movie movie={movie} key={movie.id} />)} */}
        {/* Passing the object mv through prop */}
        {movieList.map((mv, index) => <Movie movie={mv} id={index} />)}
      </div>
    </div>
  )
}
