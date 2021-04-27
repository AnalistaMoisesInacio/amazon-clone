/// <reference types="cypress" />
describe("Checkout", () => {
  context("Empty cart", () => {
    beforeEach(() => cy.visit("/checkout"));
    it("shows no product on empty cart", () => {
      cy.get('[class$="optionBasket"]').should("be.visible").click();

      cy.assertThatCartIsEmpty();
    });
  });

  context("Not empty cart", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.addTwoProductsToTheCart();
      cy.get('.header__link[href="/checkout"]').should("be.visible").click();
    });
    it("shows selected products", () => {
      cy.get(".checkout__title").contains("Your shopping basket");

      cy.assertCartHasProducts(2);

      cy.get(".checkoutProduct").first().should("be.visible");

      cy.get(".checkoutProduct").last().should("be.visible");
    });

    it("update numbers of products when removing one of them", () => {
      cy.assertCartHasProducts(2);

      cy.get(".checkoutProduct__info button").first().click();

      cy.assertCartHasProducts(1);
    });

    it("update numbers of products when removing all of them", () => {
      cy.assertCartHasProducts(2);
      Cypress._.times(2, () => {
        cy.get(".checkoutProduct__info button").first().click();
      });

      cy.assertCartHasProducts(0);

      cy.assertThatCartIsEmpty();
    });
  });
});
