/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => cy.visit("/login"));
  it("alerts about badly formatted email", () => {
    cy.get('[type="email"]').type("invalid-email.com");
    cy.get(".login__signInBtn").click();

    cy.on("window:alert", (str) =>
      expect(str).to.equal("The email address is badly formatted.")
    );
  });

  it("alerts about invalid password", () => {
    cy.login(" ", "invalidpassword");
    cy.get(".login__signInBtn").click();

    cy.on("window:alert", (str) =>
      expect(str).to.equal(
        "The email address is badly formatted."
      )
    );
  });

  it("alerts about unnexisting user", () => {
    cy.login("unnexisting-user@example.com", "somepassword");

    cy.on("window:alert", (str) =>
      expect(str).to.contain(
        "There is no user record corresponding to this identifier. The user may have been deleted."
      )
    );
  });

  it.skip("sucessfully logs in", () => {

    cy.login(Cypress.env("user_email"), Cypress.env("user_password"));
     assertUserIsLoggedIn();
  });

  it.skip("successfully logs out", () => {
    cy.login(Cypress.env("user_email"), Cypress.env("user_password"));

    assertUserIsLoggedIn();

    cy.get(".header__optionLineTwo").contains("Sign Out").click();

    cy.url().should("be.equal", `${Cypress.config("baseUrl")}/login`);
  });

  function assertUserIsLoggedIn() {
    cy.get(".header__optionLineOne")
      .contains(`Hello ${Cypress.env("user_email")}`)
      .should("be.visible");
  }

  context.skip("Create account", () => {
    it("alerts about already existing user", () => {
      cy.fillLoginForm(Cypress.env("user_email"), "some-other-secret-password");
      cy.get(".login__registerBtn").click();

      cy.on("window:alert", (str) =>
        expect(str).to.equal(
          "The email address is already in use by another account."
        )
      );
    });
  });
});
