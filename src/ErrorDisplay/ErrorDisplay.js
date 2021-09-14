import './ErrorDisplay.css';
import icon from '../Assets/browser.png';
import { Link } from 'react-router-dom';

const ErrorDisplay = ({ errorMessage }) => {

  let displayText = '';
  let button = null;

  if (errorMessage) {
    displayText = errorMessage
    button = <Link to="/"><button>TAKE ME TO MOVIE BUFFER</button></Link>
  } else if (!errorMessage) {
    displayText = 'oops, something went wrong'
    button = <Link to="/"><button>TAKE ME TO MOVIE BUFFER</button></Link>
  }

  return (
    <main>
      <section className="errorDisplay">
        <h2>{displayText}</h2>
        {button}
        <img src={icon} alt='error icon'></img>
      </section>
    </main>
  )
}

export default ErrorDisplay;