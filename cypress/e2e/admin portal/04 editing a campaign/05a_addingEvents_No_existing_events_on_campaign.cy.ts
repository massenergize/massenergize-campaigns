describe("Adding Campaign Events", () => {
    it("Adding Events when No events exist on the campaign", () => {
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


        cy.log("\n\n================ Adding Events ==================\n\n")

        // adding the Events
        cy.get(':nth-child(5) > .nav-tabs').click();
        cy.get('span').click();
        cy.get(':nth-child(2) > .cusdropdown').click();
        cy.get(':nth-child(2) > .cusdropdown-menu > [style="display: flex; flex-direction: column; max-height: 250px;"] > :nth-child(1) > .cusdropdown-item').click();
        cy.get('.my-4 > .col > .cusdropdown-container > .cusdropdown > .cusdropdown-toggle').click();
        cy.get('.my-4 > .col > .cusdropdown-container > .cusdropdown-menu > [style="display: flex; flex-direction: column; max-height: 250px;"] > :nth-child(1) > .cusdropdown-item').click();
        cy.get('.btn-fixed').click();
        cy.get('.toast-header').should('contain', 'Success');

        // check if the event exist 
        cy.get('table tr:is(:first-child)')
            .each(($tr, index) => {
                if (index === 1) {
                    cy.wrap($tr).find('td, th')
                        .contains('Earth Day in Framingham')
                }
            });


        /* ==== End Cypress Studio ==== */
    })
})