describe("Editing Campaign Communities", () => {

    it("Editing Communities", () => {
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



        cy.log("\n\n================ Editing the Community section ==================\n\n")

        // editing the communities page
        cy.get(':nth-child(3) > .nav-tabs').click({force : true});
        cy.get('.dropdown-heading-value > span').click({force : true});
        cy.get('.options > :nth-child(2) > .select-item > .item-renderer').click({force : true});
        cy.get('.options > :nth-child(2) > .select-item > .item-renderer > input').check({force : true});
        cy.get(':nth-child(3) > .select-item > .item-renderer').click({force : true});
        cy.get(':nth-child(3) > .select-item > .item-renderer > input').check({force : true});
        cy.get(':nth-child(4) > .select-item > .item-renderer').click({force : true});
        cy.get(':nth-child(4) > .select-item > .item-renderer > input').check({force : true});
        cy.get('.dropdown-heading-dropdown-arrow > path').click({force : true});
        cy.get('.btn-fixed').click({force : true});
        cy.get(':nth-child(2) > .col > .accordion > .accordion-header').click({force : true});
        cy.get('.m-3 > :nth-child(2) > :nth-child(1) > .input-container > .input').clear();
        cy.get('.m-3 > :nth-child(2) > :nth-child(1) > .input-container > .input').type('https://www.google.com');
        cy.get('.m-3 > :nth-child(2) > :nth-child(2) > .input-container > .input').clear();
        cy.get('.m-3 > :nth-child(2) > :nth-child(2) > .input-container > .input').type('Aimee001');
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(1) > .input-container > .input').clear();
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(1) > .input-container > .input').type('New link label');
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(2) > .input-container > .input').clear();
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(2) > .input-container > .input').type('https://www.google.com');
        cy.get('.row-flex > .btn').click({force : true});
        cy.get('.px-4 > .btn-fixed > :nth-child(2)').click({force : true});
        cy.get('.toast-header').should('contain', 'Success');
        cy.get('.m-3 > :nth-child(2) > :nth-child(2) > .input-container > .input').clear();
        cy.get('.m-3 > :nth-child(2) > :nth-child(2) > .input-container > .input').type('Aimee222');
        cy.get('.px-4 > .btn-fixed > :nth-child(2)').click({force : true});
        cy.get('.toast-header').should('contain', 'Success');

    })
})