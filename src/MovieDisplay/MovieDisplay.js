import './MovieDisplay.css';
import MovieDetail from '../MovieDetail/MovieDetail';
import Header from '../Header/Header';
import { fetchData } from '../util.js';
import { Component } from 'react';
import  ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import { Link } from 'react-router-dom';


class MovieDisplay extends Component {
  constructor(props) {
    super(props);
    this.params = props.params;
    this.state = {
      selectedMovie: {},
      isLoading: true,
      err: null
    };
  }

  componentDidMount = () => {
    fetchData(`movies/${this.params.id}`)
      .then((data) => {
        this.setState({selectedMovie: data.movie, isLoading: false})
      })
      .catch((err) => this.setState({err, isLoading:false}));
  }


  render() {
    const movie = (
      <section className='MovieDisplay' >
        <Link to="/">
          <div 
            className='backButton' 
          >GO BACK
          </div>
        </Link>
        <div className="imageContainer" >
          <img src={this.state.selectedMovie.backdrop_path} alt={this.state.selectedMovie.title} />
        </div> 
        <MovieDetail 
         details={this.state.selectedMovie}
        />
      </section>
    )

    return (
      <div >
        <Header />
        {this.state.isLoading && <p>loading, please wait</p>}
        {(!this.state.isLoading && !this.state.err) && movie}
        {this.state.err && <ErrorDisplay errorMessage={this.state.err}/>}
      </div>
    )
  }

}

export default MovieDisplay;