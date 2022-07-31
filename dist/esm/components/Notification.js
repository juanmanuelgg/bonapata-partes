import React from 'react';
/**
 * Un contenedor rectangolar apara notificaciones con logo, remitente y mensaje.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @public
 */
export const Notification = (props) => {
    const {
        imageSrc,
        title = 'Platform',
        message = 'You have a new message!'
    } = props;
    return React.createElement(
        'div',
        {
            className:
                'p-6 max-w-sm mx-auto bg-white dark:bg-black rounded-xl shadow-lg flex items-center space-x-4'
        },
        imageSrc &&
            React.createElement(
                'div',
                { className: 'shrink-0' },
                React.createElement('img', {
                    className: 'h-12 w-12 text-black dark:text-white',
                    src: imageSrc
                })
            ),
        React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'text-xl font-medium text-black dark:text-white' },
                title
            ),
            React.createElement('p', { className: 'text-slate-500' }, message)
        )
    );
};
//# sourceMappingURL=Notification.js.map
