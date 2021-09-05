describe('Movie Details User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/');
  });

  it('When a user clicks on a movie card they should be taken to a new page with the movies details', () => {
    cy.intercept('GET', 'movies/694919', {
      statusCode: 201,
      body: {
        "id":694919,
        "title":"Money Plane",
        "poster_path":"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "release_date":"2020-09-29",
        "overview":"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        "genres":["Action"],
        "budget":0,
        "revenue":0,
        "runtime":82,
        "tagline":"",
        "average_rating":6.142857142857143
      }
    })
    cy.get('h1').contains('RANCID TOMATILLOS')
    .get('#694919').click()
    .url().should('include', '/movies/694919')
    .get('article').contains('Money Plane')
    .get('article').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
  })

  it('User should be able to click the back button icon and be taken back to the main page', () => {
    cy.visit('http://localhost:3001/movies/694919')
    cy.get('.backButton').click().url().should('not.include', 'movies')
  })

  //This belongs in a test file of its own.
  it('If user alters a url path to an undefined path, it should bring them to an error display page', () => {
    cy.visit('http://localhost:3001/hotdogs')
    .get('h2').contains('Page Not Found')
  })

  //NEW TESTS:
  //TO do, once merged test that the button is disabled.
  //here testing our express microservice new api.
  it('When a user clicks on the add button, they should see the button has been disabled and the text has changed to remove from favorites, ', () => {
    cy.intercept('POST', 'http://localhost:3002/api/v1/favoritesList', {
      statusCode: 201,
      body: {
        "id":694919,"title":"Money Plane","poster_path":"https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg","backdrop_path":"https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg","release_date":"2020-09-29","overview":"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.","genres":["Action"],"budget":0,"revenue":0,"runtime":82,"tagline":"","average_rating":6.142857142857143
      }
    })
    cy.visit('http://localhost:3001/694919')
    .get('button').click()
    .visit('http://localhost:3001/favorites')
    .get('article').first().contains(6.14)
  })



});

