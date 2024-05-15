describe("Creating a new Comment on Campaign", () => {

    it("Creating a new Comment", function () {
        cy.log("Visiting the MassEnergize campaigns site!")
        cy.visit("/");
        cy.log("\n\nLogging into the Admin Portal!\n\n")
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


        cy.log("\n\n================ Creating new comment ==================\n\n")

        // creating a new comment
        cy.get(':nth-child(7) > .nav-tabs').click();
        cy.get('.btn-fixed > :nth-child(2)').click();
        cy.get(':nth-child(1) > .col > .cusdropdown-container > .cusdropdown > .cusdropdown-toggle').click();
        cy.get(':nth-child(1) > .col > .cusdropdown-container > .cusdropdown-menu > [style="display: flex; flex-direction: column; max-height: 250px;"] > :nth-child(1) > .cusdropdown-item').click();
        cy.get(':nth-child(2) > .col > .cusdropdown-container > .cusdropdown > .cusdropdown-toggle').click();
        cy.get(':nth-child(2) > .col > .cusdropdown-container > .cusdropdown-menu > [style="display: flex; flex-direction: column; max-height: 250px;"] > :nth-child(1) > .cusdropdown-item').click();
        cy.get('.input-textarea').click().type("This is a new comment using cypress 001")
        cy.get('.col > div > .btn-fixed > :nth-child(2)').click();
        cy.get('.toast-header').should('contain', 'Success');
        cy.get('.comment-card:nth-child(1) > .comment-text').contains("This is a new comment using cypress 001");
        // cy.get(':nth-child(1) > .comment-text').click();
        // cy.get('.comment-card-expand').contains("This is a new comment using cypress 001");
    })
})