describe("Searching for a campaign", () => {

    it("Search for a campaign", () => {
        cy.log("Visiting the MassEnergize campaigns site!")
        cy.visit("/");
        cy.log("Logging into the Admin Portal!")
        cy.get(':nth-child(1) > .form-control').type('test@skilledhq.com');
        cy.get(':nth-child(2) > .form-control').type('123456');
        cy.get('.btn-primary > span').click();

        // searching for data in the table
        cy.get('.shrink-btn').click();
        cy.get('.searchbar').type('if you call ');


        // checking if data exist on the table
        cy.get('table tr:is(:first-child)')  
        .each(($tr, index) => {  
            if (index === 1) {
                cy.wrap($tr).find('td, th')  
                .contains('IF YOU CALL I WILL ANSWER') 
            } 
        });
        
    })
})
