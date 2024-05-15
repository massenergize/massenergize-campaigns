describe("Deleting a comment on Campaign", () => {

    it("Deleting Comments", function () {
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


        cy.log("\n\n================ Deleting a comment ==================\n\n")

        // Deleting a comment
        cy.get('.nav-tabs-container > :nth-child(7)').click();
        cy.get(':nth-child(1) > .mt-2 > .comment-delete-btn > p').click({force : true});
    })
})