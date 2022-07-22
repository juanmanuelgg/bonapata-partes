import React from 'react';
export interface StepperEventsProps {
    initial?: number;
    onChange?: (count: number) => void;
}
export declare const StepperEvents: React.FunctionComponent<StepperEventsProps>;
