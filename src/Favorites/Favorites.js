import './Favorites.css';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay'

const Favorites = ({ favorites, err }) => {

  return (
    <div>
      {err && <ErrorDisplay errorMessage={err} />}
      {!err && (<CardContainer 
        movies={favorites}
        hasMovieBanner={false}
      />)}
    </div>
  ) 

  
}

export default Favorites;