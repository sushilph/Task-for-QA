
describe('Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.fixture('users').as('users')
  })

  it('should login successfully with valid credentials', function () {
    cy.login(this.users.validUser.username, this.users.validUser.password)
    cy.url().should('include', '/inventory')
  })

  it('should show error for invalid login', function () {
    cy.login(this.users.invalidUser.username, this.users.invalidUser.password)
    cy.get('[data-test="error"]').should('be.visible')
  })

})
