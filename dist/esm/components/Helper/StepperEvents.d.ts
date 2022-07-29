import React from 'react';
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
export declare const StepperEvents: React.FunctionComponent<IStepperEventsProps>;
//# sourceMappingURL=StepperEvents.d.ts.map
