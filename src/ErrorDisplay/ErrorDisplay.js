import './ErrorDisplay.css';

const ErrorDisplay = ({ errorMessage }) => {


  return (
    <h2>{`${errorMessage}: Page not found`}</h2>
  )
}

export default ErrorDisplay;