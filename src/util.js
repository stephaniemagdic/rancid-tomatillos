// const url = 'https://rancid-tomatillos.herokuapp.com/api/v2'

export const fetchData = (url) => {
  return fetch(url)
  .then((response) => checkForErrors(response))
    .then(data => data)
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

export const deleteData = (id) => {
  return fetch('http://localhost:3002/api/v1/favoritesList', {
    method: 'DELETE',
    body: JSON.stringify({id}),
    headers: {
      'Content-type': 'application/json',
    }
  })
  .catch((err) => console.log("id error", err))
}

const checkForErrors = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error(response.status)
  }
} 

export const cleanData = (movieObj) => {
  for(let key in movieObj) {
    if(!movieObj[key]) {
      movieObj[key] = '-'
    }
  }
  return movieObj;
}
