import React from 'react';
/**
 * La interfaz que cumplen las propiedades del componente SpeedDial.
 * @public
 */
export interface ISpeedDialProps {
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
 * Un boton de favoritos que muestra los pathnames que el usuario va guardando mientras navega las paginas.
 * Conocido como Speed Dial, permite el acceso rapido a las paginas de interes del usuario.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @public
 */
export declare const SpeedDial: React.FunctionComponent<ISpeedDialProps>;
//# sourceMappingURL=SpeedDial.d.ts.map
