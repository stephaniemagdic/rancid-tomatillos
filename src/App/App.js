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
     selectedMovie: null
   }
 }

 componentDidMount = () => {
  fetchData('movies').then(data => {
    this.setState({movies: [...this.state.movies, ...data.movies]})
  }).catch((data) => this.setState({error: data.message}))
  // The above .catch is setting our state, however the react dev tools simply shows it as an empty object. We should revisit this after we make our error display component. 

 //NOTE TO DO NEXT: SATURDAY PICK UP: SET STATE KEY of ERR to ERR in catch block
//Then do not forget on line 36 to change fetchData('moves) to be fetchData('movies)
     // 500
     // if there is an error in state, then render the server is down page using conditional rendering in our app.

 }

//  componentDidUpdate = () => {
//    this.fetchSelection(this.state.currentSelectionId)
//  }

 updateSelection = (id) => {
  this.setState({currentSelectionId: id})
 }

 fetchSelection = (id) => {
  fetchData(`movies/${id}`)
  .then(data => {
    this.setState({selectedMovie: data.movie})
  })
 }

 clearSelection = () => {
   this.setState({selectedMovie: null})
 }

 render() {
   const cardContainer = (
   <CardContainer 
    movies={this.state.movies}
  //  updateSelection={this.updateSelection}
    fetchSelection={this.fetchSelection}
   />
   )
  
   const mainPage = (
    <main>
    <Header />
    {this.state.selectedMovie ? <MovieDisplay 
      selectedMovie={this.state.selectedMovie}
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
