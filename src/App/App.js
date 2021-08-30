import './App.css';
import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import MovieDisplay from '../MovieDisplay/MovieDisplay';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
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

 }

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
