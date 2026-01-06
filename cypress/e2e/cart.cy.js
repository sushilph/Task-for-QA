
describe('Add to Cart Test', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.fixture('users').then(user => {
      cy.login(user.validUser.username, user.validUser.password)
    })
  })

  it('should add product to cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

})
