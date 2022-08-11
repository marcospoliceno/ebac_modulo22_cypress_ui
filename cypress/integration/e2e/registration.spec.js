/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const { LogInPage, accountPage } = require('../../support/pages')
const data = require('../../fixtures/data.json')

let emailFaker = faker.internet.email()
describe('Cadastro', () => {
    it('Teste cadastro ', () => {
        cy.visit('/my-account/')
        LogInPage.register(emailFaker, data.senha)
        accountPage.pannelButton.should('be.visible')
        // accountPage.errorMessage.should('be.visible')
    });
})


