describe("Creating a new Campaign", () => {

    it("MECampaignCreateCampaign", function () {
        cy.log("Visiting the MassEnergize campaigns site!")
        cy.visit("/");
        cy.log("Logging into the Admin Portal!")
        cy.get(':nth-child(1) > .form-control').type('test@skilledhq.com');
        cy.get(':nth-child(2) > .form-control').type('123456');
        cy.get('.btn-primary > span').click();

        cy.log("Creating a campaign!")
        cy.get('.shrink-btn > .svg-inline--fa').click();
        cy.get('.rounded-1').click();
        cy.get('#title').type('New Campaign For Cypress');
        cy.get('.dropdown-heading-value').click();
        cy.get('.options > :nth-child(2) > .select-item > .item-renderer > span').click();
        cy.get('.options > :nth-child(2) > .select-item > .item-renderer > input').check();
        cy.get(':nth-child(5) > .select-item > .item-renderer > span').click();
        cy.get(':nth-child(5) > .select-item > .item-renderer > input').check();
        cy.get(':nth-child(6) > .select-item > .item-renderer > span').click();
        cy.get(':nth-child(6) > .select-item > .item-renderer > input').check();
        cy.get(':nth-child(13) > .select-item').click();
        cy.get(':nth-child(13) > .select-item > .item-renderer > input').check();
        cy.get(':nth-child(16) > .select-item > .item-renderer > span').click();
        cy.get(':nth-child(16) > .select-item > .item-renderer > input').check();
        cy.get('.justify-content-center').click();
        cy.get('.dropdown-heading-dropdown-arrow').click();
        cy.get('.py-2').click();
        cy.get(':nth-child(2) > .sb-menu-item > p').click();
        cy.get('.shrink-btn').click();
        cy.contains("New Campaign For Cypress")

    })
})