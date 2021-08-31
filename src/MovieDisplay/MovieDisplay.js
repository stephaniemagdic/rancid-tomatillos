import './MovieDisplay.css';
import MovieDetail from '../MovieDetail/MovieDetail';
import { Component } from 'react';


class MovieDisplay extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: null,
      isLoading: false
    }
  }


  render() {
    return (
      <p>I'm a movie display!</p>
      // <section className='MovieDisplay' >
      //   <img src={} alt={}></img>
      //   <div 
      //     className='backButton' 
      //    // make this a redirect back to main
      //     >GO BACK
      //   </div>
      //   <MovieDetail 
      //     details={}
      //   />
      // </section>
      
    )
  }

}

export default MovieDisplay;