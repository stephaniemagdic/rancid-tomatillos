import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ fetchSelection, id, img, title, rating }) => {
    
  

  return(
    <Link to={`/movies/${id}`} >
      <article
        className="Card" 
        id={id} 
        key={id} 
        >
        <img src={img} alt={title}></img>
        <p>{rating}</p>
      </article>
    </Link>
    )
  
}

export default Card;