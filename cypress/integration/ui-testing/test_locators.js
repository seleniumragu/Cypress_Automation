/// <reference types = "cypress"/>

describe('Testing Wikipedia', () => {
    it('I can search for content', () => {
        cy.visit('https://www.wikipedia.org');
    });
});