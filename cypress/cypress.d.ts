import { MountOptions, MountReturn } from 'cypress/react';

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Mounts a React node
             * @param component React Node to mount
             * @param options Additional options to pass into mount
             */
            mount(
                component: React.ReactNode,
                options?: MountOptions
            ): Cypress.Chainable<MountReturn>;

            /**
             * Get one or more DOM elements by the data-cy attribute.
             * @param selector A data-cy attribute value used to filter matching DOM elements.
             * @param options Pass in an options object to change the default behavior of cy.get(). Reference from cypress.
             */
            getByDataCy<E extends Node = HTMLElement>(
                selector: string,
                options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
            ): Chainable<JQuery<E>>;
        }
    }
}
