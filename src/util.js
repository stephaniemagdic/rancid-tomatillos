// const url = 'https://rancid-tomatillos.herokuapp.com/api/v2'

export const fetchData = (url) => {
  return fetch(url)
  .then((response) => checkForErrors(response))
    .then(data => {
      console.log("fetch data in fetch all data", data, "for this url", url)
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


export const deleteData = (id) => {
  console.log('In fetch for delete data --->', id);
  return fetch('http://localhost:3002/api/v1/favoritesList', {
    method: 'DELETE',
    //commenting out the body fixes it the unfound fetch.
 
    body: JSON.stringify({id}),

    headers: {
      'Content-type': 'application/json',
      // 'Access-Control-Allow-Origin': *
    }
  }).then((data) => console.log("deleteData", data))
  .catch((err) => console.log("id error", err))
}

const checkForErrors = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error(response.status)
  }
} 

