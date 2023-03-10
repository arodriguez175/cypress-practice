/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Gets, types, and asserts", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Should be on a new url which
    // which includes "/commands/actions"
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it
    cy.get(".action-email").type("fake@email.com");

    // Verify that the value was updated
    cy.get(".action-email").should("have.value", "fake@email.com");

    // Outside this example, get an element by a data-* property
    // to isolate from changes.
    // See: https://docs.cypress.io/guides/references/best-practices#Selecting-Elements
  });
});
