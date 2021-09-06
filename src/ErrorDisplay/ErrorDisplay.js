import './ErrorDisplay.css';
import icon from '../Assets/browser.png';
import { Link } from 'react-router-dom';

const ErrorDisplay = ({ errorMessage }) => {

  let displayText = '';
  let button = null;

  if (errorMessage) {
    displayText = 'Server Error'
  } else if (!errorMessage) {
    displayText = 'Page Not Found'
    button = <Link to="/"><button>TAKE ME TO RANCID TOMATILLOS</button></Link>
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