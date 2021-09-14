describe('Favorites User Flows', () => {
  it('When a user clicks on a the  MOVIE BUFFER header they should be taken back to the home page', () => {
    cy.visit('http://localhost:3000/Favorites');
    cy.get('h1').click()
    cy.url().should('not.include', 'http://localhost:3000/Favorites')
  })

  it('When a user clicks on the Home button in the header they should be taken back to the home page', () => {
    cy.visit('http://localhost:3000/Favorites');
    cy.contains('Home').click().url().should('not.include', 'http://localhost:3000/Favorites')
  })

  it('User should be able to click on a movie which will take them away from the page to the movie details page', () => {
    cy.intercept('GET', 'http://localhost:3002/api/v1/favoritesList', {
      statusCode: 200,
      body: [{"id":500840,"title":"I'm Thinking of Ending Things","poster_path":"https://image.tmdb.org/t/p/original//5ynWWapdl45hJXUh0KIevxSG9JQ.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//x3NqAzuTWvnron4pXXyFGkyTFo7.jpg","release_date":"2020-08-28","overview":"Nothing is as it seems when a woman experiencing misgivings about her new boyfriend joins him on a road trip to meet his parents at their remote farm.","genres":["Drama","Thriller"],"budget":0,"revenue":0,"runtime":135,"tagline":"","average_rating":6}]
    })
    cy.intercept('POST', 'http://localhost:3002/api/v1/favoritesList', {
      statusCode: 201,
      body: {"id":500840,"title":"I'm Thinking of Ending Things","poster_path":"https://image.tmdb.org/t/p/original//5ynWWapdl45hJXUh0KIevxSG9JQ.jpg","backdrop_path":"https://image.tmdb.org/t/p/original//x3NqAzuTWvnron4pXXyFGkyTFo7.jpg","release_date":"2020-08-28","overview":"Nothing is as it seems when a woman experiencing misgivings about her new boyfriend joins him on a road trip to meet his parents at their remote farm.","genres":["Drama","Thriller"],"budget":0,"revenue":0,"runtime":135,"tagline":"","average_rating":6}
  })
    cy.visit('http://localhost:3000/Favorites')
    cy.get('article').click().url().should('include', '500840')
  })

  it('If user does not have any favorite movies, they should see a message saying they do not have any favorites currently', () => {
    cy.intercept('GET', '/favoritesList', {
      statusCode: 200,
      body: []
    })
    cy.visit('http://localhost:3000/Favorites')
    cy.contains('It looks like you haven\'t chosen any favorites yet!')
  })

  it('User can click the take me home to choose a favorite button in the empty favorites page to take them to the home page', () => {
    cy.get('#findFavBtn').click().url().should('not.include', '/Favorites')
  })
})