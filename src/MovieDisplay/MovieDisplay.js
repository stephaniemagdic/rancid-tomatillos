import './MovieDisplay.css';
import MovieDetail from '../MovieDetail/MovieDetail';


const MovieDisplay = (props) => {

  return (
    <section className='MovieDisplay' >
      <img src={props.selectedMovie.backdrop_path} alt={props.selectedMovie.title}></img>
      <div 
        className='backButton' 
        onClick={()=> props.clearSelection()}
        >GO BACK
      </div>
      <MovieDetail 
        details={props.selectedMovie}
      />
    </section>
    
  )

}

export default MovieDisplay;