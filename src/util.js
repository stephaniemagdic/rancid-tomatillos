const url = 'https://rancid-tomatillos.herokuapp.com/api/v2'

export const fetchData = (endpoint) => {
  return fetch(`${url}/${endpoint}`).then((response) => 
    checkForErrors(response))
  }

const checkForErrors = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error(response.status)
  }
} 

