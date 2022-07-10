import React, { useState } from 'react';

export interface StepperProps {
    initial?: number;
}

export const Stepper: React.FunctionComponent<StepperProps> = (
    props: StepperProps
) => {
    const { initial = 0 } = props;
    const [count, setCount] = useState(initial);

    return (
        <div data-testid="stepper">
            <button aria-label="decrement" onClick={() => setCount(count - 1)}>
                -
            </button>
            {count}
            <button aria-label="increment" onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
};
