describe("Remove added Manager", () => {
    it('Remove manager', () => {
        // logging in
        cy.log("Visiting the MassEnergize campaigns site!")
        cy.visit("/");
        cy.log("Logging into the Admin Portal!")
        cy.get(':nth-child(1) > .form-control').type('test@skilledhq.com');
        cy.get(':nth-child(2) > .form-control').type('123456');
        cy.get('.btn-primary > span').click();


        // searching for a campaign in the table
        cy.get('.shrink-btn').click();
        cy.get('.searchbar').type('new campaign for cypress');
        cy.get('table tr:is(:first-child)')  
        .each(($tr, index) => {  
            if (index === 1) {
                cy.wrap($tr).find('td, th')  
                .contains('New Campaign For Cypress') 
            } 
        });
        cy.get(':nth-child(1) > [style="width: 100px;"] > .mr-2 > .btn-primary > .svg-inline--fa > path').click();
        cy.get('.shrink-btn').click();


        cy.log("\n\n================ Removing a manager ==================\n\n")
        // adding a manager
        cy.get(':nth-child(4) > .nav-tabs').click();
        cy.get(':nth-child(1) > [style="text-align: left;"] > div > .text-muted').click();
        cy.get('tbody > :nth-child(1) > [style="text-align: left;"]').click();
        cy.get('.btn-danger').click();
        cy.get('.modal-footer > .btn-primary').click();
        cy.get('.toast-header').should('contain', 'Success');

    })
})