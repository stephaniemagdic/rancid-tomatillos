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

  

  //TO do, once merged test that the button is disabled.
  //here testing our express microservice new api.
  it('When a user clicks on the add button, they should see the button has been disabled and the text has changed to remove from favorites, ', () => {
    cy.intercept('POST', 'http://localhost:3002/api/v1/favoritesList', {
      statusCode: 201,
      body: {"id":500840,"title":"I'm Thinking of Ending Things","poster_path":"https://image.tmdb.org/t/p/original//5ynWWapdl45hJXUh0KIevxSG9JQ.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//x3NqAzuTWvnron4pXXyFGkyTFo7.jpg","release_date":"2020-08-28","overview":"Nothing is as it seems when a woman experiencing misgivings about her new boyfriend joins him on a road trip to meet his parents at their remote farm.","genres":["Drama","Thriller"],"budget":0,"revenue":0,"runtime":135,"tagline":"","average_rating":6}
    })
    cy.intercept('GET', 'http://localhost:3002/api/v1/favoritesList', {
      statusCode: 201,
      body: [{"id":500840,"title":"I'm Thinking of Ending Things","poster_path":"https://image.tmdb.org/t/p/original//5ynWWapdl45hJXUh0KIevxSG9JQ.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//x3NqAzuTWvnron4pXXyFGkyTFo7.jpg","release_date":"2020-08-28","overview":"Nothing is as it seems when a woman experiencing misgivings about her new boyfriend joins him on a road trip to meet his parents at their remote farm.","genres":["Drama","Thriller"],"budget":0,"revenue":0,"runtime":135,"tagline":"","average_rating":6}]
    })
    cy.visit('http://localhost:3001/movies/500840')
    .get('.addMovie').click()
    .visit('http://localhost:3001/favorites')
    cy.get('article').last().should('contain', 'Rating: 6')
  })

  //TO Do: need to change this based on the merge** button will not be last.
  it('If a user clicks on the Remove from Favorites Button, ', () => {
    cy.intercept('DELETE', 'http://localhost:3002/api/v1/favoritesList', {
      statusCode: 202,
      body: 539885
    })
    cy.visit('http://localhost:3001/movies/500840')
    .get('.deleteButton').click()
    .visit('http://localhost:3001/favorites')
    .get(".CardContainer").should('not.contain', 'Rating: 6')
  })


});

