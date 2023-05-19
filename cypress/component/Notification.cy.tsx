import * as React from 'react';
import { Notification } from '../../src/components/Notification';
import { Notification as NotificationDist } from '../../';

const Component = Cypress.env('CI') ? NotificationDist : Notification;

describe('Notification.cy.tsx', () => {
    // ============================================================================================
    // EXPECTED BEHAVIOUR
    // ============================================================================================
    it('Mounts', () => {
        cy.mount(<Component />);
    });

    it('Mounts whit dark theme', () => {
        cy.mount(
            <div className="dark">
                <Component />
            </div>
        );
    });
});
