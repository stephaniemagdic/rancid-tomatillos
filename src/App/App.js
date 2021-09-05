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
  }).catch((data) => this.setState({error: data.message}))
  //To Do: The above .catch is setting our state, however the react dev tools simply shows it as an empty object. We should revisit this after we make our error display component. 
  this.getFavorites();
 }

  checkFavorites = (id) => {
    return this.state.favorites.find(fav => fav.id === id)
  }

  getFavorites = () => {
    const favoriteMovies = 'http://localhost:3002/api/v1/favoritesList'

    fetchData(favoriteMovies).then(data => {
      this.setState({favorites: [...data]})
    }).catch((data) => this.setState({error: data.message}))
  }

 render() {
   return (
      <main>
        <Switch>
          <Route exact path="/" render={ () => {
            return <CardContainer 
              movies={this.state.movies}
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
          <Route render={() => <ErrorDisplay />}
          />
         {/* To Do: Make error display more dynamic so that it either renders page not found for 404 or server down for 500 */}
        </Switch>
     </main>
   )
 }
}

export default App;
