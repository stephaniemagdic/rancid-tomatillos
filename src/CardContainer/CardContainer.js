import './CardContainer.css';
import Card from '../Card/Card';


const CardContainer = ({ movies, fetchSelection }) => {
  
  const cards = movies.map(movie => {
    return (
      <Card
        fetchSelection={fetchSelection}
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
      { cards }
      </section>
    )
  }


export default CardContainer;