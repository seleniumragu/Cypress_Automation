describe('UI Elements', () => {
    it('verify login page', () => {
        cy.visit('https://www.iherbtest.com/');
        cy.get('#iherb-account > div.iherb-header-account-sign-in > span > svg.icon.iherb-header-signed-out.icon-header_signed-out.sign-in.tablet-icon-login-link.my-account-button').click();
        cy.url().should('include', 'iherb');
        cy.get('input[id=username_input]').should('be.visible').should('be.enabled').type('austin-test@mailinator.com');
        cy.get('input[id=Password').should('be.visible').should('be.enabled').type('testpass');
        cy.get('button[id=sign_in_button').click();
        cy.title().should('eq', 'iHerb.com - Vitamins, Supplements & Natural Health Products')
    });
});



