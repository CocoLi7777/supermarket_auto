describe('check supermarket online products availability', function() {
  it('check coles toilet paper availability', function() {
    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit(Cypress.env('COLESROOT'));
    cy.get('.top-header').then(body => {
      cy.get('#ctl20_ctl02_txtSearch').type('toiletpaper');
      cy.get('#ctl20_ctl02_btnButtonSearch').click();
    });
    cy.get('#main-view').then(body => {
      body.find('#product-list');
    });
  });
});
