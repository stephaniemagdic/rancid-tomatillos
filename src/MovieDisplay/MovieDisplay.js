import './MovieDisplay.css';
import MovieDetail from '../MovieDetail/MovieDetail';
import Header from '../Header/Header';
import { fetchData, postData, deleteData, cleanData } from '../util.js';
import { Component } from 'react';
import  ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import { Link } from 'react-router-dom';
import icon from "../Assets/rewind.png";

class MovieDisplay extends Component {
  constructor(props) {
    super(props);
    this.params = props.params;
    this.state = {
      selectedMovie: {},
      isFavorite: false,
      isLoading: true,
      err: null
    };
  }

  componentDidMount = () => {
    fetchData(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.params.id}`)
      .then((data) => cleanData(data.movie))
      .then((movieData) => this.setState({
        selectedMovie: movieData, 
        isLoading: false
        }))
        .then(() => {
          if (this.props.checkFavorites(this.state.selectedMovie.id)) {
            this.setState({isFavorite: true})
          }
        })
      .catch((err) => {
        console.log(err, "err inside of fetch a single movie comp didmount")
        this.setState({err, isLoading:false})
      });
    }

  addToFavorites = () => {
    postData(this.state.selectedMovie).then(() => {
      this.props.favoritesErr(null)

    this.props.getFavorites()}).catch((err) => this.props.favoritesErr('looks like our favorites feature is sick today! We apologize.'));
  }

  removeFromFavorites = () => {
    deleteData(this.state.selectedMovie.id).then(() => {
      this.props.favoritesErr(null)
      this.props.getFavorites()}).catch((err) => this.props.favoritesErr('looks like our favorites feature is sick today! We apologize.'))
  }

  render() {
    const movie = (
      <section className='MovieDisplay' >
      <div className="buttonContainer">
         {!this.state.isFavorite && (
          <button
          onClick={ () => {
            this.addToFavorites();
            this.setState({isFavorite: true});
          }}
        >+ add to favorites
        </button>
        )}
        {this.state.isFavorite && (
          <button
            id="removeFav"
            onClick={ () => {
              this.removeFromFavorites();
              this.setState({isFavorite: false});
          }}
        >- remove from favorites
        </button>
        )} 
        <Link to="/">
          <img src={icon} alt="rewind" id="rewind"/>
        </Link>
      </div>
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
        {this.state.err && <ErrorDisplay errorMessage={'404 not found'}/>}
      </div>
    )
  }
}

export default MovieDisplay;