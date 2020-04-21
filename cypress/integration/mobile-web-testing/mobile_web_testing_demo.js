describe('iHerb home page', function() {
  beforeEach(function() {
    cy.visit('https://www.iherb.com/');
  });

  it('contains "iHerb.com - Vitamins, Supplements & Natural Health Products" in the title', function() {
    cy.title().should('contain', 'iHerb.com - Vitamins, Supplements & Natural Health Products');
  });

  it('has a visible star logo', function() {
  cy.get('.icon.icon-iherblogo').should('be.visible');
});
describe('iherb home page', function() {
  // Our existing tests and the beforeEach are here

  describe('with a 320x568 viewport', function() {

  });
});
describe('with a 320x568 viewport', function() {
  beforeEach(function() {
    cy.viewport(320, 568);
  });
});
});