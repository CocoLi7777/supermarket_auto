describe('Page visit', function() {
    it('Uplift post', function() {
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit(Cypress.env('ROOT'))
        cy.get('#login_place').then((body) => {
            if(!body.find(Cypress.env('USERNAME')).length > 0) {
                cy.get('#login_place').contains('登陆').click()
                cy.get('#telTxtLogin').type(Cypress.env('USERNAME'))
                cy.get('#passShow').type(Cypress.env('PASSWORD'))
                cy.get('#cookietime_LAFCI').click()
                cy.get('#postBtn').click()
            }
        })
        cy.visit(Cypress.env('POST'))
        cy.get('#k_refresh').contains('提升帖子').click()
        cy.get('#fwin_k_refresh').contains('确定').click()

    })
    
  })
