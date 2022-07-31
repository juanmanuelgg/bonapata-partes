import React from 'react';
/**
 * La interfaz que cumplen las propiedades del componente Notification.
 * @public
 */
export interface INotificationProps {
    /**
     * Imagen que acompaña la notificación.
     * @public
     */
    imageSrc?: string;
    /**
     * Titulo de la notificación.
     * @public
     */
    title?: string;
    /**
     * Mensaje a mostrar en la notificación.
     * @public
     */
    message?: string;
}
/**
 * Un contenedor rectangolar apara notificaciones con logo, remitente y mensaje.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @public
 */
export declare const Notification: React.FunctionComponent<INotificationProps>;
//# sourceMappingURL=Notification.d.ts.map
