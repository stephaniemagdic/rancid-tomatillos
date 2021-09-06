import './CardContainer.css';
import Card from '../Card/Card';
import icon from '../Assets/electronics.png';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';


const CardContainer = ({ movies }) => {
  
  const cards = movies.map(movie => {
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
      <section >
        <Header hasMovieBanner={true} />
        <section className="CardContainer">
        { !cards.length && (
          <div id="noFavs">
            <p className="noFavoritesMessage">It looks like you haven't chosen any favorites yet!</p>
            <img src={icon} alt="television icon" />
            <Link to="/"> 
              <button
                id="findFavBtn"
              >take me home to choose a favorite</button>
            </Link>
          </div>
        )}
        { cards }
        </section>
      </section>
    )
  }


export default CardContainer;