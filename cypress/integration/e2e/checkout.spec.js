/// <reference types="cypress" />

const { checkoutPage } = require('../../support/pages')

describe('Teste Checkouk Ebac Shop', () => {
    it('Checkout EbacShop', () => {
        cy.visit('/')
        cy.checkout()
        checkoutPage.orderNumber.should('be.visible');
        checkoutPage.pageSubTitle.should('have.text', 'Obrigado. Seu pedido foi recebido.')
    });
});
