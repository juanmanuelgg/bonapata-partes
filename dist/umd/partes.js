!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t(require('react')))
        : 'function' == typeof define && define.amd
          ? define(['react'], t)
          : 'object' == typeof exports
            ? (exports.partes = t(require('react')))
            : (e.partes = t(e.React));
})(self, (e) =>
    (() => {
        'use strict';
        var t = {
                315(e, t, n) {
                    n.d(t, { A: () => c });
                    var o = n(601),
                        r = n.n(o),
                        a = n(314),
                        i = n.n(a)()(r());
                    i.push([
                        e.id,
                        ".dock {\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 1000;\n  padding: 12px;\n}\n\n.dock-container {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  padding: 12px 16px;\n  background: rgba(255, 255, 255, 0.8);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 20px;\n  box-shadow: \n    0 4px 24px rgba(0, 0, 0, 0.1),\n    0 1px 3px rgba(0, 0, 0, 0.05),\n    inset 0 0 0 1px rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n/* Dark mode support */\n@media (prefers-color-scheme: dark) {\n  .dock-container {\n    background: rgba(30, 30, 30, 0.8);\n    box-shadow: \n      0 4px 24px rgba(0, 0, 0, 0.3),\n      0 1px 3px rgba(0, 0, 0, 0.2),\n      inset 0 0 0 1px rgba(255, 255, 255, 0.1);\n    border-color: rgba(255, 255, 255, 0.1);\n  }\n}\n\n.dock-item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: var(--dock-icon-size, 48px);\n  height: var(--dock-icon-size, 48px);\n  padding: 0;\n  margin: 0;\n  background: transparent;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  transform: scale(var(--dock-scale, 1));\n  transform-origin: bottom center;\n  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: transform;\n}\n\n.dock-item:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.dock-item:focus-visible {\n  outline: 2px solid #007AFF;\n  outline-offset: 2px;\n}\n\n.dock-item--disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.dock-item--disabled:hover {\n  background: transparent;\n}\n\n.dock-item__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  font-size: calc(var(--dock-icon-size, 48px) * 0.5);\n  color: inherit;\n}\n\n.dock-item__tooltip {\n  position: absolute;\n  bottom: calc(100% + 12px);\n  left: 50%;\n  transform: translateX(-50%) translateY(4px);\n  padding: 6px 12px;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  font-size: 13px;\n  font-weight: 500;\n  white-space: nowrap;\n  border-radius: 8px;\n  opacity: 0;\n  visibility: hidden;\n  transition: \n    opacity 0.2s ease,\n    transform 0.2s ease,\n    visibility 0.2s ease;\n  pointer-events: none;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n}\n\n.dock-item__tooltip::after {\n  content: '';\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 6px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n\n.dock-item:hover .dock-item__tooltip,\n.dock-item:focus-visible .dock-item__tooltip {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-50%) translateY(0);\n}\n\n/* Mobile responsive */\n@media (max-width: 768px) {\n  .dock {\n    left: 0;\n    right: 0;\n    transform: none;\n    padding: 8px;\n  }\n\n  .dock-container {\n    justify-content: center;\n    padding: 8px 12px;\n    gap: 4px;\n  }\n\n  .dock-item {\n    --dock-scale: 1 !important;\n  }\n}\n\n/* Reduced motion support */\n@media (prefers-reduced-motion: reduce) {\n  .dock-item {\n    transition: none;\n  }\n\n  .dock-item__tooltip {\n    transition: none;\n  }\n}\n",
                        ''
                    ]);
                    const c = i;
                },
                314(e) {
                    e.exports = function (e) {
                        var t = [];
                        return (
                            (t.toString = function () {
                                return this.map(function (t) {
                                    var n = '',
                                        o = void 0 !== t[5];
                                    return (
                                        t[4] &&
                                            (n += '@supports ('.concat(
                                                t[4],
                                                ') {'
                                            )),
                                        t[2] &&
                                            (n += '@media '.concat(t[2], ' {')),
                                        o &&
                                            (n += '@layer'.concat(
                                                t[5].length > 0
                                                    ? ' '.concat(t[5])
                                                    : '',
                                                ' {'
                                            )),
                                        (n += e(t)),
                                        o && (n += '}'),
                                        t[2] && (n += '}'),
                                        t[4] && (n += '}'),
                                        n
                                    );
                                }).join('');
                            }),
                            (t.i = function (e, n, o, r, a) {
                                'string' == typeof e &&
                                    (e = [[null, e, void 0]]);
                                var i = {};
                                if (o)
                                    for (var c = 0; c < this.length; c++) {
                                        var l = this[c][0];
                                        null != l && (i[l] = !0);
                                    }
                                for (var s = 0; s < e.length; s++) {
                                    var d = [].concat(e[s]);
                                    (o && i[d[0]]) ||
                                        (void 0 !== a &&
                                            (void 0 === d[5] ||
                                                (d[1] = '@layer'
                                                    .concat(
                                                        d[5].length > 0
                                                            ? ' '.concat(d[5])
                                                            : '',
                                                        ' {'
                                                    )
                                                    .concat(d[1], '}')),
                                            (d[5] = a)),
                                        n &&
                                            (d[2]
                                                ? ((d[1] = '@media '
                                                      .concat(d[2], ' {')
                                                      .concat(d[1], '}')),
                                                  (d[2] = n))
                                                : (d[2] = n)),
                                        r &&
                                            (d[4]
                                                ? ((d[1] = '@supports ('
                                                      .concat(d[4], ') {')
                                                      .concat(d[1], '}')),
                                                  (d[4] = r))
                                                : (d[4] = ''.concat(r))),
                                        t.push(d));
                                }
                            }),
                            t
                        );
                    };
                },
                601(e) {
                    e.exports = function (e) {
                        return e[1];
                    };
                },
                72(e) {
                    var t = [];
                    function n(e) {
                        for (var n = -1, o = 0; o < t.length; o++)
                            if (t[o].identifier === e) {
                                n = o;
                                break;
                            }
                        return n;
                    }
                    function o(e, o) {
                        for (var a = {}, i = [], c = 0; c < e.length; c++) {
                            var l = e[c],
                                s = o.base ? l[0] + o.base : l[0],
                                d = a[s] || 0,
                                p = ''.concat(s, ' ').concat(d);
                            a[s] = d + 1;
                            var u = n(p),
                                m = {
                                    css: l[1],
                                    media: l[2],
                                    sourceMap: l[3],
                                    supports: l[4],
                                    layer: l[5]
                                };
                            if (-1 !== u) (t[u].references++, t[u].updater(m));
                            else {
                                var f = r(m, o);
                                ((o.byIndex = c),
                                    t.splice(c, 0, {
                                        identifier: p,
                                        updater: f,
                                        references: 1
                                    }));
                            }
                            i.push(p);
                        }
                        return i;
                    }
                    function r(e, t) {
                        var n = t.domAPI(t);
                        return (
                            n.update(e),
                            function (t) {
                                if (t) {
                                    if (
                                        t.css === e.css &&
                                        t.media === e.media &&
                                        t.sourceMap === e.sourceMap &&
                                        t.supports === e.supports &&
                                        t.layer === e.layer
                                    )
                                        return;
                                    n.update((e = t));
                                } else n.remove();
                            }
                        );
                    }
                    e.exports = function (e, r) {
                        var a = o((e = e || []), (r = r || {}));
                        return function (e) {
                            e = e || [];
                            for (var i = 0; i < a.length; i++) {
                                var c = n(a[i]);
                                t[c].references--;
                            }
                            for (var l = o(e, r), s = 0; s < a.length; s++) {
                                var d = n(a[s]);
                                0 === t[d].references &&
                                    (t[d].updater(), t.splice(d, 1));
                            }
                            a = l;
                        };
                    };
                },
                659(e) {
                    var t = {};
                    e.exports = function (e, n) {
                        var o = (function (e) {
                            if (void 0 === t[e]) {
                                var n = document.querySelector(e);
                                if (
                                    window.HTMLIFrameElement &&
                                    n instanceof window.HTMLIFrameElement
                                )
                                    try {
                                        n = n.contentDocument.head;
                                    } catch (e) {
                                        n = null;
                                    }
                                t[e] = n;
                            }
                            return t[e];
                        })(e);
                        if (!o)
                            throw new Error(
                                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                            );
                        o.appendChild(n);
                    };
                },
                540(e) {
                    e.exports = function (e) {
                        var t = document.createElement('style');
                        return (
                            e.setAttributes(t, e.attributes),
                            e.insert(t, e.options),
                            t
                        );
                    };
                },
                56(e, t, n) {
                    e.exports = function (e) {
                        var t = n.nc;
                        t && e.setAttribute('nonce', t);
                    };
                },
                825(e) {
                    e.exports = function (e) {
                        if ('undefined' == typeof document)
                            return {
                                update: function () {},
                                remove: function () {}
                            };
                        var t = e.insertStyleElement(e);
                        return {
                            update: function (n) {
                                !(function (e, t, n) {
                                    var o = '';
                                    (n.supports &&
                                        (o += '@supports ('.concat(
                                            n.supports,
                                            ') {'
                                        )),
                                        n.media &&
                                            (o += '@media '.concat(
                                                n.media,
                                                ' {'
                                            )));
                                    var r = void 0 !== n.layer;
                                    (r &&
                                        (o += '@layer'.concat(
                                            n.layer.length > 0
                                                ? ' '.concat(n.layer)
                                                : '',
                                            ' {'
                                        )),
                                        (o += n.css),
                                        r && (o += '}'),
                                        n.media && (o += '}'),
                                        n.supports && (o += '}'));
                                    var a = n.sourceMap;
                                    (a &&
                                        'undefined' != typeof btoa &&
                                        (o +=
                                            '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                                btoa(
                                                    unescape(
                                                        encodeURIComponent(
                                                            JSON.stringify(a)
                                                        )
                                                    )
                                                ),
                                                ' */'
                                            )),
                                        t.styleTagTransform(o, e, t.options));
                                })(t, e, n);
                            },
                            remove: function () {
                                !(function (e) {
                                    if (null === e.parentNode) return !1;
                                    e.parentNode.removeChild(e);
                                })(t);
                            }
                        };
                    };
                },
                113(e) {
                    e.exports = function (e, t) {
                        if (t.styleSheet) t.styleSheet.cssText = e;
                        else {
                            for (; t.firstChild; ) t.removeChild(t.firstChild);
                            t.appendChild(document.createTextNode(e));
                        }
                    };
                },
                12(t) {
                    t.exports = e;
                }
            },
            n = {};
        function o(e) {
            var r = n[e];
            if (void 0 !== r) return r.exports;
            var a = (n[e] = { id: e, exports: {} });
            return (t[e](a, a.exports, o), a.exports);
        }
        ((o.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return (o.d(t, { a: t }), t);
        }),
            (o.d = (e, t) => {
                for (var n in t)
                    o.o(t, n) &&
                        !o.o(e, n) &&
                        Object.defineProperty(e, n, {
                            enumerable: !0,
                            get: t[n]
                        });
            }),
            (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
            (o.r = (e) => {
                ('undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module'
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 }));
            }),
            (o.nc = void 0));
        var r = {};
        (o.r(r),
            o.d(r, {
                DarkModeToggle: () => c,
                Dock: () => w,
                Notification: () => C,
                SpeedDial: () => A,
                Stepper: () => E,
                StepperEvents: () => S
            }));
        var a = o(12),
            i = o.n(a);
        const c = () => {
            const [e, t] = (0, a.useState)(!1);
            function n(n) {
                (n
                    ? document.documentElement.classList.add('dark')
                    : document.documentElement.classList.remove('dark'),
                    localStorage.setItem('dark-mode-bonapata', `${e}`),
                    t(n));
            }
            return (
                (0, a.useEffect)(() => {
                    let e = !1;
                    ((e =
                        'dark-mode-bonapata' in localStorage
                            ? 'true' ===
                              localStorage.getItem('dark-mode-bonapata')
                            : window.matchMedia('(prefers-color-scheme: dark)')
                                  .matches),
                        n(e));
                }, []),
                i().createElement(
                    'button',
                    {
                        onClick: () => {
                            n(!e);
                        }
                    },
                    e
                        ? i().createElement(
                              'svg',
                              {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  height: '20',
                                  width: '20',
                                  viewBox: '0 0 20 20'
                              },
                              i().createElement('circle', {
                                  fill: '#000000',
                                  cx: '10',
                                  cy: '10',
                                  r: '10'
                              }),
                              i().createElement('path', {
                                  fill: '#ffffff',
                                  d: 'M10,0 C21,0 21,21 10,20 C20,12 12,0 10,0'
                              })
                          )
                        : i().createElement(
                              'svg',
                              {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  height: '20',
                                  width: '20',
                                  viewBox: '0 0 20 20'
                              },
                              i().createElement('circle', {
                                  fill: '#999999',
                                  cx: '10',
                                  cy: '10',
                                  r: '10'
                              }),
                              i().createElement('circle', {
                                  fill: '#ffff00',
                                  cx: '10',
                                  cy: '10',
                                  r: '9'
                              })
                          )
                )
            );
        };
        var l = o(72),
            s = o.n(l),
            d = o(825),
            p = o.n(d),
            u = o(659),
            m = o.n(u),
            f = o(56),
            b = o.n(f),
            x = o(540),
            h = o.n(x),
            g = o(113),
            v = o.n(g),
            y = o(315),
            k = {};
        ((k.styleTagTransform = v()),
            (k.setAttributes = b()),
            (k.insert = m().bind(null, 'head')),
            (k.domAPI = p()),
            (k.insertStyleElement = h()),
            s()(y.A, k),
            y.A && y.A.locals && y.A.locals);
        const w = ({
                items: e,
                iconSize: t = 48,
                magnification: n = 2.5,
                distance: o = 150,
                className: r = '',
                'aria-label': c = 'Application dock'
            }) => {
                const [l, s] = (0, a.useState)(null),
                    [d, p] = (0, a.useState)(null),
                    u = (0, a.useCallback)((e, t) => {
                        const n = e.currentTarget.getBoundingClientRect(),
                            o = e.clientX - n.left;
                        (p(o), s(t));
                    }, []),
                    m = (0, a.useCallback)(() => {
                        (s(null), p(null));
                    }, []),
                    f = (0, a.useCallback)(
                        (e) => {
                            if (null === l || null === d) return 1;
                            const r = e * t + t / 2,
                                a = Math.abs(d - r);
                            if (a > o) return 1;
                            const i =
                                1 + (n - 1) * Math.cos((a / o) * (Math.PI / 2));
                            return Math.min(i, n);
                        },
                        [l, d, t, n, o]
                    ),
                    b = (0, a.useMemo)(
                        () =>
                            e.map((e, n) => {
                                const o = f(n),
                                    r = l === n;
                                return i().createElement(
                                    'button',
                                    {
                                        key: `${e.label}-${n}`,
                                        className: `dock-item ${r ? 'dock-item--hovered' : ''} ${e.disabled ? 'dock-item--disabled' : ''}`,
                                        style: {
                                            '--dock-icon-size': `${t}px`,
                                            '--dock-scale': o
                                        },
                                        onClick: e.disabled
                                            ? void 0
                                            : e.onClick,
                                        onMouseMove: (e) => u(e, n),
                                        onMouseLeave: m,
                                        'aria-label': e.label,
                                        disabled: e.disabled,
                                        type: 'button'
                                    },
                                    i().createElement(
                                        'span',
                                        {
                                            className: 'dock-item__icon',
                                            'aria-hidden': 'true'
                                        },
                                        e.icon
                                    ),
                                    i().createElement(
                                        'span',
                                        {
                                            className: 'dock-item__tooltip',
                                            role: 'tooltip'
                                        },
                                        e.label
                                    )
                                );
                            }),
                        [e, t, f, l, u, m]
                    );
                return i().createElement(
                    'nav',
                    {
                        className: `dock ${r}`,
                        'aria-label': c,
                        role: 'navigation'
                    },
                    i().createElement('div', { className: 'dock-container' }, b)
                );
            },
            E = (e) => {
                const { initial: t = 0 } = e,
                    [n, o] = (0, a.useState)(t);
                return i().createElement(
                    'div',
                    { 'data-testid': 'stepper' },
                    i().createElement(
                        'button',
                        { 'aria-label': 'decrement', onClick: () => o(n - 1) },
                        '-'
                    ),
                    n,
                    i().createElement(
                        'button',
                        { 'aria-label': 'increment', onClick: () => o(n + 1) },
                        '+'
                    )
                );
            },
            S = (e) => {
                const {
                        initial: t = 0,
                        onChange: n = (e) => {
                            console.log(e);
                        }
                    } = e,
                    [o, r] = (0, a.useState)(t);
                return i().createElement(
                    'div',
                    { 'data-testid': 'stepper' },
                    i().createElement(
                        'button',
                        {
                            'aria-label': 'decrement',
                            onClick: () => {
                                const e = o - 1;
                                (r(e), n(e));
                            }
                        },
                        '-'
                    ),
                    o,
                    i().createElement(
                        'button',
                        {
                            'aria-label': 'increment',
                            onClick: () => {
                                const e = o + 1;
                                (r(e), n(e));
                            }
                        },
                        '+'
                    )
                );
            },
            C = (e) => {
                const {
                    imageSrc: t,
                    title: n = 'Platform',
                    message: o = 'You have a new message!'
                } = e;
                return i().createElement(
                    'div',
                    {
                        className:
                            'p-6 max-w-sm mx-auto bg-white dark:bg-black rounded-xl shadow-lg flex items-center space-x-4'
                    },
                    t &&
                        i().createElement(
                            'div',
                            { className: 'shrink-0' },
                            i().createElement('img', {
                                className:
                                    'h-12 w-12 text-black dark:text-white',
                                src: t
                            })
                        ),
                    i().createElement(
                        'div',
                        null,
                        i().createElement(
                            'div',
                            {
                                className:
                                    'text-xl font-medium text-black dark:text-white'
                            },
                            n
                        ),
                        i().createElement(
                            'p',
                            { className: 'text-slate-500' },
                            o
                        )
                    )
                );
            };
        var M = function (e, t, n, o) {
            return new (n || (n = Promise))(function (r, a) {
                function i(e) {
                    try {
                        l(o.next(e));
                    } catch (e) {
                        a(e);
                    }
                }
                function c(e) {
                    try {
                        l(o.throw(e));
                    } catch (e) {
                        a(e);
                    }
                }
                function l(e) {
                    var t;
                    e.done
                        ? r(e.value)
                        : ((t = e.value),
                          t instanceof n
                              ? t
                              : new n(function (e) {
                                    e(t);
                                })).then(i, c);
                }
                l((o = o.apply(e, t || [])).next());
            });
        };
        const N = (e) => {
                const { pathname: t, pathnames: n = new Map() } = e;
                return i().createElement(
                    i().Fragment,
                    null,
                    n.has(t)
                        ? i().createElement('img', {
                              src: n.get(t),
                              alt: t,
                              width: '32px',
                              height: '32px'
                          })
                        : i().createElement('span', null, t)
                );
            },
            A = (e) => {
                const {
                        right: t = '40px',
                        bottom: n = '40px',
                        zIndex: o = 9,
                        pathnames: r = new Map()
                    } = e,
                    c = localStorage.getItem('favorites') || '[]';
                let l = (0, a.useMemo)(() => {
                    const e = Array.from(new Set(JSON.parse(c)));
                    return (
                        c.length !== e.length &&
                            localStorage.setItem(
                                'favorites',
                                JSON.stringify(e)
                            ),
                        e
                    );
                }, [v]);
                const s = new Array(l.length);
                s.fill(!1);
                const [d, p] = (0, a.useState)(s),
                    [u, m] = (0, a.useState)(!1),
                    [f, b] = (0, a.useState)(!1);
                function x(e) {
                    return M(this, void 0, void 0, function* () {
                        return new Promise((t) => {
                            setTimeout(t, e);
                        });
                    });
                }
                function h() {
                    return M(this, void 0, void 0, function* () {
                        for (let e = 0; f && e < 10; e += 1) yield x(125);
                    });
                }
                function g() {
                    return M(this, void 0, void 0, function* () {
                        u ||
                            0 === l.length ||
                            (yield h(), b(!0), m(!0), yield x(750), b(!1));
                    });
                }
                function v() {
                    return M(this, void 0, void 0, function* () {
                        (yield h(),
                            b(!0),
                            l.push(window.location.pathname),
                            localStorage.setItem(
                                'favorites',
                                JSON.stringify(l)
                            ),
                            m(!0),
                            u || (yield x(750)),
                            b(!1));
                    });
                }
                function y(e) {
                    return M(this, void 0, void 0, function* () {
                        ((d[e] = !0), p([...d]));
                    });
                }
                function k(e) {
                    return M(this, void 0, void 0, function* () {
                        ((d[e] = !1), p([...d]));
                    });
                }
                const w = l.map((e, a) =>
                    i().createElement(
                        'span',
                        {
                            'data-cy': `favorite-span-${a}`,
                            key: e,
                            onMouseOver: () => {
                                y(a);
                            },
                            onFocus: () => {
                                y(a);
                            },
                            onMouseOut: () => {
                                k(a);
                            },
                            onBlur: () => {
                                k(a);
                            },
                            style: {
                                display: 'inline-block',
                                position: 'fixed',
                                bottom: 0,
                                right: 0,
                                zIndex: o + l.length - 1 - a,
                                transform: `translateY(-${u ? 65 * (l.length - a) : 0}px)`,
                                transition: '0.75s'
                            }
                        },
                        i().createElement(
                            'button',
                            {
                                'data-cy': `favorite-goto-button-${a}`,
                                type: 'button',
                                onClick: () => {
                                    return (
                                        (t = e),
                                        void (
                                            window.location.pathname !== t &&
                                            window.location.assign(t)
                                        )
                                    );
                                    var t;
                                },
                                className:
                                    'bg-orange-100 dark:bg-slate-800 text-black dark:text-white',
                                style: {
                                    display: 'inline-block',
                                    position: 'fixed',
                                    bottom: n,
                                    right: t,
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
                            i().createElement(N, {
                                'data-cy': `favorite-icon-${a}`,
                                pathname: e,
                                pathnames: r
                            }),
                            i().createElement(
                                'span',
                                {
                                    'data-cy': `favorite-tooltip-${a}`,
                                    style: {
                                        visibility: d[a] ? 'visible' : 'hidden',
                                        width: '120px',
                                        backgroundColor: 'black',
                                        color: '#fff',
                                        textAlign: 'center',
                                        borderRadius: '6px',
                                        padding: '5px 0',
                                        position: 'absolute',
                                        zIndex: o,
                                        right: '105%',
                                        top: '35%'
                                    }
                                },
                                e
                            )
                        ),
                        i().createElement(
                            'button',
                            {
                                'data-cy': `favorite-delete-button-${a}`,
                                type: 'button',
                                onClick: () => {
                                    !(function (e) {
                                        M(this, void 0, void 0, function* () {
                                            (yield h(),
                                                b(!0),
                                                m(!1),
                                                u && (yield x(750)));
                                            const t = [];
                                            ((l = Array.from(new Set(l))),
                                                l.forEach((n) => {
                                                    n !== e && t.push(n);
                                                }),
                                                (l = t),
                                                localStorage.setItem(
                                                    'favorites',
                                                    JSON.stringify(l)
                                                ),
                                                b(!1));
                                        });
                                    })(e);
                                },
                                style: {
                                    display:
                                        d[a] && u ? 'inline-block' : 'none',
                                    position: 'fixed',
                                    bottom: `calc(${n} + 45px)`,
                                    right: t,
                                    width: '20px',
                                    height: '20px',
                                    fontWeight: 'bold',
                                    borderRadius: '50px',
                                    textAlign: 'center',
                                    padding: '0px',
                                    fontSize: 'x-small',
                                    boxShadow: '2px 2px 3px #999'
                                },
                                className:
                                    'bg-red-500 text-black dark:text-white'
                            },
                            'x'
                        )
                    )
                );
                return i().createElement(
                    i().Fragment,
                    null,
                    i().createElement(
                        'button',
                        {
                            'data-cy': 'main-button',
                            type: 'button',
                            onMouseOver: g,
                            onFocus: g,
                            onClick: function () {
                                return M(this, void 0, void 0, function* () {
                                    0 !== l.length &&
                                        (yield h(),
                                        b(!0),
                                        m(!u),
                                        yield x(750),
                                        b(!1));
                                });
                            },
                            style: {
                                position: 'fixed',
                                bottom: n,
                                right: t,
                                zIndex: o + 2 * l.length,
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
                        `${l.length} ${f ? '⌛' : '🔗'}`
                    ),
                    i().createElement(
                        'button',
                        {
                            'data-cy': 'add-button',
                            type: 'button',
                            onClick: v,
                            style: {
                                position: 'fixed',
                                bottom: `calc(${n} + 45px)`,
                                right: `calc(${t} - 20px)`,
                                zIndex: o + l.length,
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
                    w
                );
            };
        return r;
    })()
);
