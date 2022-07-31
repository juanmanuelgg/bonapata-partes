import React, { useState, useMemo } from 'react';

/**
 * La interfaz que cumplen las propiedades del componente IconContent.
 * @internal
 */
interface IIconContentProps {
    /**
     *  El pathanme que se desea representar.
     * @internal
     */
    pathname: string;
    /**
     * El mapa con todos los pathnames y la url de su icono.
     * @internal
     */
    pathnames: Map<string, string>;
}

/**
 * Componente que muestra el icono que deberia acompañar a cada uno de los favoritos.
 * Muestra el pathname como texto si en el mapa(pathnames) no existe un icono asociado.
 * @param props - Valores de entrada del componente.
 * @returns Un componente función de React renderizable.
 * @internal
 */
const IconContent: React.FunctionComponent<IIconContentProps> = (
    props: IIconContentProps
) => {
    const { pathname, pathnames = new Map() } = props;

    return (
        <>
            {pathnames.has(pathname) ? (
                <img
                    src={pathnames.get(pathname)}
                    alt={pathname}
                    width="32px"
                    height="32px"
                />
            ) : (
                <span>{pathname}</span>
            )}
        </>
    );
};

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
export const SpeedDial: React.FunctionComponent<ISpeedDialProps> = (
    props: ISpeedDialProps
) => {
    const {
        right = '40px',
        bottom = '40px',
        zIndex = 9,
        pathnames = new Map()
    } = props;

    const savedFavorites: string = localStorage.getItem('favorites') || '[]';
    let favorites: string[] = useMemo(() => {
        const answer: string[] = Array.from(
            new Set(JSON.parse(savedFavorites))
        );
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
    async function delay(ms: number) {
        return new Promise((res) => {
            setTimeout(res, ms);
        });
    }

    /**
     * Metodo auxiliar que permite espera las animaciones en ejecución.
     * @internal
     */
    async function waitLock() {
        // Se hace el calculo 6 veces en el tiempo que tiende ha de estar puesto el lock

        // si se queda puesto se espera 4 timepos mas pero finalmente se libera el proceso
        // eslint-disable-next-line no-await-in-loop
        for (let rety = 0; lock && rety < 10; rety += 1) await delay(125);
    }

    /**
     * Metodo que abre o cierra la lista de favoritos, dependiendo del estado en el que lo encuentra, cuando se hace click en el boton principal.
     * @returns nada. Se evita la accion retornando si no existen favoritos.
     * @internal
     */
    async function handleOnClickInMain() {
        if (favorites.length === 0) return;

        await waitLock();
        setLock(true);
        setOpenSpeedDial(!openSpeedDial);
        await delay(750);
        setLock(false);
    }

    /**
     * Metodo que abre la lista de favoritos cuando se pasa sobre el boton principal.
     * @returns nada. Se evita la accion retornando si no existen favoritos o si la lista ya esta abierta.
     * @internal
     */
    async function openOnHoverInMain() {
        if (openSpeedDial || favorites.length === 0) return;

        await waitLock();
        setLock(true);
        setOpenSpeedDial(true);
        await delay(750);
        setLock(false);
    }

    /**
     * Metodo que permite guardar el pathname en el que se encuentra el usuario como un favorito.
     *@internal
     */
    async function saveFavorite() {
        await waitLock();
        setLock(true);
        favorites.push(window.location.pathname);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setOpenSpeedDial(true);
        if (!openSpeedDial) await delay(750);
        setLock(false);
    }

    /**
     * Metodo que permite eliminar un pathname favorito de la lista.
     * @param favorite - pathname favorito a eliminar.
     * @internal
     */
    async function removeFavorite(favorite: string) {
        await waitLock();
        setLock(true);
        setOpenSpeedDial(false);
        if (openSpeedDial) await delay(750);
        const array: string[] = [];
        favorites = Array.from(new Set(favorites));
        favorites.forEach((element: string) => {
            if (element !== favorite) array.push(element);
        });
        favorites = array;
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setLock(false);
    }

    /**
     * Metodo que permite navegar a la url especificada.
     * @param url - URL a la que se desea navegar.
     * @internal
     */
    function goToFavorite(url: string) {
        if (window.location.pathname !== url) window.location.assign(url);
    }

    /**
     * Metodo que hace visible el boton de eliminar de uno de los favoritos.
     * @param index - Indice del boton a mostrar.
     * @internal
     */
    async function showCloseButton(index: number) {
        closeShow[index] = true;
        setCloseShow([...closeShow]);
    }

    /**
     * Metodo que esconde el boton de eliminar de uno de los favoritos.
     * @param index - Indice del boton a esconder.
     * @internal
     */
    async function hideCloseButton(index: number) {
        closeShow[index] = false;
        setCloseShow([...closeShow]);
    }

    const actionButtons = favorites.map((favorite: string, index: number) => (
        <span
            data-cy={`favorite-span-${index}`}
            key={favorite}
            onMouseOver={() => {
                showCloseButton(index);
            }}
            onFocus={() => {
                showCloseButton(index);
            }}
            onMouseOut={() => {
                hideCloseButton(index);
            }}
            onBlur={() => {
                hideCloseButton(index);
            }}
            style={{
                display: 'inline-block',
                position: 'fixed',
                bottom: 0,
                right: 0,
                zIndex: zIndex + favorites.length - 1 - index,
                transform: `translateY(-${
                    openSpeedDial ? 65 * (favorites.length - index) : 0
                }px)`,
                transition: '0.75s'
            }}
        >
            <button
                data-cy={`favorite-goto-button-${index}`}
                type="button"
                onClick={() => goToFavorite(favorite)}
                className="bg-white dark:bg-slate-800 text-black dark:text-white"
                style={{
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
                    fontSize: 'xx-small'
                }}
            >
                <IconContent
                    data-cy={`favorite-icon-${index}`}
                    pathname={favorite}
                    pathnames={pathnames}
                />
                <span
                    data-cy={`favorite-tooltip-${index}`}
                    style={{
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
                    }}
                >
                    {favorite}
                </span>
            </button>
            <button
                data-cy={`favorite-delete-button-${index}`}
                type="button"
                onClick={() => {
                    removeFavorite(favorite);
                }}
                style={{
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
                    fontSize: 'xx-small'
                }}
                className="bg-red-500 text-black dark:text-white"
            >
                x
            </button>
        </span>
    ));

    return (
        <>
            <button
                data-cy="main-button"
                type="button"
                onMouseOver={openOnHoverInMain}
                onFocus={openOnHoverInMain}
                onClick={handleOnClickInMain}
                style={{
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
                }}
            >
                {`${favorites.length} ${lock ? '⌛' : '🔗'}`}
            </button>
            <button
                data-cy="add-button"
                type="button"
                onClick={saveFavorite}
                style={{
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
                }}
            >
                +
            </button>
            {actionButtons}
        </>
    );
};
