import React, { useEffect, useState } from 'react';
/**
 * Un contenedor rectangolar apara notificaciones con logo, remitente y mensaje.
 * @returns Un componente función de React renderizable.
 * @public
 */
export const DarkModeToggle = () => {
    const [useDarkMode, setUseDarkMode] = useState(false);
    function setButton(dark) {
        if (dark) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode-bonapata', `${useDarkMode}`);
        setUseDarkMode(dark);
    }
    useEffect(() => {
        let currentValue = false;
        if (!('dark-mode-bonapata' in localStorage)) {
            currentValue = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;
        } else {
            const mode = localStorage.getItem('dark-mode-bonapata');
            currentValue = mode === 'true' ? true : false;
        }
        setButton(currentValue);
    }, []);
    return React.createElement(
        'button',
        {
            onClick: () => {
                setButton(!useDarkMode);
            }
        },
        useDarkMode
            ? React.createElement(
                  'svg',
                  {
                      xmlns: 'http://www.w3.org/2000/svg',
                      height: '20',
                      width: '20',
                      viewBox: '0 0 20 20'
                  },
                  React.createElement('circle', {
                      fill: '#000000',
                      cx: '10',
                      cy: '10',
                      r: '10'
                  }),
                  React.createElement('path', {
                      fill: '#ffffff',
                      d: 'M10,0 C21,0 21,21 10,20 C20,12 12,0 10,0'
                  })
              )
            : React.createElement(
                  'svg',
                  {
                      xmlns: 'http://www.w3.org/2000/svg',
                      height: '20',
                      width: '20',
                      viewBox: '0 0 20 20'
                  },
                  React.createElement('circle', {
                      fill: '#999999',
                      cx: '10',
                      cy: '10',
                      r: '10'
                  }),
                  React.createElement('circle', {
                      fill: '#ffff00',
                      cx: '10',
                      cy: '10',
                      r: '9'
                  })
              )
    );
};
//# sourceMappingURL=DarkModeToggle.js.map
