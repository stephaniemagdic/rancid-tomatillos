describe('Error Display User Flows', () => {
  it('If user typed in an invalid URL, the user should be able to click on a button to be taken to the RANCID TOMATILLOS homepage', () => {
    cy.visit('http://localhost:3001/undefined')
    .get('button').click().get('h1').contains('RANCID TOMATILLOS')
  })
})