describe("Removing Campaign Events", () => {
    it("Removing Events", () => {
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


        cy.log("\n\n================ Removing Events ==================\n\n")

        // Removing the Events
        cy.get(':nth-child(5) > .nav-tabs').click();

        // Removing new event 

        cy.get('table').find('tr').then(($rows) => {
            const initialRowCount = $rows.length;
            cy.log('Initial table row count:', initialRowCount);
            cy.get(':nth-child(2) > :nth-child(6) > .btn > span').click();
                
            // Waiting for the deletion to complete 
            cy.wait(2000);

            // Checking new table row count
            cy.get('table').find('tr').then(($newRows) => {
                const newRowCount = $newRows.length;
                cy.log('Table row count after deletion:', newRowCount);

                expect(initialRowCount - 1).to.equal(newRowCount);
            });
        });
    })
})