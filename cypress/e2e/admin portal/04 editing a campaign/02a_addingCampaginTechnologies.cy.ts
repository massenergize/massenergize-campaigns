describe("Adding Campaign Technologies", () => {
    it("Adding Technologies", () => {
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


        cy.log("\n\n================ Adding Techologies ==================\n\n")

        // adding the technologies
        cy.get(':nth-child(2) > .nav-tabs').click();
        cy.get('.dropdown-heading-dropdown-arrow').click();
        cy.get(':nth-child(5) > .select-item > .item-renderer > span').click({ force: true });
        cy.get(':nth-child(5) > .select-item > .item-renderer > input').check({ force: true });
        cy.get(':nth-child(7) > .select-item').click({ force: true });
        cy.get(':nth-child(7) > .select-item > .item-renderer > input').uncheck({ force: true });
        cy.get(':nth-child(10) > .select-item > .item-renderer').click({ force: true });
        cy.get(':nth-child(10) > .select-item > .item-renderer > input').uncheck({ force: true });
        cy.get(':nth-child(4) > .select-item > .item-renderer').click({ force: true });
        cy.get(':nth-child(4) > .select-item > .item-renderer > input').check({ force: true });
        cy.get('.options > :nth-child(2) > .select-item > .item-renderer > span').click({ force: true });
        cy.get('.options > :nth-child(2) > .select-item > .item-renderer > input').check({ force: true });
        cy.get(':nth-child(3) > .select-item > .item-renderer').click({ force: true });
        cy.get(':nth-child(3) > .select-item > .item-renderer > input').check({ force: true });
        cy.get('.dropdown-heading-dropdown-arrow').click({ force: true });
        cy.get('.px-3.py-2.btn.btn-primary').click({force : true});
        cy.get('.toast-header').should('contain', 'Success');
    })
})