describe('Movie Details User Flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should display the selected movies details', () => {
    cy.intercept('GET', '/694919', {
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

    .get('#694919').click()
    //should have url with this id. //.url().should('include', '/694919')
    .get('article').contains('Money Plane')
    .contains('article').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")

  })

  //Test error page rendering //for server failure //this will have its own route


  //Test back button user flow
 
});

