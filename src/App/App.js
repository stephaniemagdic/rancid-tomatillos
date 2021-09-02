import './App.css';
import React, { Component } from 'react';
import CardContainer from '../CardContainer/CardContainer';
import MovieDisplay from '../MovieDisplay/MovieDisplay';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import { fetchData } from '../util.js';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
 constructor(){
   super();
   this.state = {
     movies: [],
     error: null
   }
 }

 componentDidMount = () => {
  fetchData('movies').then(data => {
    this.setState({movies: [...this.state.movies, ...data.movies]})
  }).catch((data) => this.setState({error: data.message}))
  //To Do: The above .catch is setting our state, however the react dev tools simply shows it as an empty object. We should revisit this after we make our error display component. 
 }

 render() {
   return (
      <main>
        <Switch>
          <Route exact path="/" render={ () => {
            return <CardContainer 
              movies={this.state.movies}
              fetchSelection={this.fetchSelection}
            />
          }}
          />
          <Route exact path="/movies/:id" render={ ({ match }) => {
            console.log(match);
            return <MovieDisplay { ...match } />
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
