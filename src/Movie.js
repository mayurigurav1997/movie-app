import { useState } from "react";
import { Counter } from './Counter';

export function Movie({ movie }) {  //object destructuring
  // if we use props above instead of destructuring  then we need to do props.move.name like that because props return object
  const styles = {
    // conditional styling
    color: movie.rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  const paraStyles = {
    display: show ? "block" : "none",
  };
  // console.log(movie);

  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        {/* Passing the object through styles */}
        <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle summary</button>
      {/* conditional styling */}
      <p style={paraStyles} className="movie-summary">{movie.summary}</p>

      {/* conditional rendering */}
      {/* {show === true ? <p className="movie-summary">{movie.summary}</p> : <></>} */}
      <Counter />
      
    </div>
  );
}
