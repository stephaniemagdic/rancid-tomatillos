import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ id, img, title, rating }) => {
    
  

  return(
    <Link to={`/movies/${id}`} >
      <article
        className="Card" 
        id={id} 
        key={id} 
        >
        <img src={img} alt={title}></img>
        <p>{`Rating: ${rating.toFixed(2)}`}</p>
      </article>
    </Link>
    )
  
}

export default Card;