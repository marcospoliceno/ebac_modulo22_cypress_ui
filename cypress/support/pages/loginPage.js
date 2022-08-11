/// <reference types="cypress" />

class LogInPage {
    get registerText() { return cy.get(':nth-child(2) > h2') }
    get #email() { return cy.get("#reg_email") }
    get #password() { return cy.get("#reg_password") }
    get registerButton() { return cy.get(":nth-child(4) > .button") }


    register(email, pass) {
        this.#email.type(email, { force: true });
        this.#password.type(pass);
        this.registerButton.click()
    }
}
module.exports = new LogInPage