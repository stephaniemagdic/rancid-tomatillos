import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import MovieDisplay from '../MovieDisplay/MovieDisplay';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
// import MovieDetails from './MovieDetails/MovieDetails';
// import movieData from '../data/dummyData';
import { fetchData } from '../util.js'


class App extends Component {
 constructor(){
   super();
   this.state = {
     movies: [],
     currentSelectionId: null,
     error: null,
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
  fetchData('moves').then(data => {
    this.setState({movies: [...this.state.movies, ...data.movies]})
  }).catch((data) => this.setState({error: data.message}))
  // The above .catch is setting our state, however the react dev tools simply shows it as an empty object. We should revisit this after we make our error display component. 

 //NOTE TO DO NEXT: SATURDAY PICK UP: SET STATE KEY of ERR to ERR in catch block
//Then do not forget on line 36 to change fetchData('moves) to be fetchData('movies)
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
  
   const mainPage = (
    <main>
    <Header />
    {this.state.currentSelectionId ? <MovieDisplay 
      selectedMovie={this.state.dummyDisplay}
      clearSelection={this.clearSelection}
    /> : cardContainer}
   </main>
   )
    
   const errorPage = (
     <main>
       <Header />
       <ErrorDisplay 
         errorMessage={this.state.error}
       />
     </main>
   )

   return (
     <main>
       { this.state.error ? errorPage : mainPage } 
     </main>
   )
 }
}






export default App;
