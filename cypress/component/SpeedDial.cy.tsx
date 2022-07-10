import * as React from 'react';
import { SpeedDial } from '../../dist/esm/components/SpeedDial';

describe('SpeedDial.cy.tsx', () => {
    it('playground', () => {
        cy.mount(<SpeedDial />);
    });
});
