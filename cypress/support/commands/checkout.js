Cypress.Commands.add("removeFirstProductFromTheCart", () => {
  cy.get(".checkoutProduct__info > button").first().click();
});

Cypress.Commands.add("assertCartHasProducts", (n) => {
  cy.get(".header__basketCount").should("be.visible").and("have.text", `${n}`);
});

Cypress.Commands.add("assertItHasProducts", (n) => {
  cy.get(".checkoutProduct").should("have.length", n);
});

Cypress.Commands.add("assertThatCartIsEmpty", () => {
  cy.get("h2").contains("Your shopping basket is empty").should("be.visible");
  cy.get("p")
    .contains("You have no items in your basket.")
    .should("be.visible");
  cy.assertCartHasProducts(0);
});
