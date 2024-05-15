describe('Logging in', () => {

  it('MECampaignLoginCredentials', function () {
    cy.log("Visiting the MassEnergize campaigns site!")
    cy.visit('/');
    cy.log("Logging into the Admin Portal!")
    cy.get(':nth-child(1) > .form-control').type('test@skilledhq.com');
    cy.get(':nth-child(2) > .form-control').type('123456');
    cy.get('.btn-primary > span').click();
    cy.get('.shrink-btn > .svg-inline--fa').click();
    cy.log("Checking to see that there is 'All Campaigns' text on the page ")
    cy.contains("All Campaigns")
  });
})

