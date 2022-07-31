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
export const Notification: React.FunctionComponent<INotificationProps> = (
    props: INotificationProps
) => {
    const {
        imageSrc,
        title = 'Platform',
        message = 'You have a new message!'
    } = props;
    return (
        <div className="p-6 max-w-sm mx-auto bg-white dark:bg-black rounded-xl shadow-lg flex items-center space-x-4">
            {imageSrc && (
                <div className="shrink-0">
                    <img
                        className="h-12 w-12 text-black dark:text-white"
                        src={imageSrc}
                    />
                </div>
            )}
            <div>
                <div className="text-xl font-medium text-black dark:text-white">
                    {title}
                </div>
                <p className="text-slate-500">{message}</p>
            </div>
        </div>
    );
};
