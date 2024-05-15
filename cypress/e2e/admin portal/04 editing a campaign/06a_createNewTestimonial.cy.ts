describe("Creating a new Testimonial on Campaign", () => {

    it("Create a testimonial", function () {
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



        cy.log("\n\n================ Creating a new Testimonial ==================\n\n")

        cy.get(':nth-child(6) > .nav-tabs').click();
        cy.get('.btn-success > span').click();
        cy.get('.input').clear();
        cy.get('.input').type('A new cypress testimonial');
        cy.get(':nth-child(2) > .col > :nth-child(1) > [style="position: relative; display: block;"] > .full-width-selector').click();
        cy.get('.animate-drop-down > :nth-child(2)').click();
        cy.get(':nth-child(3) > .col > :nth-child(1) > [style="position: relative; display: block;"] > .full-width-selector').click();
        cy.get('.animate-drop-down > :nth-child(2)').click();
        cy.get(':nth-child(4) > .col > :nth-child(1) > [style="position: relative; display: block;"] > .full-width-selector').click();
        cy.get('.animate-drop-down > :nth-child(2)').click();
        cy.get('.col > .form-check > .form-check-label').click();
        cy.get('#live-checkbox').check();
        cy.get('.btn-fixed > :nth-child(2)').click();
        cy.get('.toast-header').should('contain', 'Success');

    })
})