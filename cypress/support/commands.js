Cypress.Commands.add("addTwoProductsToTheCart", () => {
  Cypress._.times(2, () => {
    cy.get(".product button").first().click();
  })
})

  Cypress.Commands.add("assertThatCartIsEmpty", () => {
    cy.get("h2").contains("Your shopping basket is empty").should("be.visible");

    cy.get("p")
      .contains("You have no items in your basket.")
      .should("be.visible");
  })

  Cypress.Commands.add("assertCartHasProducts", (n) => {
    cy.get(".checkoutProduct").should("have.length", n);
  })
