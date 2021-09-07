import './App.css';
import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import MovieDisplay from '../MovieDisplay/MovieDisplay';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import Favorites from '../Favorites/Favorites';
import { fetchData } from '../util.js';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
 constructor(){
   super();
   this.state = {
     movies: [],
     favorites: [],
     error: null
   }
 }

  componentDidMount = () => {
    const allMovies = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    fetchData(allMovies).then(data => {
      this.setState({movies: [...this.state.movies, ...data.movies]})
    }).catch((err) => this.setState({error: err.message}))
    this.getFavorites();
  }

  checkFavorites = (id) => {
    return this.state.favorites.find(fav => fav.id === id)
  }

  getFavorites = () => {
    const favoriteMovies = 'http://localhost:3002/api/v1/favoritesList'
    fetchData(favoriteMovies).then(data => this.setState({favorites: [...data]}))
    .catch((data) => this.setState({error: data.message}))
  }

 render() {
   return (
      <main>
        <Switch>
          <Route exact path="/" render={ () => {
            return <CardContainer 
              movies={this.state.movies}
              hasMovieBanner={true}
            />
          }}
          />
          <Route exact path="/movies/:id" render={ ({ match }) => {
            return <MovieDisplay { ...match } 
              getFavorites={this.getFavorites}
              checkFavorites={this.checkFavorites}
            />
          }}
          />
          <Route exact path="/Favorites" render={ () => {
            return <Favorites 
              favorites={this.state.favorites}
            />
          }}
          />
          <Route render={() => <ErrorDisplay errorMessage={this.state.error}/>}
          />
        </Switch>
     </main>
   )
 }
}

export default App;
