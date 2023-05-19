import * as React from 'react';
import DarkModeToogle from '../support/DarkModeToogle';
import { SpeedDial } from '../../src/components/SpeedDial';
import { SpeedDial as SpeedDialDist } from '../../';

const Component = Cypress.env('CI') ? SpeedDialDist : SpeedDial;

describe('SpeedDial.cy.tsx', () => {
    // ============================================================================================
    // EXPECTED BEHAVIOUR
    // ============================================================================================
    it('Mounts', () => {
        cy.mount(<Component />);
    });

    it('Should default to an empty list of favorites', () => {
        // Arrange
        cy.mount(<Component />);
        // Assert
        cy.getByDataCy('favorite-span-0').should('not.exist');
        // Act
        cy.getByDataCy('main-button').click();
        // Assert
        cy.getByDataCy('favorite-span-0').should('not.exist');
    });

    it('Can add a favorite', () => {
        // Arrange
        cy.mount(<Component />);
        // Act
        cy.getByDataCy('add-button').click();
        // Assert
        cy.getByDataCy('favorite-goto-button-0').should('be.visible');
    });

    it('Can remove a favorite', () => {
        // Arrange
        cy.mount(<Component />);
        // Act
        cy.getByDataCy('add-button').click();
        // Assert
        cy.getByDataCy('favorite-goto-button-0').should('be.visible');
        // Act
        cy.getByDataCy('favorite-goto-button-0').trigger('mouseover');
        // Assert
        cy.getByDataCy('favorite-delete-button-0').should('be.visible');
        // Act
        cy.getByDataCy('favorite-delete-button-0').click();
        // Assert
        cy.getByDataCy('favorite-span-0').should('not.exist');
    });

    it('Show dark mode', () => {
        // Arrange
        cy.mount(
            <>
                <Component />
                <DarkModeToogle />
            </>
        );
        // Act
        cy.getByDataCy('add-button').click();
        // Assert
        cy.getByDataCy('favorite-goto-button-0').should('be.visible');
        // TODO ... evaluar color
    });
    // TODO ... make more rigorous tests
});
