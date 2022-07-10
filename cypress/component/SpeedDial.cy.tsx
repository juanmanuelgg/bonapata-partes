import * as React from 'react';
import { mount } from '@cypress/react';
import { SpeedDial } from '../../dist/esm/components/SpeedDial';

describe('SpeedDial.cy.tsx', () => {
    it('playground', () => {
        mount(<SpeedDial />);
    });
});
