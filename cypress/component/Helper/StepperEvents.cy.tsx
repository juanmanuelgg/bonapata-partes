/**
 * Reference:
 * https://docs.cypress.io/guides/component-testing/mounting-react
 * https://docs.cypress.io/guides/component-testing/testing-react
 * https://docs.cypress.io/guides/component-testing/events-react
 */
import * as React from 'react';
import { mount } from 'cypress/react';
import { Stepper } from '../../../dist/esm/components/Helper/StepperEvents';

const stepperSelector = '[data-testid=stepper]';
const incrementSelector = '[aria-label=increment]';
const decrementSelector = '[aria-label=decrement]';

describe('<Stepper>', () => {
    it('mounts', () => {
        mount(<Stepper />);
    });

    it('stepper should default to 0', () => {
        // Arrange
        mount(<Stepper />);
        // Assert
        cy.get(stepperSelector).should('contain.text', 0);
    });

    it('supports an "initial" prop to set the value', () => {
        // Arrange
        mount(<Stepper initial={100} />);
        // Assert
        cy.get(stepperSelector).should('contain.text', 100);
    });

    it('can be incremented', () => {
        // Arrange
        mount(<Stepper />);
        // Act
        cy.get(incrementSelector).click();
        // Assert
        cy.get(stepperSelector).should('contain.text', 1);
    });

    it('can be decremented', () => {
        // Arrange
        mount(<Stepper />);
        // Act
        cy.get(decrementSelector).click();
        // Assert
        cy.get(stepperSelector).should('contain.text', -1);
    });

    it('has an initial counter that can be incremented and decremented', () => {
        mount(<Stepper initial={100} />);
        cy.get(stepperSelector).should('contain.text', 100);
        cy.get(incrementSelector).click();
        cy.get(stepperSelector).should('contain.text', 101);
        cy.get(decrementSelector).click().click();
        cy.get(stepperSelector).should('contain.text', 99);
    });

    it('clicking + fires a change event with the incremented value', () => {
        // Arrange
        const onChangeSpy = cy.spy().as('onChangeSpy');
        mount(<Stepper />, { props: { onChange: onChangeSpy } });
    });

    it('clicking + fires a change event with the incremented value', () => {
        // Arrange
        const onChangeSpy = cy.spy().as('onChangeSpy');
        mount(<Stepper onChange={onChangeSpy} />);
        // Act
        cy.get(incrementSelector).click();
    });

    it('clicking + fires a change event with the incremented value', () => {
        // Arrange
        const onChangeSpy = cy.spy().as('onChangeSpy');
        mount(<Stepper onChange={onChangeSpy} />);
        // Act
        cy.get(incrementSelector).click();
        // Assert
        cy.get('@onChangeSpy').should('have.been.called.with', 1);
    });
});
