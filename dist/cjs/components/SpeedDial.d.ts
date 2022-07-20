import React from 'react';
export interface SpeedDialProps {
    right?: string;
    bottom?: string;
    zIndex?: number;
    pathnames?: Map<string, string>;
}
export declare const SpeedDial: React.FunctionComponent<SpeedDialProps>;
