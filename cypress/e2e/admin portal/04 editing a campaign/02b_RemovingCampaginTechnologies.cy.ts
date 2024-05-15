describe("Removing Campaign Technologies", () => {
    it("Removing Technologies", () => {
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


        cy.log("\n\n================ Removing Techologies ==================\n\n")

        // removing the technologies
        cy.get(':nth-child(2) > .nav-tabs').click();
        cy.get(':nth-child(1) > .position-relative > .image-close-btn > .svg-inline--fa').click();
        cy.get('.shrink-btn').click();
       
        // refreshes the page after every delete
      
    })
})