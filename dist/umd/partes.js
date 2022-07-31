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
            var i = n[e];
            if (void 0 !== i) return i.exports;
            var a = (n[e] = { exports: {} });
            return t[e](a, a.exports, o), a.exports;
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
        var i = {};
        return (
            (() => {
                o.r(i),
                    o.d(i, {
                        Notification: () => r,
                        SpeedDial: () => s,
                        Stepper: () => n,
                        StepperEvents: () => a
                    });
                var e = o(359),
                    t = o.n(e);
                const n = (n) => {
                        const { initial: o = 0 } = n,
                            [i, a] = (0, e.useState)(o);
                        return t().createElement(
                            'div',
                            { 'data-testid': 'stepper' },
                            t().createElement(
                                'button',
                                {
                                    'aria-label': 'decrement',
                                    onClick: () => a(i - 1)
                                },
                                '-'
                            ),
                            i,
                            t().createElement(
                                'button',
                                {
                                    'aria-label': 'increment',
                                    onClick: () => a(i + 1)
                                },
                                '+'
                            )
                        );
                    },
                    a = (n) => {
                        const {
                                initial: o = 0,
                                onChange: i = (e) => {
                                    console.log(e);
                                }
                            } = n,
                            [a, r] = (0, e.useState)(o);
                        return t().createElement(
                            'div',
                            { 'data-testid': 'stepper' },
                            t().createElement(
                                'button',
                                {
                                    'aria-label': 'decrement',
                                    onClick: () => {
                                        const e = a - 1;
                                        r(e), i(e);
                                    }
                                },
                                '-'
                            ),
                            a,
                            t().createElement(
                                'button',
                                {
                                    'aria-label': 'increment',
                                    onClick: () => {
                                        const e = a + 1;
                                        r(e), i(e);
                                    }
                                },
                                '+'
                            )
                        );
                    },
                    r = (e) => {
                        const {
                            imageSrc: n,
                            title: o = 'Platform',
                            message: i = 'You have a new message!'
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
                                    i
                                )
                            )
                        );
                    };
                var l = function (e, t, n, o) {
                    return new (n || (n = Promise))(function (i, a) {
                        function r(e) {
                            try {
                                c(o.next(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function l(e) {
                            try {
                                c(o.throw(e));
                            } catch (e) {
                                a(e);
                            }
                        }
                        function c(e) {
                            var t;
                            e.done
                                ? i(e.value)
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
                const c = (e) => {
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
                    s = (n) => {
                        const {
                                right: o = '40px',
                                bottom: i = '40px',
                                zIndex: a = 9,
                                pathnames: r = new Map()
                            } = n,
                            s = localStorage.getItem('favorites') || '[]';
                        let d = (0, e.useMemo)(() => {
                            const e = Array.from(new Set(JSON.parse(s)));
                            return (
                                s.length !== e.length &&
                                    localStorage.setItem(
                                        'favorites',
                                        JSON.stringify(e)
                                    ),
                                e
                            );
                        }, [w]);
                        const u = new Array(d.length);
                        u.fill(!1);
                        const [p, x] = (0, e.useState)(u),
                            [m, f] = (0, e.useState)(!1),
                            [h, b] = (0, e.useState)(!1);
                        function g(e) {
                            return l(this, void 0, void 0, function* () {
                                return new Promise((t) => {
                                    setTimeout(t, e);
                                });
                            });
                        }
                        function v() {
                            return l(this, void 0, void 0, function* () {
                                for (let e = 0; h && e < 10; e += 1)
                                    yield g(125);
                            });
                        }
                        function y() {
                            return l(this, void 0, void 0, function* () {
                                m ||
                                    0 === d.length ||
                                    (yield v(),
                                    b(!0),
                                    f(!0),
                                    yield g(750),
                                    b(!1));
                            });
                        }
                        function w() {
                            return l(this, void 0, void 0, function* () {
                                yield v(),
                                    b(!0),
                                    d.push(window.location.pathname),
                                    localStorage.setItem(
                                        'favorites',
                                        JSON.stringify(d)
                                    ),
                                    f(!0),
                                    m || (yield g(750)),
                                    b(!1);
                            });
                        }
                        function S(e) {
                            return l(this, void 0, void 0, function* () {
                                (p[e] = !0), x([...p]);
                            });
                        }
                        function k(e) {
                            return l(this, void 0, void 0, function* () {
                                (p[e] = !1), x([...p]);
                            });
                        }
                        const E = d.map((e, n) =>
                            t().createElement(
                                'span',
                                {
                                    'data-cy': `favorite-span-${n}`,
                                    key: e,
                                    onMouseOver: () => {
                                        S(n);
                                    },
                                    onFocus: () => {
                                        S(n);
                                    },
                                    onMouseOut: () => {
                                        k(n);
                                    },
                                    onBlur: () => {
                                        k(n);
                                    },
                                    style: {
                                        display: 'inline-block',
                                        position: 'fixed',
                                        bottom: 0,
                                        right: 0,
                                        zIndex: a + d.length - 1 - n,
                                        transform: `translateY(-${
                                            m ? 65 * (d.length - n) : 0
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
                                            bottom: i,
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
                                    t().createElement(c, {
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
                                                zIndex: a,
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
                                                l(
                                                    this,
                                                    void 0,
                                                    void 0,
                                                    function* () {
                                                        yield v(),
                                                            b(!0),
                                                            f(!1),
                                                            m && (yield g(750));
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
                                                            b(!1);
                                                    }
                                                );
                                            })(e);
                                        },
                                        style: {
                                            display:
                                                p[n] && m
                                                    ? 'inline-block'
                                                    : 'none',
                                            position: 'fixed',
                                            bottom: `calc(${i} + 45px)`,
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
                                        return l(
                                            this,
                                            void 0,
                                            void 0,
                                            function* () {
                                                0 !== d.length &&
                                                    (yield v(),
                                                    b(!0),
                                                    f(!m),
                                                    yield g(750),
                                                    b(!1));
                                            }
                                        );
                                    },
                                    style: {
                                        position: 'fixed',
                                        bottom: i,
                                        right: o,
                                        zIndex: a + 2 * d.length,
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
                                `${d.length} ${h ? '⌛' : '🔗'}`
                            ),
                            t().createElement(
                                'button',
                                {
                                    'data-cy': 'add-button',
                                    type: 'button',
                                    onClick: w,
                                    style: {
                                        position: 'fixed',
                                        bottom: `calc(${i} + 45px)`,
                                        right: `calc(${o} - 20px)`,
                                        zIndex: a + d.length,
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
            i
        );
    })()
);
