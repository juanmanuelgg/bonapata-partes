import React, { useEffect, useState } from 'react';

/**
 * Un boton que permite quitar o poner la clase dark del elemento html.
 * Lo que controla el modo oscuro o claro de los otros componentes.
 * @returns Un componente función de React renderizable.
 * @public
 */
export const DarkModeToggle: React.FunctionComponent = () => {
    const [useDarkMode, setUseDarkMode] = useState(false);

    function setButton(dark: boolean) {
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

    return (
        <button
            onClick={() => {
                setButton(!useDarkMode);
            }}
        >
            {useDarkMode ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                >
                    <circle fill="#000000" cx="10" cy="10" r="10" />
                    <path
                        fill="#ffffff"
                        d="M10,0 C21,0 21,21 10,20 C20,12 12,0 10,0"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                >
                    <circle fill="#999999" cx="10" cy="10" r="10" />
                    <circle fill="#ffff00" cx="10" cy="10" r="9" />
                </svg>
            )}
        </button>
    );
};
