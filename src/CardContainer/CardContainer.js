import './CardContainer.css';
import Card from '../Card/Card'
import React, { Component } from 'react';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovieId: null
    }
  }


  //updateSelection method to setState on this.state.selectedMovieId to event.target.id
  render() {
    const cards = this.props.movies.map(movie => {
      return (
        <Card
          id={movie.id}
          key={movie.id}
          img={movie.poster_path}
          title={movie.title}
          rating={movie.average_rating}    
        />
      )
    })
    return (
      <section className="CardContainer">
        {cards}
      </section>
    )
  }
}

export default CardContainer;