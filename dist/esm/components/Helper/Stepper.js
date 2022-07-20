import React, { useState } from 'react';
export const Stepper = (props) => {
    const { initial = 0 } = props;
    const [count, setCount] = useState(initial);
    return (React.createElement("div", { "data-testid": "stepper" },
        React.createElement("button", { "aria-label": "decrement", onClick: () => setCount(count - 1) }, "-"),
        count,
        React.createElement("button", { "aria-label": "increment", onClick: () => setCount(count + 1) }, "+")));
};
//# sourceMappingURL=Stepper.js.map