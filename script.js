// Adjusted Cypress test
cy.visit(baseUrl + "/main.html");

// Wait for elements to be visible before asserting
cy.get(".r2c1", { timeout: 10000 }).should("have.class", "col-md-4");
cy.get(".r2c2", { timeout: 10000 }).should("have.class", "col-md-4");

// Optionally, add a wait and offset check
cy.wait(2000); // Adjust the wait time as needed
cy.get(".r2c1", { timeout: 10000 }).should("have.class", "offset-md-2");
