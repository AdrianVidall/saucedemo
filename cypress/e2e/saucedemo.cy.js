/// <reference types="cypress" />

import LoginPage from "../support/page-objects/login"
import HomePage from "../support/page-objects/home";

const loginPage = new LoginPage;
const homePage = new HomePage;

describe('Saucedemo', () => {

  beforeEach(function() {
    cy.visit('https://www.saucedemo.com/')
    cy.title().should('be.equal', 'Swag Labs')
  })

  it('Login com credenciais válidas', () => {
    loginPage.loginValido();
  })

  it('Login com credenciais inválidas', () => {
    loginPage.loginInvalido();
  })

  it('Adicionar item ao carrinho', () => {
    loginPage.loginValido();
    homePage.addToCart();
  })

  it('Remover item do carrinho', () => {
    loginPage.loginValido();
    homePage.addToCart();
    homePage.removeFromCart();
  })

  it('Checkout completo', () => {
    loginPage.loginValido();
    homePage.addToCart();
    homePage.checkoutComplete();
  })

  it('Checkout incompleto', () => {
    loginPage.loginValido();
    homePage.addToCart();
    homePage.checkoutIncomplete();
  })

})