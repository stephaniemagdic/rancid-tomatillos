describe('Favorites User Flows', () => {
 //Note: because the data does not persist the get request is tested through a stub on the movieDetails spec user flow.

  it('When a user clicks on a the RANCID TOMATILLOS header they should be taken back to the home page', () => {
    cy.visit('http://localhost:3001/Favorites');
    cy.get('h1').click()
    cy.url().should('not.include', 'http://localhost:3001/Favorites')
  })

  it('User should be able to click on a movie which will take them away from the page', () => {
    cy.visit('http://localhost:3001/movies/694919')
    cy.get('button').first().click()
    cy.visit('http://localhost:3001/Favorites');
    cy.get('article').eq(0).click().url().should('include', '/694919')
  })

})