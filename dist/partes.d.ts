/**
 * Una librería libre de componentes para React, escrita en Typescript.
 *
 * @packageDocumentation
 */

import { default as React_2 } from 'react';

/**
 * La interfaz que cumplen las propiedades del componente SpeedDial.
 * @public
 */
export declare interface ISpeedDialProps {
    /**
     * Distancia del borde derecho a la que se ubicara el Speed Dial. Por defecto son 40px.
     * @public
     */
    right?: string;
    /**
     * Distancia del borde inferior a la que se ubicara el Speed Dial. Por defecto son 40px.
     * @public
     */
    bottom?: string;
    /**
     * Cantidad de capaz que se elevara el Speed Dial. Por defecto es 9.
     * @public
     */
    zIndex?: number;
    /**
     * El mapa con todos los pathnames esperados y la url de su icono.
     * @public
     */
    pathnames?: Map<string, string>;
}

/**
 * La interfaz que cumplen las propiedades del componente IStepperEventsProps.
 * @public
 */
export declare interface IStepperEventsProps {
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
 * La interfaz que cumplen las propiedades del componente IStepperProps.
 * @public
 */
export declare interface IStepperProps {
    /**
     * Valor inicial del contador.
     * @public
     */
    initial?: number;
}

/**
 * Un boton de favoritos que muestra los pathnames que el usuario va guardando mientras navega las paginas.
 * Conocido como Speed Dial, permite el acceso rapido a las paginas de interes del usuario.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @public
 */
export declare const SpeedDial: React_2.FunctionComponent<ISpeedDialProps>;

/**
 * Componente que muestra un contador que puede incrementar o decrementar su valor por 1 unidad cada vez.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @public
 */
export declare const Stepper: React_2.FunctionComponent<IStepperProps>;

/**
 * Componente que muestra un contador que puede incrementar o decrementar su valor por 1 unidad cada vez.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @public
 */
export declare const StepperEvents: React_2.FunctionComponent<IStepperEventsProps>;

export { }
