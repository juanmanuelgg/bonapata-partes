/// <reference types="cypress" />

import { mount } from 'cypress/react';
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// -- JMGG: This declarations goes better in cypress/cypress.d.ts
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('mount', (component, options) => {
    // Wrap any parent components needed
    // ie: return mount(<MyProvider>{component}</MyProvider>, options)
    return mount(component, options);
});

/* Examples:
cy.getByDataCy("example-selector").should("be.visible");
cy.getByDataCy("example-selector").click();
cy.getByDataCy("example-selector").should("not.exist");
cy.getByDataCy("example-selector").should("contain", "Example");
cy.getByDataCy("example-selector")
    .should("be.visible")
    .and("have.text", "Example");
*/
Cypress.Commands.add('getByDataCy', (selector, ...args) => {
    return cy.get(`[data-cy=${selector}]`, ...args);
});
