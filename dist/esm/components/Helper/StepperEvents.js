import React, { useState } from 'react';
/**
 * Componente que muestra un contador que puede incrementar o decrementar su valor por 1 unidad cada vez.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @public
 */
export const StepperEvents = (props) => {
    const {
        initial = 0,
        onChange = (count) => {
            console.log(count);
        }
    } = props;
    const [count, setCount] = useState(initial);
    /**
     * Función con la que se incrementa el contador.
     * @internal
     */
    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        onChange(newCount);
    };
    /**
     * Función con la que se decrementa el contador.
     * @internal
     */
    const decrement = () => {
        const newCount = count - 1;
        setCount(newCount);
        onChange(newCount);
    };
    return React.createElement(
        'div',
        { 'data-testid': 'stepper' },
        React.createElement(
            'button',
            { 'aria-label': 'decrement', onClick: decrement },
            '-'
        ),
        count,
        React.createElement(
            'button',
            { 'aria-label': 'increment', onClick: increment },
            '+'
        )
    );
};
//# sourceMappingURL=StepperEvents.js.map
