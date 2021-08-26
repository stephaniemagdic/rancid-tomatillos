import './Card.css';

const Card = ({id, img, title, rating}) => {
    
  return(
    <article className="Card" id={id} key={id}>
      <img src={img} alt={title}></img>
      <p>{rating}</p>
    </article>
    )
  
}

export default Card;