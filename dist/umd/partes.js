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
                359: (t) => {
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
        return (
            (() => {
                o.r(a),
                    o.d(a, {
                        DarkModeToggle: () => n,
                        Notification: () => l,
                        SpeedDial: () => d,
                        Stepper: () => i,
                        StepperEvents: () => r
                    });
                var e = o(359),
                    t = o.n(e);
                const n = () => {
                        const [n, o] = (0, e.useState)(!1);
                        function a(e) {
                            e
                                ? document.documentElement.classList.add('dark')
                                : document.documentElement.classList.remove(
                                      'dark'
                                  ),
                                localStorage.setItem(
                                    'dark-mode-bonapata',
                                    `${n}`
                                ),
                                o(e);
                        }
                        return (
                            (0, e.useEffect)(() => {
                                let e = !1;
                                (e =
                                    'dark-mode-bonapata' in localStorage
                                        ? 'true' ===
                                          localStorage.getItem(
                                              'dark-mode-bonapata'
                                          )
                                        : window.matchMedia(
                                              '(prefers-color-scheme: dark)'
                                          ).matches),
                                    a(e);
                            }, []),
                            t().createElement(
                                'button',
                                {
                                    onClick: () => {
                                        a(!n);
                                    }
                                },
                                n
                                    ? t().createElement(
                                          'svg',
                                          {
                                              xmlns: 'http://www.w3.org/2000/svg',
                                              height: '20',
                                              width: '20',
                                              viewBox: '0 0 20 20'
                                          },
                                          t().createElement('path', {
                                              fill: encodeURIComponent('#fff'),
                                              d: 'M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z'
                                          })
                                      )
                                    : t().createElement(
                                          'svg',
                                          {
                                              xmlns: 'http://www.w3.org/2000/svg',
                                              height: '20',
                                              width: '20',
                                              viewBox: '0 0 20 20'
                                          },
                                          t().createElement('path', {
                                              fill: encodeURIComponent('#fff'),
                                              d: 'M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z'
                                          })
                                      )
                            )
                        );
                    },
                    i = (n) => {
                        const { initial: o = 0 } = n,
                            [a, i] = (0, e.useState)(o);
                        return t().createElement(
                            'div',
                            { 'data-testid': 'stepper' },
                            t().createElement(
                                'button',
                                {
                                    'aria-label': 'decrement',
                                    onClick: () => i(a - 1)
                                },
                                '-'
                            ),
                            a,
                            t().createElement(
                                'button',
                                {
                                    'aria-label': 'increment',
                                    onClick: () => i(a + 1)
                                },
                                '+'
                            )
                        );
                    },
                    r = (n) => {
                        const {
                                initial: o = 0,
                                onChange: a = (e) => {
                                    console.log(e);
                                }
                            } = n,
                            [i, r] = (0, e.useState)(o);
                        return t().createElement(
                            'div',
                            { 'data-testid': 'stepper' },
                            t().createElement(
                                'button',
                                {
                                    'aria-label': 'decrement',
                                    onClick: () => {
                                        const e = i - 1;
                                        r(e), a(e);
                                    }
                                },
                                '-'
                            ),
                            i,
                            t().createElement(
                                'button',
                                {
                                    'aria-label': 'increment',
                                    onClick: () => {
                                        const e = i + 1;
                                        r(e), a(e);
                                    }
                                },
                                '+'
                            )
                        );
                    },
                    l = (e) => {
                        const {
                            imageSrc: n,
                            title: o = 'Platform',
                            message: a = 'You have a new message!'
                        } = e;
                        return t().createElement(
                            'div',
                            {
                                className:
                                    'p-6 max-w-sm mx-auto bg-white dark:bg-black rounded-xl shadow-lg flex items-center space-x-4'
                            },
                            n &&
                                t().createElement(
                                    'div',
                                    { className: 'shrink-0' },
                                    t().createElement('img', {
                                        className:
                                            'h-12 w-12 text-black dark:text-white',
                                        src: n
                                    })
                                ),
                            t().createElement(
                                'div',
                                null,
                                t().createElement(
                                    'div',
                                    {
                                        className:
                                            'text-xl font-medium text-black dark:text-white'
                                    },
                                    o
                                ),
                                t().createElement(
                                    'p',
                                    { className: 'text-slate-500' },
                                    a
                                )
                            )
                        );
                    };
                var c = function (e, t, n, o) {
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
                const s = (e) => {
                        const { pathname: n, pathnames: o = new Map() } = e;
                        return t().createElement(
                            t().Fragment,
                            null,
                            o.has(n)
                                ? t().createElement('img', {
                                      src: o.get(n),
                                      alt: n,
                                      width: '32px',
                                      height: '32px'
                                  })
                                : t().createElement('span', null, n)
                        );
                    },
                    d = (n) => {
                        const {
                                right: o = '40px',
                                bottom: a = '40px',
                                zIndex: i = 9,
                                pathnames: r = new Map()
                            } = n,
                            l = localStorage.getItem('favorites') || '[]';
                        let d = (0, e.useMemo)(() => {
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
                        const u = new Array(d.length);
                        u.fill(!1);
                        const [p, m] = (0, e.useState)(u),
                            [h, f] = (0, e.useState)(!1),
                            [x, g] = (0, e.useState)(!1);
                        function b(e) {
                            return c(this, void 0, void 0, function* () {
                                return new Promise((t) => {
                                    setTimeout(t, e);
                                });
                            });
                        }
                        function v() {
                            return c(this, void 0, void 0, function* () {
                                for (let e = 0; x && e < 10; e += 1)
                                    yield b(125);
                            });
                        }
                        function y() {
                            return c(this, void 0, void 0, function* () {
                                h ||
                                    0 === d.length ||
                                    (yield v(),
                                    g(!0),
                                    f(!0),
                                    yield b(750),
                                    g(!1));
                            });
                        }
                        function w() {
                            return c(this, void 0, void 0, function* () {
                                yield v(),
                                    g(!0),
                                    d.push(window.location.pathname),
                                    localStorage.setItem(
                                        'favorites',
                                        JSON.stringify(d)
                                    ),
                                    f(!0),
                                    h || (yield b(750)),
                                    g(!1);
                            });
                        }
                        function k(e) {
                            return c(this, void 0, void 0, function* () {
                                (p[e] = !0), m([...p]);
                            });
                        }
                        function S(e) {
                            return c(this, void 0, void 0, function* () {
                                (p[e] = !1), m([...p]);
                            });
                        }
                        const E = d.map((e, n) =>
                            t().createElement(
                                'span',
                                {
                                    'data-cy': `favorite-span-${n}`,
                                    key: e,
                                    onMouseOver: () => {
                                        k(n);
                                    },
                                    onFocus: () => {
                                        k(n);
                                    },
                                    onMouseOut: () => {
                                        S(n);
                                    },
                                    onBlur: () => {
                                        S(n);
                                    },
                                    style: {
                                        display: 'inline-block',
                                        position: 'fixed',
                                        bottom: 0,
                                        right: 0,
                                        zIndex: i + d.length - 1 - n,
                                        transform: `translateY(-${
                                            h ? 65 * (d.length - n) : 0
                                        }px)`,
                                        transition: '0.75s'
                                    }
                                },
                                t().createElement(
                                    'button',
                                    {
                                        'data-cy': `favorite-goto-button-${n}`,
                                        type: 'button',
                                        onClick: () => {
                                            return (
                                                (t = e),
                                                void (
                                                    window.location.pathname !==
                                                        t &&
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
                                            bottom: a,
                                            right: o,
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
                                    t().createElement(s, {
                                        'data-cy': `favorite-icon-${n}`,
                                        pathname: e,
                                        pathnames: r
                                    }),
                                    t().createElement(
                                        'span',
                                        {
                                            'data-cy': `favorite-tooltip-${n}`,
                                            style: {
                                                visibility: p[n]
                                                    ? 'visible'
                                                    : 'hidden',
                                                width: '120px',
                                                backgroundColor: 'black',
                                                color: '#fff',
                                                textAlign: 'center',
                                                borderRadius: '6px',
                                                padding: '5px 0',
                                                position: 'absolute',
                                                zIndex: i,
                                                right: '105%',
                                                top: '35%'
                                            }
                                        },
                                        e
                                    )
                                ),
                                t().createElement(
                                    'button',
                                    {
                                        'data-cy': `favorite-delete-button-${n}`,
                                        type: 'button',
                                        onClick: () => {
                                            !(function (e) {
                                                c(
                                                    this,
                                                    void 0,
                                                    void 0,
                                                    function* () {
                                                        yield v(),
                                                            g(!0),
                                                            f(!1),
                                                            h && (yield b(750));
                                                        const t = [];
                                                        (d = Array.from(
                                                            new Set(d)
                                                        )),
                                                            d.forEach((n) => {
                                                                n !== e &&
                                                                    t.push(n);
                                                            }),
                                                            (d = t),
                                                            localStorage.setItem(
                                                                'favorites',
                                                                JSON.stringify(
                                                                    d
                                                                )
                                                            ),
                                                            g(!1);
                                                    }
                                                );
                                            })(e);
                                        },
                                        style: {
                                            display:
                                                p[n] && h
                                                    ? 'inline-block'
                                                    : 'none',
                                            position: 'fixed',
                                            bottom: `calc(${a} + 45px)`,
                                            right: o,
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
                        return t().createElement(
                            t().Fragment,
                            null,
                            t().createElement(
                                'button',
                                {
                                    'data-cy': 'main-button',
                                    type: 'button',
                                    onMouseOver: y,
                                    onFocus: y,
                                    onClick: function () {
                                        return c(
                                            this,
                                            void 0,
                                            void 0,
                                            function* () {
                                                0 !== d.length &&
                                                    (yield v(),
                                                    g(!0),
                                                    f(!h),
                                                    yield b(750),
                                                    g(!1));
                                            }
                                        );
                                    },
                                    style: {
                                        position: 'fixed',
                                        bottom: a,
                                        right: o,
                                        zIndex: i + 2 * d.length,
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
                                `${d.length} ${x ? '⌛' : '🔗'}`
                            ),
                            t().createElement(
                                'button',
                                {
                                    'data-cy': 'add-button',
                                    type: 'button',
                                    onClick: w,
                                    style: {
                                        position: 'fixed',
                                        bottom: `calc(${a} + 45px)`,
                                        right: `calc(${o} - 20px)`,
                                        zIndex: i + d.length,
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
                            E
                        );
                    };
            })(),
            a
        );
    })()
);
