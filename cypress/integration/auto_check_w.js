describe('check supermarket online products availability', function() {
  it('check woolworths toilet paper availability', function() {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit(Cypress.env('WWSROOT'));
    cy.get('#header-panel').then(body => {
      cy.get('#headerSearch').type(Cypress.env('CONTENT'));
      cy.get('.autocomplete-searchButton').click();
    });
    cy.get('.product-grid--tile').each(content => {
      content.find('toilet tissue').length > 0;
      content.find('Add to cart').length > 0;
    });
  });
});
