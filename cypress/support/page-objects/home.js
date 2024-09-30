import dados from '../../fixtures/dados.json'

class HomePage {
    buttonAdd = '[data-test="add-to-cart-sauce-labs-backpack"]';
    Cart = '[data-test="shopping-cart-link"]';
    buttonRemove = '[data-test="remove-sauce-labs-backpack"]';
    buttonCheckout = '[data-test="checkout"]';
    firstName = '[data-test="firstName"]';
    lastName = '[data-test="lastName"]';
    postalCode = '[data-test="postalCode"]';
    buttonContinue = '[data-test="continue"]';
    buttonFinish = '[data-test="finish"]';
    errorCheckout = '[data-test="error"]';

    addToCart() {
        cy.get(this.buttonAdd)
            .click()
        cy.get(this.Cart)
            .click()
        cy.contains('Sauce Labs Backpack')
            .should('be.visible')
    }

    removeFromCart() {
        cy.get(this.buttonRemove)
            .click()
    }

    checkoutComplete() {
        cy.get(this.buttonCheckout)
            .click()
        cy.contains('Checkout: Your Information')
            .should('be.visible')
        cy.get(this.firstName)
            .type(dados.home.firstName)
        cy.get(this.lastName)
            .type(dados.home.lastName)
        cy.get(this.postalCode)
            .type(dados.home.postalCode)
        cy.get(this.buttonContinue)
            .click()
        cy.contains('Sauce Labs Backpack')
            .should('be.visible')
        cy.get(this.buttonFinish)
            .click()
        cy.contains('Thank you for your order!')
            .should('be.visible')
    }

    checkoutIncomplete() {
        cy.get(this.buttonCheckout)
            .click()
        cy.contains('Checkout: Your Information')
            .should('be.visible')
        cy.get(this.buttonContinue)
            .click()
        cy.get(this.errorCheckout)
            .should('be.visible')
    }
}

export default HomePage;