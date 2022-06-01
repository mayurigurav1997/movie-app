import './App.css';
import Data from "./Data";

function App() {
  return (
    <div className="App">
      <div className="movie-list">
        {Data.map(movie => <Movie image={movie.image} name={movie.name} rating={movie.rating} summary={movie.summary} key={movie.id} />)}
      </div>
    </div>
  );
}

export default App;

function Movie(props) {
  return (

    <div className="movie-container">
      <img src={props.image} alt={props.name} className="movie-poster" />
      <div className="movie-specs">
        <h3 className="movie-name">{props.name}</h3>
        <p className="movie-rating">⭐ {props.rating}</p>
      </div>
      <p className="movie-summary">{props.summary}</p>
    </div>

  )
}

