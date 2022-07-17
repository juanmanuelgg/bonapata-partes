import React, { useState } from 'react';

export interface StepperEventsProps {
    initial?: number;
    onChange?: (count: number) => void;
}

export const StepperEvents: React.FunctionComponent<StepperEventsProps> = (
    props: StepperEventsProps
) => {
    const {
        initial = 0,
        onChange = (count: number) => {
            console.log(count);
        }
    } = props;
    const [count, setCount] = useState(initial);

    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        onChange(newCount);
    };

    const decrement = () => {
        const newCount = count - 1;
        setCount(newCount);
        onChange(newCount);
    };

    return (
        <div data-testid="stepper">
            <button aria-label="decrement" onClick={decrement}>
                -
            </button>
            {count}
            <button aria-label="increment" onClick={increment}>
                +
            </button>
        </div>
    );
};
