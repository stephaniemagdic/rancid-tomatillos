import './MovieDisplay.css';
import MovieDetail from '../MovieDetail/MovieDetail';


const MovieDisplay = (props) => {


  return (
    <section className='MovieDisplay' >
      <img src={props.backdrop_path} alt={props.title} ></img>
      <div className='backButton'>X</div>
      <MovieDetail 
        props={props}
      />
    </section>
    
  )

}

export default MovieDisplay;