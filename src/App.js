import './App.css';
import { AddColor } from './AddColor';
import { Movie } from './Movie';
import { useState } from "react";

function App() {
  const INITIAL_MOVIE_LIST = [
    {
      id: 1,
      poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      name: "No Country for Old Men",
      rating: "8.1",
      summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      id: 2,
      poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      name: "Iron man 2",
      rating: "7",
      summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      id: 3,
      poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      name: "RRR",
      rating: "8.8",
      summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments"
    },
    {
      id: 4,
      poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      name: "Jai Bhim",
      rating: "8.8",
      summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case"
    },
    {
      id: 5,
      poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      name: "The Avengers",
      rating: "8",
      summary: "Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland),simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name."
    },
    {
      id: 6,
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      name: "Interstellar",
      rating: "8.6",
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
      id: 7,
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      name: "Baahubali",
      rating: "8",
      summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      id: 8,
      poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      name: "Ratatouille",
      rating: "8",
      summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    },
    {
      id: 9,
      poster: "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      name: "96",
      rating: "8.6",
      summary: "K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart."
    },
    {
      id: 10,
      poster: "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      name: "M.S. Dhoni: The Untold Story",
      rating: "7.9",
      summary: "M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams."
    },
    {
      id: 11,
      poster: "https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
      name: "Dark Knight",
      rating: "9",
      summary: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      id: 12,
      poster: "https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
      name: "King Kong",
      rating: "9",
      summary: "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor."
    }
  ];
  // passing array of object 
  const [movieList,setMovieList] = useState(INITIAL_MOVIE_LIST);

  return (
    <div className="App">
      {/* <AddMovie /> */}
      
      {/* pasing array as a prop  and function as a prop*/}
      <MovieList movieList={movieList} setMovieList={setMovieList}/>
      <AddColor />
    </div>
  );
}

export default App;

function MovieList({movieList , setMovieList}) {
  const [name,setName] = useState("");
  const [poster,setPoster] = useState("");
  const [rating,setRating] = useState("");
  const [summary,setSummary] = useState("");
  return (
    <div>
      <div className="add-movie-form">
        <input placeholder="Name" onChange={(event) =>  setName(event.target.value)}/>
        <input placeholder="Poster" onChange={(event) => setPoster(event.target.value)}/>
        <input placeholder="Rating" onChange={(event) => setRating(event.target.value)}/>
        <input placeholder="Summary" onChange={(event) => setSummary(event.target.value)}/>
        {/* <p>name : {name}</p>
        <p>poster : {poster}</p>
        <p>rating : {rating}</p>
        <p>summary : {summary}</p> */}
        
        <button onClick={() => {
          const newMovie = {
            name:name,
            poster:poster,
            rating:rating,
            summary:summary 
          };
          console.log(newMovie);
          {/* Copy the movieList and add the new MOvie to it */}
          setMovieList([...movieList,newMovie]);
        }}>Add Movie</button>
      </div>
      <div className="movie-list">
        {/* {movieList.map(movie => <Movie movie={movie} key={movie.id} />)} */}
        {/* Passing the object mv through prop */}
        {movieList.map((mv, index) => <Movie movie={mv} key={index} />)}
      </div>
    </div>
  )
}
