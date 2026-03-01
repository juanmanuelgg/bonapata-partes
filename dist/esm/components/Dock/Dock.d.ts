import React from 'react';
import './Dock.css';
export interface DockItem {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
}
export interface DockProps {
    items: DockItem[];
    iconSize?: number;
    magnification?: number;
    distance?: number;
    className?: string;
    'aria-label'?: string;
}
export declare const Dock: React.FC<DockProps>;
export default Dock;
//# sourceMappingURL=Dock.d.ts.map
