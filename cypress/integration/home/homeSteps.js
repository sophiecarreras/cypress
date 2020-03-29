import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When('I open the Shapermint page', () => {
  cy.visit(Cypress.config().baseUrl);
})

Then('I see {string} in the title', (title) => {
  cy.title().should('include', title);
})