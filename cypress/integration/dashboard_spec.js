describe('Dashboard User Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it( 'User should be able to click on a movie which will take them away from the page', () => {
  //url contains "/"
  //   //check that the card container is there
    cy.get('main').contains('RANCID TOMATILLOS')
    cy.get('section').get('article')
  // cy.get('.Card').should('have.length', 2)
  //movie is clicked  .. get element.click()
  //check that url no longer is the url we were at
  })

})