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
            var r = (n[t] = { exports: {} });
            return e[t](r, r.exports, o), r.exports;
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
                        SpeedDial: () => c,
                        Stepper: () => n,
                        StepperEvents: () => r
                    });
                var t = o(359),
                    e = o.n(t);
                const n = (n) => {
                        const { initial: o = 0 } = n,
                            [i, r] = (0, t.useState)(o);
                        return e().createElement(
                            'div',
                            { 'data-testid': 'stepper' },
                            e().createElement(
                                'button',
                                {
                                    'aria-label': 'decrement',
                                    onClick: () => r(i - 1)
                                },
                                '-'
                            ),
                            i,
                            e().createElement(
                                'button',
                                {
                                    'aria-label': 'increment',
                                    onClick: () => r(i + 1)
                                },
                                '+'
                            )
                        );
                    },
                    r = (n) => {
                        const {
                                initial: o = 0,
                                onChange: i = (t) => {
                                    console.log(t);
                                }
                            } = n,
                            [r, a] = (0, t.useState)(o);
                        return e().createElement(
                            'div',
                            { 'data-testid': 'stepper' },
                            e().createElement(
                                'button',
                                {
                                    'aria-label': 'decrement',
                                    onClick: () => {
                                        const t = r - 1;
                                        a(t), i(t);
                                    }
                                },
                                '-'
                            ),
                            r,
                            e().createElement(
                                'button',
                                {
                                    'aria-label': 'increment',
                                    onClick: () => {
                                        const t = r + 1;
                                        a(t), i(t);
                                    }
                                },
                                '+'
                            )
                        );
                    };
                var a = function (t, e, n, o) {
                    return new (n || (n = Promise))(function (i, r) {
                        function a(t) {
                            try {
                                c(o.next(t));
                            } catch (t) {
                                r(t);
                            }
                        }
                        function l(t) {
                            try {
                                c(o.throw(t));
                            } catch (t) {
                                r(t);
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
                                        })).then(a, l);
                        }
                        c((o = o.apply(t, e || [])).next());
                    });
                };
                const l = (t) => {
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
                    c = (n) => {
                        const {
                                right: o = '40px',
                                bottom: i = '40px',
                                zIndex: r = 9,
                                pathnames: c = new Map()
                            } = n,
                            d = localStorage.getItem('favorites') || '[]';
                        let s = (0, t.useMemo)(() => {
                            const t = Array.from(new Set(JSON.parse(d)));
                            return (
                                d.length !== t.length &&
                                    localStorage.setItem(
                                        'favorites',
                                        JSON.stringify(t)
                                    ),
                                t
                            );
                        }, [S]);
                        const u = new Array(s.length);
                        u.fill(!1);
                        const [p, f] = (0, t.useState)(u),
                            [h, g] = (0, t.useState)(!1),
                            [x, b] = (0, t.useState)(!1);
                        function m(t) {
                            return a(this, void 0, void 0, function* () {
                                return new Promise((e) => {
                                    setTimeout(e, t);
                                });
                            });
                        }
                        function y() {
                            return a(this, void 0, void 0, function* () {
                                for (let t = 0; x && t < 10; t += 1)
                                    yield m(125);
                            });
                        }
                        function v() {
                            return a(this, void 0, void 0, function* () {
                                h ||
                                    0 === s.length ||
                                    (yield y(),
                                    b(!0),
                                    g(!0),
                                    yield m(750),
                                    b(!1));
                            });
                        }
                        function S() {
                            return a(this, void 0, void 0, function* () {
                                yield y(),
                                    b(!0),
                                    s.push(window.location.pathname),
                                    localStorage.setItem(
                                        'favorites',
                                        JSON.stringify(s)
                                    ),
                                    g(!0),
                                    h || (yield m(750)),
                                    b(!1);
                            });
                        }
                        function w(t) {
                            return a(this, void 0, void 0, function* () {
                                (p[t] = !0), f([...p]);
                            });
                        }
                        function E(t) {
                            return a(this, void 0, void 0, function* () {
                                (p[t] = !1), f([...p]);
                            });
                        }
                        const k = s.map((t, n) =>
                            e().createElement(
                                'span',
                                {
                                    'data-cy': `favorite-span-${n}`,
                                    key: t,
                                    onMouseOver: () => {
                                        w(n);
                                    },
                                    onFocus: () => {
                                        w(n);
                                    },
                                    onMouseOut: () => {
                                        E(n);
                                    },
                                    onBlur: () => {
                                        E(n);
                                    },
                                    style: {
                                        display: 'inline-block',
                                        position: 'fixed',
                                        bottom: 0,
                                        right: 0,
                                        zIndex: r + s.length - 1 - n,
                                        transform: `translateY(-${
                                            h ? 65 * (s.length - n) : 0
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
                                        style: {
                                            display: 'inline-block',
                                            position: 'fixed',
                                            bottom: i,
                                            right: o,
                                            margin: 4,
                                            width: '60px',
                                            height: '60px',
                                            backgroundColor: '#FFF',
                                            color: '#000',
                                            fontWeight: 'bold',
                                            borderRadius: '50px',
                                            textAlign: 'center',
                                            fontSize: 'xx-small'
                                        }
                                    },
                                    e().createElement(l, {
                                        'data-cy': `favorite-icon-${n}`,
                                        pathname: t,
                                        pathnames: c
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
                                                zIndex: r,
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
                                                a(
                                                    this,
                                                    void 0,
                                                    void 0,
                                                    function* () {
                                                        yield y(),
                                                            b(!0),
                                                            g(!1),
                                                            h && (yield m(750));
                                                        const e = [];
                                                        (s = Array.from(
                                                            new Set(s)
                                                        )),
                                                            s.forEach((n) => {
                                                                n !== t &&
                                                                    e.push(n);
                                                            }),
                                                            (s = e),
                                                            localStorage.setItem(
                                                                'favorites',
                                                                JSON.stringify(
                                                                    s
                                                                )
                                                            ),
                                                            b(!1);
                                                    }
                                                );
                                            })(t);
                                        },
                                        style: {
                                            display:
                                                p[n] && h
                                                    ? 'inline-block'
                                                    : 'none',
                                            position: 'fixed',
                                            bottom: `calc(${i} + 45px)`,
                                            right: o,
                                            width: '20px',
                                            height: '20px',
                                            backgroundColor: '#f23a12',
                                            color: '#000',
                                            fontWeight: 'bold',
                                            borderRadius: '50px',
                                            textAlign: 'center',
                                            padding: '0px'
                                        }
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
                                    onMouseOver: v,
                                    onFocus: v,
                                    onClick: function () {
                                        return a(
                                            this,
                                            void 0,
                                            void 0,
                                            function* () {
                                                0 !== s.length &&
                                                    (yield y(),
                                                    b(!0),
                                                    g(!h),
                                                    yield m(750),
                                                    b(!1));
                                            }
                                        );
                                    },
                                    style: {
                                        position: 'fixed',
                                        bottom: i,
                                        right: o,
                                        zIndex: r + 2 * s.length,
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
                                `${s.length} ${x ? '⌛' : '🔗'}`
                            ),
                            e().createElement(
                                'button',
                                {
                                    'data-cy': 'add-button',
                                    type: 'button',
                                    onClick: S,
                                    style: {
                                        position: 'fixed',
                                        bottom: `calc(${i} + 45px)`,
                                        right: `calc(${o} - 20px)`,
                                        zIndex: r + s.length,
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
                            k
                        );
                    };
            })(),
            i
        );
    })()
);
