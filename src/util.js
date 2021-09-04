// const url = 'https://rancid-tomatillos.herokuapp.com/api/v2'

export const fetchData = (url) => {
  return fetch(url)
  .then((response) => checkForErrors(response))
    .then(data => {
      console.log("fetch data", data)
      return data
    })
  }

export const postData = (dataObject) => {
  return fetch(`http://localhost:3002/api/v1/favoritesList`, {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: {
      'Content-type': 'application/json'
    }
  })
}

export const deleteData = (dataObject) => {
  console.log('In fetch for delete >', dataObject);
  return fetch('http://localhost:3002/api/v1/favoritesList', {
    method: 'DELETE',
    body: JSON.stringify(dataObject),
    headers: {
      'Content-type': 'application/json'
    }
  })
}

const checkForErrors = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error(response.status)
  }
} 

