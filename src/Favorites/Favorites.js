import './Favorites.css';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';

const Favorites = ({ favorites }) => {

  return (
    <div>
      <CardContainer 
        movies={favorites}
      />
    </div>
  ) 

  
}

export default Favorites;