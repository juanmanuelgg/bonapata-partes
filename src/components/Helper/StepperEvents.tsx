import React, { useState } from 'react';

/**
 * La interfaz que cumplen las propiedades del componente StepperEvents.
 * @public
 */
export interface IStepperEventsProps {
    /**
     * Valor inicial del contador.
     * @public
     */
    initial?: number;
    /**
     * Función espia con la que se informa al framework de pruebas que el contador ha cambiado su valor.
     * @internal
     */
    onChange?: (count: number) => void;
}

/**
 * Componente que muestra un contador que puede incrementar o decrementar su valor por 1 unidad cada vez.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @public
 */
export const StepperEvents: React.FunctionComponent<IStepperEventsProps> = (
    props: IStepperEventsProps
) => {
    const {
        initial = 0,
        onChange = (count: number) => {
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
