
describe('Checkout Test', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.fixture('users').then(user => {
      cy.login(user.validUser.username, user.validUser.password)
    })
  })

  it('should checkout a product successfully', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Sushil')
    cy.get('[data-test="lastName"]').type('Phulara')
    cy.get('[data-test="postalCode"]').type('44600')

    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()

    cy.contains('Thank you for your order').should('be.visible')
  })

})
