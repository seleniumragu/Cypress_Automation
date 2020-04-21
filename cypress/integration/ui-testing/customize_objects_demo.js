describe('Customize Objects', () => {
    it('verify customize login page', () => {
      cy.login('austin-test@mailinator.com', 'testfail');//invalid
      cy.title().should('eq', 'Login Pages');

      cy.login('austin-test@mailinator.com', 'testfailFirst');//invalid
      cy.title().should('eq', 'Login Pages');

      cy.login('austin-test@mailinator.com', 'testpass'); //valid
      cy.title().should('eq', 'iHerb.com - Vitamins, Supplements & Natural Health Products');
    });
});