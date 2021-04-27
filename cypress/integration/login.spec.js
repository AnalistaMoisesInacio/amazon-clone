/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => cy.visit("/login"));
  it("alerts about badly formatted email", () => {});

  it("alerts about invalid password", () => {});

  it("alerts about unnexisting user", () => {});

  it("sucessfully logs in", () => {});

  context('Create account', () => {
      it('alerts about already existing user', () => {
          
      });
  });
});
