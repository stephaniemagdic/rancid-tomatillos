describe('Dashboard User Flows', () => {

  it('Should display movie poster and ratings on individual movie cards on page load', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201,
      body: {
         movies: [ 
          {
            average_rating: 6.142857142857143,
            backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
            id: 694919,
            poster_path: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
            release_date: "2020-09-29",
            title: "Money Plane"
          },
          {
            average_rating: 5.2727272727272725,
            backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
            id: 337401,
            poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
            release_date: "2020-09-04",
            title: "Mulan"
          }
          ]
      }
    })
    cy.visit('http://localhost:3000')
    .get('article').eq(0).contains('6.1/10')
    cy.get('article').eq(1).contains('5.3/10')
  })

  it('User should be able to click on a movie which will take them away from the page', () => {
    cy.get('main').contains('RANCID TOMATILLOS')
    cy.get('section').get('article').eq(0).click().url().should('include', '/694919')
  })

  it('User should be able to click on the favorites button in the header which will take them away from the homepage to the favorites page', () => {
    cy.get('header').contains('Favorites')
    cy.contains('Favorites').click().url().should('include', '/Favorites')
  })

})










