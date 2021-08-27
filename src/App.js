import './App.css';
import React, { Component } from 'react';
import Header from './Header/Header';
import CardContainer from './CardContainer/CardContainer';
import MovieDisplay from './MovieDisplay/MovieDisplay';
// import MovieDetails from './MovieDetails/MovieDetails';
import movieData from './data/dummyData';


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
 }

 updateSelection = (id) => {
  this.setState({currentSelectionId: id})
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
      {this.state.currentSelectionId ? <MovieDisplay /> : cardContainer}
      
     </main>
   )
 }
}






export default App;
