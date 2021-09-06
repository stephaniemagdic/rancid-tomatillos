describe('Error Display User Flows', () => {
  it('If user typed in an invalid URL, the user should be able to click on a button to be taken to the RANCID TOMATILLOS homepage', () => {
    cy.visit('http://localhost:3001/undefined')
    .get('button').click().get('h1').contains('RANCID TOMATILLOS')
  })
  
  it('If user alters a url path to an undefined path, it should bring them to an error display page', () => {
    cy.visit('http://localhost:3001/hotdogs')
    .get('h2').contains('Page Not Found')
  })
})