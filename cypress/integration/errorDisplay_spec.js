describe('Error Display User Flows', () => {
  it('If user typed in an invalid URL, the user should be able to click on a button to be taken to the MOVIE BUFFER homepage', () => {
    cy.visit('http://localhost:3000/undefined')
    .get('button').click().get('h1').contains('MOVIE BUFFER')
  })
  
  //test 404 error response
  it('If user alters a url path to an undefined path, it should bring them to an error display page', () => {
    cy.visit('http://localhost:3000/hotdogs')
    .get('h2').contains('Page Not Found')
  })
})