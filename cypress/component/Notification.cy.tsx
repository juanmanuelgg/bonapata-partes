import * as React from 'react';
import { Notification } from '../../src/components/Notification';

describe('Notification.cy.tsx', () => {
    // ============================================================================================
    // EXPECTED BEHAVIOUR
    // ============================================================================================
    it('Mounts', () => {
        cy.mount(<Notification />);
    });

    it('Mounts', () => {
        cy.mount(
            <div className="dark">
                <Notification />
            </div>
        );
    });
});
