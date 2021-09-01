import './CardContainer.css';
import Card from '../Card/Card';
import Header from '../Header/Header';


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
      <section >
        <Header />
        <section className="CardContainer">
        { cards }
        </section>
      </section>
    )
  }


export default CardContainer;