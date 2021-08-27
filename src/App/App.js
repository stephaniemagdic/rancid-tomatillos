import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import MovieDisplay from '../MovieDisplay/MovieDisplay';
// import MovieDetails from './MovieDetails/MovieDetails';
import movieData from '../data/dummyData';
import { fetchData } from '../util.js'


class App extends Component {
 constructor(){
   super();
   this.state = {
     movies: [],
     currentSelectionId: null,
     dummyDisplay: {
      id: 1, 
      title: "Fake Movie Title", 
      poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", 
      backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", 
      release_date: "2019-12-04", 
      overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", 
      average_rating: 6, 
      genres: ["Drama"], 
      budget:63000000, 
      revenue:100853753, 
      runtime:139, 
      tagline: "It's a movie!" 
      }   
   }
 }

 componentDidMount = () => {
   this.setState({movies: [...this.state.movies, ...movieData.movies]})
  //.movies
  // fetch the data with the endpoint of movies as an argument
  // if there is a response then set the state at the key of movies to response.movies
  // else if an error is thrown set the state at the key of error to error
     // 500
     // if there is an error in state, then render the server is down page using conditional rendering in our app.

   
 }

 updateSelection = (id) => {
  this.setState({currentSelectionId: id})
 }

 clearSelection = () => {
   this.setState({currentSelectionId: ''})
 }

 render() {
   const cardContainer = (
   <CardContainer 
   movies={this.state.movies}
   updateSelection={this.updateSelection}
   />
   )
   return (
     <main>
      <Header />
      {this.state.currentSelectionId ? <MovieDisplay 
        selectedMovie={this.state.dummyDisplay}
        clearSelection={this.clearSelection}
      /> : cardContainer}
      
     </main>
   )
 }
}






export default App;
