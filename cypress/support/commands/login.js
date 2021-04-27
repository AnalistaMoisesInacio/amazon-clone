Cypress.Commands.add("fillLoginForm", (userEmail, password) => {
  cy.get('[type="email"]').type(userEmail);
  cy.get('[type="password"]').type(password, { log: false });
});

Cypress.Commands.add("login", (userEmail, password) => {
  if (userEmail === "") {
    cy.fillLoginForm(password);
    cy.get(".login__signInBtn").click();
  } else {
    cy.fillLoginForm(userEmail, password);
    cy.get(".login__signInBtn").click();
  }
});
