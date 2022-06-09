import { useState } from "react";
import { Counter } from './Counter';
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';

export function Movie({ movie,id }) {  //object destructuring
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
   
  const navigate = useNavigate();
  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        {/* Passing the object through styles */}
        <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
      </div>
      {/* <button >Toggle summary</button> */}
      <KeyboardArrowDownTwoToneIcon color="primary" onClick={() => setShow(!show)}/>
      <Button variant="contained" size="small" onClick={() => navigate(`/movies/${id}`)}>Info</Button>

      {/* conditional styling */}
      <p style={paraStyles} className="movie-summary">{movie.summary}</p>

      {/* conditional rendering */}
      {/* {show === true ? <p className="movie-summary">{movie.summary}</p> : <></>} */}
      <Counter />
      
    </div>
  );
}
