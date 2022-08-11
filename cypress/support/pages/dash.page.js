/// <reference types="cypress" />

export const dashPage = {
    get siteName() {
        return cy.get(`#wp-admin-bar-site-name > [aria-haspopup="true"]`)
    }
}