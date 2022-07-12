import React, { useState } from 'react';

interface IconContentProps {
    pathname: string;
    pathnames: Map<string, string>;
}

const IconContent: React.FunctionComponent<IconContentProps> = (
    props: IconContentProps
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

export interface SpeedDialProps {
    right?: string;
    bottom?: string;
    zIndex?: number;
    pathnames?: Map<string, string>;
}

export const SpeedDial: React.FunctionComponent<SpeedDialProps> = (
    props: SpeedDialProps
) => {
    const {
        right = '40px',
        bottom = '40px',
        zIndex = 9,
        pathnames = new Map()
    } = props;

    const savedFavorites: string = localStorage.getItem('favorites') || '[]';
    let favorites: string[] = Array.from(new Set(JSON.parse(savedFavorites)));
    localStorage.setItem('favorites', JSON.stringify(favorites));

    const show = new Array(favorites.length);
    show.fill(false);
    const [closeShow, setCloseShow] = useState(show);

    const [openSpeedDial, setOpenSpeedDial] = useState(false);
    const [lock, setLock] = useState(false);

    async function delay(ms: number) {
        return new Promise((res) => {
            setTimeout(res, ms);
        });
    }

    async function waitLock() {
        // Se hace el calculo 6 veces en el tiempo que tiende ha de estar puesto el lock

        // si se queda puesto se espera 4 timepos mas pero finalmente se libera el proceso
        // eslint-disable-next-line no-await-in-loop
        for (let rety = 0; lock && rety < 10; rety += 1) await delay(125);
    }

    async function handleOnClick() {
        if (favorites.length === 0) return;

        await waitLock();
        setLock(true);
        setOpenSpeedDial(!openSpeedDial);
        await delay(750);
        setLock(false);
    }

    async function openOnHover() {
        if (openSpeedDial || favorites.length === 0) return;

        await waitLock();
        setLock(true);
        setOpenSpeedDial(true);
        await delay(750);
        setLock(false);
    }

    async function saveFavorite() {
        await waitLock();
        setLock(true);
        favorites.push(window.location.pathname);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setOpenSpeedDial(true);
        if (!openSpeedDial) await delay(750);
        setLock(false);
    }

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

    function goToFavorite(url: string) {
        if (window.location.pathname !== url) window.location.assign(url);
    }

    async function showCloseButton(index: number) {
        closeShow[index] = true;
        setCloseShow([...closeShow]);
    }

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
                style={{
                    display: 'inline-block',
                    position: 'fixed',
                    bottom,
                    right,
                    margin: 4,
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#FFF',
                    color: '#000',
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
                    backgroundColor: '#f23a12',
                    color: '#000',
                    fontWeight: 'bold',
                    borderRadius: '50px',
                    textAlign: 'center',
                    padding: '0px'
                }}
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
                onMouseOver={openOnHover}
                onFocus={openOnHover}
                onClick={handleOnClick}
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
