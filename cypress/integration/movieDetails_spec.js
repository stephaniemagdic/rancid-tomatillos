describe('Movie Details User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
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

  it('User should be able to click the back button rewind icon and be taken back to the main page', () => {
    cy.visit('http://localhost:3000/movies/694919')
    cy.get('#rewind').click().url().should('not.include', 'movies')
  })


  it('A user should be able to click on the add or remove from favorites button to add or remove a movie to their favorites list, ', () => {
    cy.intercept('POST', 'http://localhost:3002/api/v1/favoritesList', {
      statusCode: 201,
      body: {"id":500840,"title":"I'm Thinking of Ending Things","poster_path":"https://image.tmdb.org/t/p/original//5ynWWapdl45hJXUh0KIevxSG9JQ.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//x3NqAzuTWvnron4pXXyFGkyTFo7.jpg","release_date":"2020-08-28","overview":"Nothing is as it seems when a woman experiencing misgivings about her new boyfriend joins him on a road trip to meet his parents at their remote farm.","genres":["Drama","Thriller"],"budget":0,"revenue":0,"runtime":135,"tagline":"","average_rating":6}
    })
    cy.intercept('GET', 'http://localhost:3002/api/v1/favoritesList', {
      statusCode: 201,
      body: [{"id":500840,"title":"I'm Thinking of Ending Things","poster_path":"https://image.tmdb.org/t/p/original//5ynWWapdl45hJXUh0KIevxSG9JQ.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//x3NqAzuTWvnron4pXXyFGkyTFo7.jpg","release_date":"2020-08-28","overview":"Nothing is as it seems when a woman experiencing misgivings about her new boyfriend joins him on a road trip to meet his parents at their remote farm.","genres":["Drama","Thriller"],"budget":0,"revenue":0,"runtime":135,"tagline":"","average_rating":6}]
    })
    cy.intercept('DELETE', 'http://localhost:3002/api/v1/favoritesList', {
      statusCode: 202,
      body: 539885
    })
    cy.visit('http://localhost:3000/movies/500840')
    .get('button').first().click()
    .visit('http://localhost:3000/favorites')
    cy.get('article').last().should('contain', '6.0/10')
    cy.visit('http://localhost:3000/movies/500840')
    .get('button').first().click()
    .visit('http://localhost:3000/favorites')
    .get(".CardContainer").should('not.contain', 'Rating: 6')
  })

  it('When a user clicks on the add button, they should see the button has been text has changed to remove from favorites and if it says remove, and it is clicked it should display add to favorites', () => {
    cy.visit('http://localhost:3000/movies/500840')
    .get('button').should('contain', 'add to favorites')
    .get('button').first().click()
    .visit('http://localhost:3000/favorites')
    cy.get('article').last().should('contain', '6.0/10')
    cy.visit('http://localhost:3000/movies/500840')
    .get('button').should('contain', 'remove from favorites')
    .get('button').first().click()
    .visit('http://localhost:3000/favorites')
    .get(".CardContainer").should('not.contain', 'Rating: 6')
  })

});

