var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
import React, { useState, useMemo } from 'react';
/**
 * Componente que muestra el icono que deberia acompañar a cada uno de los favoritos.
 * Muestra el pathname como texto si en el mapa(pathnames) no existe un icono asociado.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @internal
 */
const IconContent = (props) => {
    const { pathname, pathnames = new Map() } = props;
    return React.createElement(
        React.Fragment,
        null,
        pathnames.has(pathname)
            ? React.createElement('img', {
                  src: pathnames.get(pathname),
                  alt: pathname,
                  width: '32px',
                  height: '32px'
              })
            : React.createElement('span', null, pathname)
    );
};
/**
 * Un boton de favoritos que muestra los pathnames que el usuario va guardando mientras navega las paginas.
 * Conocido como Speed Dial, permite el acceso rapido a las paginas de interes del usuario.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @public
 */
export const SpeedDial = (props) => {
    const {
        right = '40px',
        bottom = '40px',
        zIndex = 9,
        pathnames = new Map()
    } = props;
    const savedFavorites = localStorage.getItem('favorites') || '[]';
    let favorites = useMemo(() => {
        const answer = Array.from(new Set(JSON.parse(savedFavorites)));
        if (savedFavorites.length !== answer.length)
            localStorage.setItem('favorites', JSON.stringify(answer));
        return answer;
    }, [saveFavorite]);
    const show = new Array(favorites.length);
    show.fill(false);
    const [closeShow, setCloseShow] = useState(show);
    const [openSpeedDial, setOpenSpeedDial] = useState(false);
    const [lock, setLock] = useState(false);
    /**
     * Metodo auxiliar que permite esperar una cantidad de tiempo en ms.
     * A travez de la creacón de una promesa que resuelve en el tiempo parametrizado.
     * @param ms - Cantidad de milisegundos a esperar.
     * @returns Una promesa que resuelve al pasar los ms especificados.
     * @internal
     */
    function delay(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((res) => {
                setTimeout(res, ms);
            });
        });
    }
    /**
     * Metodo auxiliar que permite espera las animaciones en ejecución.
     * @internal
     */
    function waitLock() {
        return __awaiter(this, void 0, void 0, function* () {
            // Se hace el calculo 6 veces en el tiempo que tiende ha de estar puesto el lock
            // si se queda puesto se espera 4 timepos mas pero finalmente se libera el proceso
            // eslint-disable-next-line no-await-in-loop
            for (let rety = 0; lock && rety < 10; rety += 1) yield delay(125);
        });
    }
    /**
     * Metodo que abre o cierra la lista de favoritos, dependiendo del estado en el que lo encuentra, cuando se hace click en el boton principal.
     * @returns nada. Se evita la accion retornando si no existen favoritos.
     * @internal
     */
    function handleOnClickInMain() {
        return __awaiter(this, void 0, void 0, function* () {
            if (favorites.length === 0) return;
            yield waitLock();
            setLock(true);
            setOpenSpeedDial(!openSpeedDial);
            yield delay(750);
            setLock(false);
        });
    }
    /**
     * Metodo que abre la lista de favoritos cuando se pasa sobre el boton principal.
     * @returns nada. Se evita la accion retornando si no existen favoritos o si la lista ya esta abierta.
     * @internal
     */
    function openOnHoverInMain() {
        return __awaiter(this, void 0, void 0, function* () {
            if (openSpeedDial || favorites.length === 0) return;
            yield waitLock();
            setLock(true);
            setOpenSpeedDial(true);
            yield delay(750);
            setLock(false);
        });
    }
    /**
     * Metodo que permite guardar el pathname en el que se encuentra el usuario como un favorito.
     *@internal
     */
    function saveFavorite() {
        return __awaiter(this, void 0, void 0, function* () {
            yield waitLock();
            setLock(true);
            favorites.push(window.location.pathname);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setOpenSpeedDial(true);
            if (!openSpeedDial) yield delay(750);
            setLock(false);
        });
    }
    /**
     * Metodo que permite eliminar un pathname favorito de la lista.
     * @param favorite - pathname favorito a eliminar.
     * @internal
     */
    function removeFavorite(favorite) {
        return __awaiter(this, void 0, void 0, function* () {
            yield waitLock();
            setLock(true);
            setOpenSpeedDial(false);
            if (openSpeedDial) yield delay(750);
            const array = [];
            favorites = Array.from(new Set(favorites));
            favorites.forEach((element) => {
                if (element !== favorite) array.push(element);
            });
            favorites = array;
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setLock(false);
        });
    }
    /**
     * Metodo que permite navegar a la url especificada.
     * @param url - URL a la que se desea navegar.
     * @internal
     */
    function goToFavorite(url) {
        if (window.location.pathname !== url) window.location.assign(url);
    }
    /**
     * Metodo que hace visible el boton de eliminar de uno de los favoritos.
     * @param index - Indice del boton a mostrar.
     * @internal
     */
    function showCloseButton(index) {
        return __awaiter(this, void 0, void 0, function* () {
            closeShow[index] = true;
            setCloseShow([...closeShow]);
        });
    }
    /**
     * Metodo que esconde el boton de eliminar de uno de los favoritos.
     * @param index - Indice del boton a esconder.
     * @internal
     */
    function hideCloseButton(index) {
        return __awaiter(this, void 0, void 0, function* () {
            closeShow[index] = false;
            setCloseShow([...closeShow]);
        });
    }
    const actionButtons = favorites.map((favorite, index) =>
        React.createElement(
            'span',
            {
                'data-cy': `favorite-span-${index}`,
                key: favorite,
                onMouseOver: () => {
                    showCloseButton(index);
                },
                onFocus: () => {
                    showCloseButton(index);
                },
                onMouseOut: () => {
                    hideCloseButton(index);
                },
                onBlur: () => {
                    hideCloseButton(index);
                },
                style: {
                    display: 'inline-block',
                    position: 'fixed',
                    bottom: 0,
                    right: 0,
                    zIndex: zIndex + favorites.length - 1 - index,
                    transform: `translateY(-${
                        openSpeedDial ? 65 * (favorites.length - index) : 0
                    }px)`,
                    transition: '0.75s'
                }
            },
            React.createElement(
                'button',
                {
                    'data-cy': `favorite-goto-button-${index}`,
                    type: 'button',
                    onClick: () => goToFavorite(favorite),
                    className:
                        'bg-orange-100 dark:bg-slate-800 text-black dark:text-white',
                    style: {
                        display: 'inline-block',
                        position: 'fixed',
                        bottom,
                        right,
                        margin: 4,
                        width: '60px',
                        height: '60px',
                        fontWeight: 'bold',
                        borderRadius: '50px',
                        textAlign: 'center',
                        fontSize: 'xx-small',
                        boxShadow: '2px 2px 3px #999'
                    }
                },
                React.createElement(IconContent, {
                    'data-cy': `favorite-icon-${index}`,
                    pathname: favorite,
                    pathnames: pathnames
                }),
                React.createElement(
                    'span',
                    {
                        'data-cy': `favorite-tooltip-${index}`,
                        style: {
                            visibility: closeShow[index] ? 'visible' : 'hidden',
                            width: '120px',
                            backgroundColor: 'black',
                            color: '#fff',
                            textAlign: 'center',
                            borderRadius: '6px',
                            padding: '5px 0',
                            position: 'absolute',
                            zIndex,
                            right: '105%',
                            top: '35%'
                        }
                    },
                    favorite
                )
            ),
            React.createElement(
                'button',
                {
                    'data-cy': `favorite-delete-button-${index}`,
                    type: 'button',
                    onClick: () => {
                        removeFavorite(favorite);
                    },
                    style: {
                        display:
                            closeShow[index] && openSpeedDial
                                ? 'inline-block'
                                : 'none',
                        position: 'fixed',
                        bottom: `calc(${bottom} + 45px)`,
                        right,
                        width: '20px',
                        height: '20px',
                        fontWeight: 'bold',
                        borderRadius: '50px',
                        textAlign: 'center',
                        padding: '0px',
                        fontSize: 'x-small',
                        boxShadow: '2px 2px 3px #999'
                    },
                    className: 'bg-red-500 text-black dark:text-white'
                },
                'x'
            )
        )
    );
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(
            'button',
            {
                'data-cy': 'main-button',
                type: 'button',
                onMouseOver: openOnHoverInMain,
                onFocus: openOnHoverInMain,
                onClick: handleOnClickInMain,
                style: {
                    position: 'fixed',
                    bottom,
                    right,
                    zIndex: zIndex + favorites.length * 2,
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#069cff',
                    color: '#FFF',
                    fontWeight: 'bold',
                    borderRadius: '50px',
                    textAlign: 'center',
                    boxShadow: '2px 2px 3px #999',
                    margin: 4
                }
            },
            `${favorites.length} ${lock ? '⌛' : '🔗'}`
        ),
        React.createElement(
            'button',
            {
                'data-cy': 'add-button',
                type: 'button',
                onClick: saveFavorite,
                style: {
                    position: 'fixed',
                    bottom: `calc(${bottom} + 45px)`,
                    right: `calc(${right} - 20px)`,
                    zIndex: zIndex + favorites.length,
                    width: '25px',
                    height: '25px',
                    backgroundColor: '#b5e853',
                    color: '#000',
                    fontWeight: 'bold',
                    borderRadius: '50px',
                    textAlign: 'center',
                    boxShadow: '2px 2px 3px #999',
                    padding: '0px'
                }
            },
            '+'
        ),
        actionButtons
    );
};
//# sourceMappingURL=SpeedDial.js.map
