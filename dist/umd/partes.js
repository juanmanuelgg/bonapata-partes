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
                12: (t) => {
                    t.exports = e;
                }
            },
            n = {};
        function o(e) {
            var a = n[e];
            if (void 0 !== a) return a.exports;
            var i = (n[e] = { exports: {} });
            return t[e](i, i.exports, o), i.exports;
        }
        (o.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return o.d(t, { a: t }), t;
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
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module'
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            });
        var a = {};
        o.r(a),
            o.d(a, {
                DarkModeToggle: () => l,
                Notification: () => d,
                SpeedDial: () => m,
                Stepper: () => c,
                StepperEvents: () => s
            });
        var i = o(12),
            r = o.n(i);
        const l = () => {
                const [e, t] = (0, i.useState)(!1);
                function n(n) {
                    n
                        ? document.documentElement.classList.add('dark')
                        : document.documentElement.classList.remove('dark'),
                        localStorage.setItem('dark-mode-bonapata', `${e}`),
                        t(n);
                }
                return (
                    (0, i.useEffect)(() => {
                        let e = !1;
                        (e =
                            'dark-mode-bonapata' in localStorage
                                ? 'true' ===
                                  localStorage.getItem('dark-mode-bonapata')
                                : window.matchMedia(
                                      '(prefers-color-scheme: dark)'
                                  ).matches),
                            n(e);
                    }, []),
                    r().createElement(
                        'button',
                        {
                            onClick: () => {
                                n(!e);
                            }
                        },
                        e
                            ? r().createElement(
                                  'svg',
                                  {
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      height: '20',
                                      width: '20',
                                      viewBox: '0 0 20 20'
                                  },
                                  r().createElement('circle', {
                                      fill: '#000000',
                                      cx: '10',
                                      cy: '10',
                                      r: '10'
                                  }),
                                  r().createElement('path', {
                                      fill: '#ffffff',
                                      d: 'M10,0 C21,0 21,21 10,20 C20,12 12,0 10,0'
                                  })
                              )
                            : r().createElement(
                                  'svg',
                                  {
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      height: '20',
                                      width: '20',
                                      viewBox: '0 0 20 20'
                                  },
                                  r().createElement('circle', {
                                      fill: '#999999',
                                      cx: '10',
                                      cy: '10',
                                      r: '10'
                                  }),
                                  r().createElement('circle', {
                                      fill: '#ffff00',
                                      cx: '10',
                                      cy: '10',
                                      r: '9'
                                  })
                              )
                    )
                );
            },
            c = (e) => {
                const { initial: t = 0 } = e,
                    [n, o] = (0, i.useState)(t);
                return r().createElement(
                    'div',
                    { 'data-testid': 'stepper' },
                    r().createElement(
                        'button',
                        { 'aria-label': 'decrement', onClick: () => o(n - 1) },
                        '-'
                    ),
                    n,
                    r().createElement(
                        'button',
                        { 'aria-label': 'increment', onClick: () => o(n + 1) },
                        '+'
                    )
                );
            },
            s = (e) => {
                const {
                        initial: t = 0,
                        onChange: n = (e) => {
                            console.log(e);
                        }
                    } = e,
                    [o, a] = (0, i.useState)(t);
                return r().createElement(
                    'div',
                    { 'data-testid': 'stepper' },
                    r().createElement(
                        'button',
                        {
                            'aria-label': 'decrement',
                            onClick: () => {
                                const e = o - 1;
                                a(e), n(e);
                            }
                        },
                        '-'
                    ),
                    o,
                    r().createElement(
                        'button',
                        {
                            'aria-label': 'increment',
                            onClick: () => {
                                const e = o + 1;
                                a(e), n(e);
                            }
                        },
                        '+'
                    )
                );
            },
            d = (e) => {
                const {
                    imageSrc: t,
                    title: n = 'Platform',
                    message: o = 'You have a new message!'
                } = e;
                return r().createElement(
                    'div',
                    {
                        className:
                            'p-6 max-w-sm mx-auto bg-white dark:bg-black rounded-xl shadow-lg flex items-center space-x-4'
                    },
                    t &&
                        r().createElement(
                            'div',
                            { className: 'shrink-0' },
                            r().createElement('img', {
                                className:
                                    'h-12 w-12 text-black dark:text-white',
                                src: t
                            })
                        ),
                    r().createElement(
                        'div',
                        null,
                        r().createElement(
                            'div',
                            {
                                className:
                                    'text-xl font-medium text-black dark:text-white'
                            },
                            n
                        ),
                        r().createElement(
                            'p',
                            { className: 'text-slate-500' },
                            o
                        )
                    )
                );
            };
        var u = function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, i) {
                function r(e) {
                    try {
                        c(o.next(e));
                    } catch (e) {
                        i(e);
                    }
                }
                function l(e) {
                    try {
                        c(o.throw(e));
                    } catch (e) {
                        i(e);
                    }
                }
                function c(e) {
                    var t;
                    e.done
                        ? a(e.value)
                        : ((t = e.value),
                          t instanceof n
                              ? t
                              : new n(function (e) {
                                    e(t);
                                })).then(r, l);
                }
                c((o = o.apply(e, t || [])).next());
            });
        };
        const p = (e) => {
                const { pathname: t, pathnames: n = new Map() } = e;
                return r().createElement(
                    r().Fragment,
                    null,
                    n.has(t)
                        ? r().createElement('img', {
                              src: n.get(t),
                              alt: t,
                              width: '32px',
                              height: '32px'
                          })
                        : r().createElement('span', null, t)
                );
            },
            m = (e) => {
                const {
                        right: t = '40px',
                        bottom: n = '40px',
                        zIndex: o = 9,
                        pathnames: a = new Map()
                    } = e,
                    l = localStorage.getItem('favorites') || '[]';
                let c = (0, i.useMemo)(() => {
                    const e = Array.from(new Set(JSON.parse(l)));
                    return (
                        l.length !== e.length &&
                            localStorage.setItem(
                                'favorites',
                                JSON.stringify(e)
                            ),
                        e
                    );
                }, [w]);
                const s = new Array(c.length);
                s.fill(!1);
                const [d, m] = (0, i.useState)(s),
                    [f, x] = (0, i.useState)(!1),
                    [h, g] = (0, i.useState)(!1);
                function b(e) {
                    return u(this, void 0, void 0, function* () {
                        return new Promise((t) => {
                            setTimeout(t, e);
                        });
                    });
                }
                function v() {
                    return u(this, void 0, void 0, function* () {
                        for (let e = 0; h && e < 10; e += 1) yield b(125);
                    });
                }
                function y() {
                    return u(this, void 0, void 0, function* () {
                        f ||
                            0 === c.length ||
                            (yield v(), g(!0), x(!0), yield b(750), g(!1));
                    });
                }
                function w() {
                    return u(this, void 0, void 0, function* () {
                        yield v(),
                            g(!0),
                            c.push(window.location.pathname),
                            localStorage.setItem(
                                'favorites',
                                JSON.stringify(c)
                            ),
                            x(!0),
                            f || (yield b(750)),
                            g(!1);
                    });
                }
                function k(e) {
                    return u(this, void 0, void 0, function* () {
                        (d[e] = !0), m([...d]);
                    });
                }
                function E(e) {
                    return u(this, void 0, void 0, function* () {
                        (d[e] = !1), m([...d]);
                    });
                }
                const S = c.map((e, i) =>
                    r().createElement(
                        'span',
                        {
                            'data-cy': `favorite-span-${i}`,
                            key: e,
                            onMouseOver: () => {
                                k(i);
                            },
                            onFocus: () => {
                                k(i);
                            },
                            onMouseOut: () => {
                                E(i);
                            },
                            onBlur: () => {
                                E(i);
                            },
                            style: {
                                display: 'inline-block',
                                position: 'fixed',
                                bottom: 0,
                                right: 0,
                                zIndex: o + c.length - 1 - i,
                                transform: `translateY(-${
                                    f ? 65 * (c.length - i) : 0
                                }px)`,
                                transition: '0.75s'
                            }
                        },
                        r().createElement(
                            'button',
                            {
                                'data-cy': `favorite-goto-button-${i}`,
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
                            r().createElement(p, {
                                'data-cy': `favorite-icon-${i}`,
                                pathname: e,
                                pathnames: a
                            }),
                            r().createElement(
                                'span',
                                {
                                    'data-cy': `favorite-tooltip-${i}`,
                                    style: {
                                        visibility: d[i] ? 'visible' : 'hidden',
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
                        r().createElement(
                            'button',
                            {
                                'data-cy': `favorite-delete-button-${i}`,
                                type: 'button',
                                onClick: () => {
                                    !(function (e) {
                                        u(this, void 0, void 0, function* () {
                                            yield v(),
                                                g(!0),
                                                x(!1),
                                                f && (yield b(750));
                                            const t = [];
                                            (c = Array.from(new Set(c))),
                                                c.forEach((n) => {
                                                    n !== e && t.push(n);
                                                }),
                                                (c = t),
                                                localStorage.setItem(
                                                    'favorites',
                                                    JSON.stringify(c)
                                                ),
                                                g(!1);
                                        });
                                    })(e);
                                },
                                style: {
                                    display:
                                        d[i] && f ? 'inline-block' : 'none',
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
                return r().createElement(
                    r().Fragment,
                    null,
                    r().createElement(
                        'button',
                        {
                            'data-cy': 'main-button',
                            type: 'button',
                            onMouseOver: y,
                            onFocus: y,
                            onClick: function () {
                                return u(this, void 0, void 0, function* () {
                                    0 !== c.length &&
                                        (yield v(),
                                        g(!0),
                                        x(!f),
                                        yield b(750),
                                        g(!1));
                                });
                            },
                            style: {
                                position: 'fixed',
                                bottom: n,
                                right: t,
                                zIndex: o + 2 * c.length,
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
                        `${c.length} ${h ? '⌛' : '🔗'}`
                    ),
                    r().createElement(
                        'button',
                        {
                            'data-cy': 'add-button',
                            type: 'button',
                            onClick: w,
                            style: {
                                position: 'fixed',
                                bottom: `calc(${n} + 45px)`,
                                right: `calc(${t} - 20px)`,
                                zIndex: o + c.length,
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
                    S
                );
            };
        return a;
    })()
);
