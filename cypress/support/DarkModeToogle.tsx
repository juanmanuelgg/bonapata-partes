import { DarkModeToggle } from '../../src/components/DarkModeToggle';
import { DarkModeToggle as DarkModeToggleDist } from '../../';

const Component = Cypress.env('CI') ? DarkModeToggleDist : DarkModeToggle;

export default Component;
