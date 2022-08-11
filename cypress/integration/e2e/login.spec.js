/// <reference types="cypress" />
describe('Teste Login Ebac Shop', () => {
    it('Login EbacShop', () => {
        cy.visit('/')
        cy.login('gerente', 'GD*peToHNJ1#c$sgk08EaYJQ')
        cy.get(`#wp-admin-bar-site-name > [aria-haspopup="true"]`)
    });
});
