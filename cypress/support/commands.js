Cypress.Commands.add('fillMandatoryFieldsAndSubmit', ()=>{
    cy.get('#firstName').type('Yasmin')
    cy.get('#lastName').type('Rodrigues Silva')
    cy.get('#email').type('yasminrodsil@gmail.com')
    cy.get('#open-text-area').type('Thanks!')
    cy.get('button[type="submit"]').click()
})