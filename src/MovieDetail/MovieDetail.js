import './MovieDetail.css';

const MovieDetail = (props) => {

  return (
    <article className="movieDetail">
      <div className="title">
        <h2>{props.details.title}</h2>
        <p>{props.details.release_date}</p>
      </div>
      <div className="details">
        <p>{`Tagline: ${props.details.tagline}`}</p>
        <p>{`Runtime: ${props.details.runtime}`}</p>
        <p>{`Budget: ${props.details.budget}`}</p>
      </div>
      <p>{`Overview: ${props.details.overview}`}</p>
    </article>
  )
}

export default MovieDetail;