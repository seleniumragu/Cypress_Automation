// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("login", (username, password) => {
        cy.visit('https://www.iherbtest.com/');
        cy.get('#iherb-account > div.iherb-header-account-sign-in > span > svg.icon.iherb-header-signed-out.icon-header_signed-out.sign-in.tablet-icon-login-link.my-account-button').click();
        // cy.url().should('include', 'iherb');
        cy.get('input[id=username_input]').should('be.visible').should('be.enabled').type(username);
        cy.get('input[id=Password').should('be.visible').should('be.enabled').type(password);
        cy.get('button[id=sign_in_button').click();
});