import React, { useState } from 'react';

/**
 * La interfaz que cumplen las propiedades del componente IStepperProps.
 * @public
 */
export interface IStepperProps {
    /**
     * Valor inicial del contador.
     * @public
     */
    initial?: number;
}

/**
 * Componente que muestra un contador que puede incrementar o decrementar su valor por 1 unidad cada vez.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @public 
 */
export const Stepper: React.FunctionComponent<IStepperProps> = (
    props: IStepperProps
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
