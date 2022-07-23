import React, { useState } from 'react';
/**
 * Componente que muestra un contador que puede incrementar o decrementar su valor por 1 unidad cada vez.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @public
 */
export const Stepper = (props) => {
    const { initial = 0 } = props;
    const [count, setCount] = useState(initial);
    return (React.createElement("div", { "data-testid": "stepper" },
        React.createElement("button", { "aria-label": "decrement", onClick: () => setCount(count - 1) }, "-"),
        count,
        React.createElement("button", { "aria-label": "increment", onClick: () => setCount(count + 1) }, "+")));
};
//# sourceMappingURL=Stepper.js.map