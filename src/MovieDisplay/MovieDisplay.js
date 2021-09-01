import './MovieDisplay.css';
import MovieDetail from '../MovieDetail/MovieDetail';
import { fetchData } from '../util.js';
import { Component } from 'react';


class MovieDisplay extends Component {
  constructor(props) {
    super(props);
    this.params = props.params;
    this.state = {
      selectedMovie: {},
      isLoading: true,
    };
  }

  componentDidMount = () => {
    fetchData(`movies/${this.params.id}`)
      .then((data) => {
        this.setState({selectedMovie: data.movie, isLoading: false})
      })
      .catch(err => console.log('err', err));
  }


  render() {
    const movie = (
      <section className='MovieDisplay' >
        <img src={this.state.selectedMovie.backdrop_path} alt={this.state.selectedMovie.title}></img>
        <div 
          className='backButton' 
      // make this a redirect back to main
        >GO BACK
        </div>
        <MovieDetail 
         details={this.state.selectedMovie}
        />
      </section>
    )

    return (
      <div >
        {this.state.isLoading && <p>loading, please wait</p>}
        {!this.state.isLoading && movie}
      </div>
    )
  }

}

export default MovieDisplay;