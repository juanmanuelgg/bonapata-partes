var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SpeedDial = void 0;
    const react_1 = __importStar(require("react"));
    const IconContent = (props) => {
        const { pathname, pathnames = new Map() } = props;
        return (react_1.default.createElement(react_1.default.Fragment, null, pathnames.has(pathname) ? (react_1.default.createElement("img", { src: pathnames.get(pathname), alt: pathname, width: "32px", height: "32px" })) : (react_1.default.createElement("span", null, pathname))));
    };
    const SpeedDial = (props) => {
        const { right = '40px', bottom = '40px', zIndex = 9, pathnames = new Map() } = props;
        const savedFavorites = localStorage.getItem('favorites') || '[]';
        let favorites = (0, react_1.useMemo)(() => {
            const answer = Array.from(new Set(JSON.parse(savedFavorites)));
            if (savedFavorites.length !== answer.length)
                localStorage.setItem('favorites', JSON.stringify(answer));
            return answer;
        }, [saveFavorite]);
        const show = new Array(favorites.length);
        show.fill(false);
        const [closeShow, setCloseShow] = (0, react_1.useState)(show);
        const [openSpeedDial, setOpenSpeedDial] = (0, react_1.useState)(false);
        const [lock, setLock] = (0, react_1.useState)(false);
        function delay(ms) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise((res) => {
                    setTimeout(res, ms);
                });
            });
        }
        function waitLock() {
            return __awaiter(this, void 0, void 0, function* () {
                // Se hace el calculo 6 veces en el tiempo que tiende ha de estar puesto el lock
                // si se queda puesto se espera 4 timepos mas pero finalmente se libera el proceso
                // eslint-disable-next-line no-await-in-loop
                for (let rety = 0; lock && rety < 10; rety += 1)
                    yield delay(125);
            });
        }
        function handleOnClick() {
            return __awaiter(this, void 0, void 0, function* () {
                if (favorites.length === 0)
                    return;
                yield waitLock();
                setLock(true);
                setOpenSpeedDial(!openSpeedDial);
                yield delay(750);
                setLock(false);
            });
        }
        function openOnHover() {
            return __awaiter(this, void 0, void 0, function* () {
                if (openSpeedDial || favorites.length === 0)
                    return;
                yield waitLock();
                setLock(true);
                setOpenSpeedDial(true);
                yield delay(750);
                setLock(false);
            });
        }
        function saveFavorite() {
            return __awaiter(this, void 0, void 0, function* () {
                yield waitLock();
                setLock(true);
                favorites.push(window.location.pathname);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                setOpenSpeedDial(true);
                if (!openSpeedDial)
                    yield delay(750);
                setLock(false);
            });
        }
        function removeFavorite(favorite) {
            return __awaiter(this, void 0, void 0, function* () {
                yield waitLock();
                setLock(true);
                setOpenSpeedDial(false);
                if (openSpeedDial)
                    yield delay(750);
                const array = [];
                favorites = Array.from(new Set(favorites));
                favorites.forEach((element) => {
                    if (element !== favorite)
                        array.push(element);
                });
                favorites = array;
                localStorage.setItem('favorites', JSON.stringify(favorites));
                setLock(false);
            });
        }
        function goToFavorite(url) {
            if (window.location.pathname !== url)
                window.location.assign(url);
        }
        function showCloseButton(index) {
            return __awaiter(this, void 0, void 0, function* () {
                closeShow[index] = true;
                setCloseShow([...closeShow]);
            });
        }
        function hideCloseButton(index) {
            return __awaiter(this, void 0, void 0, function* () {
                closeShow[index] = false;
                setCloseShow([...closeShow]);
            });
        }
        const actionButtons = favorites.map((favorite, index) => (react_1.default.createElement("span", { "data-cy": `favorite-span-${index}`, key: favorite, onMouseOver: () => {
                showCloseButton(index);
            }, onFocus: () => {
                showCloseButton(index);
            }, onMouseOut: () => {
                hideCloseButton(index);
            }, onBlur: () => {
                hideCloseButton(index);
            }, style: {
                display: 'inline-block',
                position: 'fixed',
                bottom: 0,
                right: 0,
                zIndex: zIndex + favorites.length - 1 - index,
                transform: `translateY(-${openSpeedDial ? 65 * (favorites.length - index) : 0}px)`,
                transition: '0.75s'
            } },
            react_1.default.createElement("button", { "data-cy": `favorite-goto-button-${index}`, type: "button", onClick: () => goToFavorite(favorite), style: {
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
                } },
                react_1.default.createElement(IconContent, { "data-cy": `favorite-icon-${index}`, pathname: favorite, pathnames: pathnames }),
                react_1.default.createElement("span", { "data-cy": `favorite-tooltip-${index}`, style: {
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
                    } }, favorite)),
            react_1.default.createElement("button", { "data-cy": `favorite-delete-button-${index}`, type: "button", onClick: () => {
                    removeFavorite(favorite);
                }, style: {
                    display: closeShow[index] && openSpeedDial
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
                } }, "x"))));
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("button", { "data-cy": "main-button", type: "button", onMouseOver: openOnHover, onFocus: openOnHover, onClick: handleOnClick, style: {
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
                } }, `${favorites.length} ${lock ? '⌛' : '🔗'}`),
            react_1.default.createElement("button", { "data-cy": "add-button", type: "button", onClick: saveFavorite, style: {
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
                } }, "+"),
            actionButtons));
    };
    exports.SpeedDial = SpeedDial;
});
//# sourceMappingURL=SpeedDial.js.map