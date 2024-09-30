import dados from '../../fixtures/dados.json'

class LoginPage {
    username = '[data-test="username"]';
    password = '[data-test="password"]';
    buttonLogin = '[data-test="login-button"]';
    error = '.error-message-container';

    loginValido() {
        cy.get(this.username)
            .type(dados.login.username)
        cy.get(this.password)
            .type(dados.login.password)
        cy.get(this.buttonLogin)
            .click()
        cy.contains('Products')
            .should('be.visible')
    }

    loginInvalido() {
        cy.get(this.username)
            .type(dados.login.username)
        cy.get(this.password)
            .type("error")
        cy.get(this.buttonLogin)
            .click()
        cy.get(this.error)
            .should('be.visible')
    }
}

export default LoginPage;