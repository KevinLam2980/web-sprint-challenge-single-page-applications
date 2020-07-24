describe('Inputs and submit button', () => {
    it('can navigate to the site', () => {
      cy.visit('http://localhost:3000/')
      cy.url()
      .should('include', 'localhost')
    })

    it('Can navigate to form', () => {
        cy.get('#pizzaForm').click()
        cy.url()
        .should('include', '/pizza')
    })
  
    it('submit button is disabled', () => {
      cy.get('#submitBtn').should('be.disabled')
    })

    it('Error message for name works', () => {
        cy.get('input[name="name"]')
          .type('S')
          .should('have.value', 'S')
        cy.get('#nameError')
        cy.contains('Name must be atleast 2 character')
      })
  
    it('can type a text for a new name', () => {
      cy.get('input[name="name"]')
        .type('hadow')
        .should('have.value', 'Shadow')
    })  
  
    it("Can select size", () => {
      cy.get('select').select('medium')
        .should('have.value', "medium")
    })

    it("Can select sauce", () => {
        cy.get('input[name="sauce"]').check('original')
        .should('be.checked')
      })
  

    it("Can check checkbox", () => {
        cy.get('input[name="pepperoni"]').check()
        .should('be.checked')
      })
  
    it("Can check multiplr checkbox", () => {
        cy.get('input[name="pineapple"]').check()
        .should('be.checked')
        cy.get('input[name="pepperoni"]')
        .should('be.checked')
      })
  
      it('can type special instructions', () => {
        cy.get('input[name="special"]')
          .type('Extra pineapple please')
          .should('have.value', 'Extra pineapple please')
      })  

      it('submit button is no longer disabled', () => {
        cy.get('#submitBtn').should('not.be.disabled')
      })

    it('for can be submitted', () => {
        cy.get('#submitBtn').click()

    })

    it('Can navigate back home after submitting form', () => {
        cy.get('#homeBtn').click()
        cy.url()
        .should('include', 'localhost')
    })
    })