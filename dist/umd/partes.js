!(function (t, e) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = e(require('react')))
        : 'function' == typeof define && define.amd
        ? define(['react'], e)
        : 'object' == typeof exports
        ? (exports.partes = e(require('react')))
        : (t.partes = e(t.React));
})(self, (t) =>
    (() => {
        'use strict';
        var e = {
                359: (e) => {
                    e.exports = t;
                }
            },
            n = {};
        function o(t) {
            var i = n[t];
            if (void 0 !== i) return i.exports;
            var a = (n[t] = { exports: {} });
            return e[t](a, a.exports, o), a.exports;
        }
        (o.n = (t) => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return o.d(e, { a: e }), e;
        }),
            (o.d = (t, e) => {
                for (var n in e)
                    o.o(e, n) &&
                        !o.o(t, n) &&
                        Object.defineProperty(t, n, {
                            enumerable: !0,
                            get: e[n]
                        });
            }),
            (o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
            (o.r = (t) => {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {
                        value: 'Module'
                    }),
                    Object.defineProperty(t, '__esModule', { value: !0 });
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
                var t = o(359),
                    e = o.n(t);
                const n = (n) => {
                        const { initial: o = 0 } = n,
                            [i, a] = (0, t.useState)(o);
                        return e().createElement(
                            'div',
                            { 'data-testid': 'stepper' },
                            e().createElement(
                                'button',
                                {
                                    'aria-label': 'decrement',
                                    onClick: () => a(i - 1)
                                },
                                '-'
                            ),
                            i,
                            e().createElement(
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
                                onChange: i = (t) => {
                                    console.log(t);
                                }
                            } = n,
                            [a, r] = (0, t.useState)(o);
                        return e().createElement(
                            'div',
                            { 'data-testid': 'stepper' },
                            e().createElement(
                                'button',
                                {
                                    'aria-label': 'decrement',
                                    onClick: () => {
                                        const t = a - 1;
                                        r(t), i(t);
                                    }
                                },
                                '-'
                            ),
                            a,
                            e().createElement(
                                'button',
                                {
                                    'aria-label': 'increment',
                                    onClick: () => {
                                        const t = a + 1;
                                        r(t), i(t);
                                    }
                                },
                                '+'
                            )
                        );
                    },
                    r = (t) => {
                        const {
                            imageSrc: n,
                            title: o = 'Platform',
                            message: i = 'You have a new message!'
                        } = t;
                        return e().createElement(
                            'div',
                            {
                                className:
                                    'p-6 max-w-sm mx-auto bg-white dark:bg-black rounded-xl shadow-lg flex items-center space-x-4'
                            },
                            n &&
                                e().createElement(
                                    'div',
                                    { className: 'shrink-0' },
                                    e().createElement('img', {
                                        className:
                                            'h-12 w-12 text-black dark:text-white',
                                        src: n
                                    })
                                ),
                            e().createElement(
                                'div',
                                null,
                                e().createElement(
                                    'div',
                                    {
                                        className:
                                            'text-xl font-medium text-black dark:text-white'
                                    },
                                    o
                                ),
                                e().createElement(
                                    'p',
                                    { className: 'text-slate-500' },
                                    i
                                )
                            )
                        );
                    };
                var l = function (t, e, n, o) {
                    return new (n || (n = Promise))(function (i, a) {
                        function r(t) {
                            try {
                                c(o.next(t));
                            } catch (t) {
                                a(t);
                            }
                        }
                        function l(t) {
                            try {
                                c(o.throw(t));
                            } catch (t) {
                                a(t);
                            }
                        }
                        function c(t) {
                            var e;
                            t.done
                                ? i(t.value)
                                : ((e = t.value),
                                  e instanceof n
                                      ? e
                                      : new n(function (t) {
                                            t(e);
                                        })).then(r, l);
                        }
                        c((o = o.apply(t, e || [])).next());
                    });
                };
                const c = (t) => {
                        const { pathname: n, pathnames: o = new Map() } = t;
                        return e().createElement(
                            e().Fragment,
                            null,
                            o.has(n)
                                ? e().createElement('img', {
                                      src: o.get(n),
                                      alt: n,
                                      width: '32px',
                                      height: '32px'
                                  })
                                : e().createElement('span', null, n)
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
                        let d = (0, t.useMemo)(() => {
                            const t = Array.from(new Set(JSON.parse(s)));
                            return (
                                s.length !== t.length &&
                                    localStorage.setItem(
                                        'favorites',
                                        JSON.stringify(t)
                                    ),
                                t
                            );
                        }, [w]);
                        const u = new Array(d.length);
                        u.fill(!1);
                        const [p, m] = (0, t.useState)(u),
                            [f, x] = (0, t.useState)(!1),
                            [h, g] = (0, t.useState)(!1);
                        function b(t) {
                            return l(this, void 0, void 0, function* () {
                                return new Promise((e) => {
                                    setTimeout(e, t);
                                });
                            });
                        }
                        function v() {
                            return l(this, void 0, void 0, function* () {
                                for (let t = 0; h && t < 10; t += 1)
                                    yield b(125);
                            });
                        }
                        function y() {
                            return l(this, void 0, void 0, function* () {
                                f ||
                                    0 === d.length ||
                                    (yield v(),
                                    g(!0),
                                    x(!0),
                                    yield b(750),
                                    g(!1));
                            });
                        }
                        function w() {
                            return l(this, void 0, void 0, function* () {
                                yield v(),
                                    g(!0),
                                    d.push(window.location.pathname),
                                    localStorage.setItem(
                                        'favorites',
                                        JSON.stringify(d)
                                    ),
                                    x(!0),
                                    f || (yield b(750)),
                                    g(!1);
                            });
                        }
                        function k(t) {
                            return l(this, void 0, void 0, function* () {
                                (p[t] = !0), m([...p]);
                            });
                        }
                        function S(t) {
                            return l(this, void 0, void 0, function* () {
                                (p[t] = !1), m([...p]);
                            });
                        }
                        const E = d.map((t, n) =>
                            e().createElement(
                                'span',
                                {
                                    'data-cy': `favorite-span-${n}`,
                                    key: t,
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
                                        zIndex: a + d.length - 1 - n,
                                        transform: `translateY(-${
                                            f ? 65 * (d.length - n) : 0
                                        }px)`,
                                        transition: '0.75s'
                                    }
                                },
                                e().createElement(
                                    'button',
                                    {
                                        'data-cy': `favorite-goto-button-${n}`,
                                        type: 'button',
                                        onClick: () => {
                                            return (
                                                (e = t),
                                                void (
                                                    window.location.pathname !==
                                                        e &&
                                                    window.location.assign(e)
                                                )
                                            );
                                            var e;
                                        },
                                        className:
                                            'bg-white dark:bg-slate-800 text-black dark:text-white',
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
                                            fontSize: 'xx-small'
                                        }
                                    },
                                    e().createElement(c, {
                                        'data-cy': `favorite-icon-${n}`,
                                        pathname: t,
                                        pathnames: r
                                    }),
                                    e().createElement(
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
                                        t
                                    )
                                ),
                                e().createElement(
                                    'button',
                                    {
                                        'data-cy': `favorite-delete-button-${n}`,
                                        type: 'button',
                                        onClick: () => {
                                            !(function (t) {
                                                l(
                                                    this,
                                                    void 0,
                                                    void 0,
                                                    function* () {
                                                        yield v(),
                                                            g(!0),
                                                            x(!1),
                                                            f && (yield b(750));
                                                        const e = [];
                                                        (d = Array.from(
                                                            new Set(d)
                                                        )),
                                                            d.forEach((n) => {
                                                                n !== t &&
                                                                    e.push(n);
                                                            }),
                                                            (d = e),
                                                            localStorage.setItem(
                                                                'favorites',
                                                                JSON.stringify(
                                                                    d
                                                                )
                                                            ),
                                                            g(!1);
                                                    }
                                                );
                                            })(t);
                                        },
                                        style: {
                                            display:
                                                p[n] && f
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
                                            fontSize: 'xx-small'
                                        },
                                        className:
                                            'bg-red-500 text-black dark:text-white'
                                    },
                                    'x'
                                )
                            )
                        );
                        return e().createElement(
                            e().Fragment,
                            null,
                            e().createElement(
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
                                                    g(!0),
                                                    x(!f),
                                                    yield b(750),
                                                    g(!1));
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
                            e().createElement(
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
