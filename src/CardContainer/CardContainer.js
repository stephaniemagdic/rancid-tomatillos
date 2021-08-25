import './CardContainer.css';
import Card from './Card/Card'

const CardContainer = ({ movies }) => {

  const cards = movies.map(movie => {
    return (
      <Card
        id={movie.id}
        key={movie.id}
        img={movie.poster_path}
        title={movie.title}
        rating={movie['average_rating']}
        date={movie['release_date']}       
      />
    )
  })
  return (
    <section>
      {cards}
    </section>
  )
}

export default CardContainer;