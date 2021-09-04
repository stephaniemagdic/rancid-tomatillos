// const url = 'https://rancid-tomatillos.herokuapp.com/api/v2'

export const fetchData = (url) => {
  return fetch(url)
  .then((response) => checkForErrors(response))
    .then(data => {
      console.log("fetch data", data)
      return data
    })
  }

const checkForErrors = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error(response.status)
  }
} 

