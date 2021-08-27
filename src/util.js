const url = 'https://rancid-tomatillos.herokuapp.com/api/v2'

export const fetchData = (endpoint) => {
  return fetch(`${url}${endpoint}`).then((response) => checkForErrors(response)).catch(error => error)
}

const checkForErrors = (response) => {
  if(response.ok) {
    return response.json()
  } else {
    console.log(response.status)
    //would eventually help us display helpful error message
  }
}