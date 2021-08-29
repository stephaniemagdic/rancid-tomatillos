import './ErrorDisplay.css';
import icon from '../Assets/browser.png';

const ErrorDisplay = ({ errorMessage }) => {

  

  return (
    <section className="errorDisplay">
      <h2>{`${errorMessage}: Page not found`}</h2>
      <img src={icon} alt='error icon'></img>
    </section>
  )
}

export default ErrorDisplay;