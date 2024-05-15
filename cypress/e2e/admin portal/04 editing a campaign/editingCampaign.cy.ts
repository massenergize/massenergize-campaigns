describe("Editing a Campaign", () => {

    it("Editing a Campaign", () => {
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

        cy.log("\n\n================ Editing the information section ==================\n\n")
        // Edit Information Section of the first

        cy.get('.accordion-title').click();
        cy.get('.p-3 > .mt-0.row > :nth-child(1) > .input-container > #title').clear()
        cy.get('.p-3 > .mt-0.row > :nth-child(1) > .input-container > #title').type('Getting Started with Cypress');
        cy.get('#description').clear()
        cy.get('#description').type('This is just a simple and short description');
        cy.get('#coaches').clear()
        cy.get('#coaches').type('These are my coaches');
        cy.get(':nth-child(4) > .row > .col > .input-container > #title').click();
        cy.get(':nth-child(4) > .row > .col > .input-container > #title').clear();
        cy.get(':nth-child(4) > .row > .col > .input-container > #title').type('Below are the communities that are involved in the campaign');
        cy.get('#footer_title').clear()
        cy.get('#footer_title').type('interested? link up now');
        cy.get('#newsletter_description').clear()
        cy.get('#newsletter_description').type('Join to receive updates for this campaign');

        cy.get('.p-3 > .btn-fixed').click();
        cy.get('.toast-header').should('contain', 'Saved successfully!');


        // Editing the campaign titles and related

        cy.get('.px-4 > :nth-child(2) > .col > .input-container > #title').clear()
        cy.get('.px-4 > :nth-child(2) > .col > .input-container > #title').type('New Campaign For Cypress 01');
        cy.get('#Tagline').type('This is a tagline for a new campaign for cypress');
        cy.get('#startDate') 
        .then(($input) => {
            if ($input.attr('type') === 'date') {
            cy.log('The input type is date.');
        } else {
            cy.get('#startDate').clear()
            cy.get('#startDate').type("05-04-2024")
            cy.log('The input is not a date type.');
            }
        });
        cy.get('#endDate') 
        .then(($input) => {
            if ($input.attr('type') === 'date') {
            cy.log('The input type is date.');
        } else {
            // cy.get('#endDate').type("07-05-2024")
            cy.log('The input is not a date type.');
            }
        });


        cy.get('#about-us-title').clear()
        cy.get('#about-us-title').type('This is the campaign about us section');


        // for the image uploads
        // cy.get(':nth-child(7) > :nth-child(1) > .file-upload > :nth-child(1) > .file-input-label > .position-relative > .preview-image').click();
        // cy.get('#du4enprimary_logo').click();
        // cy.get('.col > .btn-fixed').click();
        // cy.get(':nth-child(2) > .file-upload > :nth-child(1) > .file-input-label > .position-relative > .preview-image').click();
        // cy.get('#idduisecondary_logo').click();
        // cy.get(':nth-child(8) > .col > .file-upload > :nth-child(1) > .file-input-label > .position-relative > .preview-image').click();
        // cy.get('#n6e0fcampaign_image').click();


        // saving the data 
        cy.get('.col > .btn-fixed').click({force: true});
        cy.get('.toast-header').should('contain', 'Success');



        cy.log("\n\n================ Editing the Techology section ==================\n\n")

        // editing the technologies page
        cy.get(':nth-child(2) > .nav-tabs').click();
        cy.get('.dropdown-heading-dropdown-arrow').click();
        cy.get(':nth-child(5) > .select-item > .item-renderer > span').click({ force: true });
        cy.get(':nth-child(5) > .select-item > .item-renderer > input').check({ force: true });
        cy.get(':nth-child(7) > .select-item').click({ force: true });
        cy.get(':nth-child(7) > .select-item > .item-renderer > input').uncheck({ force: true });
        cy.get(':nth-child(10) > .select-item > .item-renderer').click({ force: true });
        cy.get(':nth-child(10) > .select-item > .item-renderer > input').uncheck({ force: true });
        cy.get('.options > :nth-child(2) > .select-item > .item-renderer > span').click({ force: true });
        cy.get('.options > :nth-child(2) > .select-item > .item-renderer > input').check({ force: true });
        cy.get(':nth-child(3) > .select-item > .item-renderer').click({ force: true });
        cy.get(':nth-child(3) > .select-item > .item-renderer > input').check({ force: true });
        cy.get('.dropdown-heading-dropdown-arrow').click({ force: true });
        cy.get('.py-2').click({ force: true });
        cy.get('.toast-header').should('contain', 'Success');



        cy.log("\n\n================ Editing the Community section ==================\n\n")

        // editing the communities page
        cy.get(':nth-child(3) > .nav-tabs').click();
        cy.get('.dropdown-heading-value').click();
        cy.get(':nth-child(14) > .select-item > .item-renderer').click();
        cy.get(':nth-child(14) > .select-item > .item-renderer > input').uncheck({ force: true });
        cy.get(':nth-child(9) > .select-item > .item-renderer').click();
        cy.get(':nth-child(9) > .select-item > .item-renderer > input').check({ force: true });
        cy.get(':nth-child(4) > .select-item > .item-renderer').click();
        cy.get(':nth-child(4) > .select-item > .item-renderer > input').check({ force: true });
        cy.get('.dropdown-heading-dropdown-arrow').click();
        cy.get('.btn-fixed').click();
        cy.get(':nth-child(2) > .col > .accordion > .accordion-header').click();
        cy.get('.m-3 > :nth-child(2) > :nth-child(1) > .input-container > .input').clear();
        cy.get('.m-3 > :nth-child(2) > :nth-child(1) > .input-container > .input').type('https://www.google.com');
        cy.get('.m-3 > :nth-child(2) > :nth-child(2) > .input-container > .input').clear();
        cy.get('.m-3 > :nth-child(2) > :nth-child(2) > .input-container > .input').type('Aimee');
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(1) > .input-container > .input').clear();
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(1) > .input-container > .input').type('Another link');
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(2) > .input-container > .input').clear();
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(2) > .input-container > .input').type('https://www.google.com');
        cy.get('.row-flex > .btn').click();
        cy.get('.m-3 > :nth-child(2) > :nth-child(2) > .input-container > .input').clear();
        cy.get('.m-3 > :nth-child(2) > :nth-child(2) > .input-container > .input').type('Aimee01');
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(1) > .input-container > .input').clear();
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(1) > .input-container > .input').type('Another link 01');
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(2) > .input-container > .input').clear();
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(2) > .input-container > .input').type('https://www.google.com');
        cy.get('[style="padding: 10px 0px; margin-bottom: 10px;"] > .btn').click();
        cy.get(':nth-child(1) > div.touchable-opacity > .touchable-opacity').click();
        cy.get('.px-4 > .btn-fixed').click();
        cy.get('.toast-header').should('contain', 'Success');

        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(1) > .input-container > .input').clear();
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(1) > .input-container > .input').type('another link 01');
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(2) > .input-container > .input').clear();
        cy.get('[style="margin: 10px 0px; border: 2px dashed rgb(222, 222, 222); padding: 15px;"] > .row > :nth-child(2) > .input-container > .input').type('https://www.google.com');
        cy.get('[style="padding: 10px 0px; margin-bottom: 10px;"] > .btn').click();
        cy.get('.px-4 > .btn-fixed').click();
        cy.get('.toast-header').should('contain', 'Success');

        cy.get(':nth-child(1) > div.touchable-opacity > .touchable-opacity').click();
        cy.get('.px-4 > .btn-fixed').click();
        cy.get('.toast-header').should('contain', 'Success');



        cy.log("\n\n================ Editing the manager's section ==================\n\n")
        // editing the manager's page
        cy.log("\n\n================ Refer to the 'addingManager.cy.ts' file for adding a manger and/or\n\nthe 'removeAddedManager.cy,ts' for removing an added manager ==================\n\n")

        
        cy.log("\n\n================ Editing the event's section ==================\n\n")
        
        


    })
})
