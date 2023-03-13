/// <reference types="Cypress" />

describe("second practice spec", () => {
  it("should load the page", () => {
    cy.visit("index.html");
  });

  it("should contain the word Title", () => {
    cy.visit("index.html");
    cy.contains("Title");
  });

  it("should have a button that contains the word Click Me", () => {
    cy.visit("index.html");
    cy.get('[data-cy="submit"]').should("contain", "Click Me");
  });

  it("should click the button", () => {
    cy.visit("index.html");
    cy.get('[data-cy="submit"]').click();
  });
});
