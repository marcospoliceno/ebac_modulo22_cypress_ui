/// <reference types="cypress" />

export const accountPage = {
    get pannelButton() { return cy.get(`.woocommerce-MyAccount-navigation-link--dashboard > a`) },
    get errorMessage() { return cy.get('.woocommerce-error > li') }
}