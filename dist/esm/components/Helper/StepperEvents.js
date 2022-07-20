import React, { useState } from 'react';
export const StepperEvents = (props) => {
    const { initial = 0, onChange = (count) => {
        console.log(count);
    } } = props;
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
    return (React.createElement("div", { "data-testid": "stepper" },
        React.createElement("button", { "aria-label": "decrement", onClick: decrement }, "-"),
        count,
        React.createElement("button", { "aria-label": "increment", onClick: increment }, "+")));
};
//# sourceMappingURL=StepperEvents.js.map