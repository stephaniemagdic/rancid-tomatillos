export const fetchData = (url) => {
  return fetch(url)
  //is this below what catches a connection error?
  .then((response) => checkForErrors(response))
    .then(data =>  data).catch((err) => console.log('inside our catch in fetch data with this error', err))
}

export const postData = (dataObject) => {
  return fetch(`http://localhost:3002/api/v1/favoritesList`, {
    method: 'POST',
    body: JSON.stringify(dataObject),
    headers: {
      'Content-type': 'application/json'
    }
  }).then((response) => response)
}

export const deleteData = (id) => {
  return fetch('http://localhost:3002/api/v1/favoritesList', {
    method: 'DELETE',
    body: JSON.stringify({id}),
    headers: {
      'Content-type': 'application/json',
    }
  })
}

const checkForErrors = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    console.log("inside check for errors with our response", response, response.status)
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
