import './ErrorDisplay.css';
import icon from '../Assets/browser.png';
import Header from '../Header/Header';

const ErrorDisplay = ({ errorMessage }) => {


  return (
    <main>
      <section className="errorDisplay">
        <h2>{`${errorMessage}: Page not found`}</h2>
        <img src={icon} alt='error icon'></img>
      </section>
    </main>
  )
}

export default ErrorDisplay;