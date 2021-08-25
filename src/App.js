import './App.css';
import React, { Component } from 'react';
// import Header from './Header/Header';
// import CardContainer from './CardContainer/CardContainer';
// import Card from './Card/Card';
// import MovieDisplay from './MovieDisplay/MovieDisplay';
// import MovieDetails from './MovieDetails/MovieDetails';
import movieData from './data/dummyData';


class App extends Component {
 constructor(){
   super();
   this.state = {
     movies: []
   }
 }

 componentDidMount = () => {
   this.setState({movies: [...this.state.movies, ...movieData.movies]})
 }

 render() {
   return (
     <h1>HELLO, I am your app.</h1>
   )
 }
}






export default App;
