! function(e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    t.m = e, t.c = n, t.d = function(exports, e, n) {
        t.o(exports, e) || Object.defineProperty(exports, e, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 59)
}([, function(e, exports) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, exports) {
    var n = e.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = n)
}, function(e, exports, n) {
    e.exports = !n(9)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, exports) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, exports) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, exports, n) {
    var t = n(28),
        o = n(13);
    e.exports = function(e) {
        return t(o(e))
    }
}, function(e, exports, n) {
    var t = n(8),
        o = n(12);
    e.exports = n(3) ? function(e, n, r) {
        return t.f(e, n, o(1, r))
    } : function(e, n, t) {
        return e[n] = t, e
    }
}, function(e, exports, n) {
    var t = n(10),
        o = n(25),
        r = n(18),
        a = Object.defineProperty;
    exports.f = n(3) ? Object.defineProperty : function(e, n, i) {
        if (t(e), n = r(n, !0), t(i), o) try {
            return a(e, n, i)
        } catch (e) {}
        if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
        return "value" in i && (e[n] = i.value), e
    }
}, function(e, exports) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, exports, n) {
    var t = n(4);
    e.exports = function(e) {
        if (!t(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, exports, n) {
    var t = n(1),
        o = n(2),
        r = n(24),
        a = n(7),
        i = n(5),
        u = function(e, n, c) {
            var s, f, d, l = e & u.F,
                p = e & u.G,
                m = e & u.S,
                g = e & u.P,
                h = e & u.B,
                v = e & u.W,
                exports = p ? o : o[n] || (o[n] = {}),
                y = exports.prototype,
                b = p ? t : m ? t[n] : (t[n] || {}).prototype;
            for (s in p && (c = n), c)(f = !l && b && void 0 !== b[s]) && i(exports, s) || (d = f ? b[s] : c[s], exports[s] = p && "function" != typeof b[s] ? c[s] : h && f ? r(d, t) : v && b[s] == d ? function(e) {
                var n = function(n, t, o) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(n);
                            case 2:
                                return new e(n, t)
                        }
                        return new e(n, t, o)
                    }
                    return e.apply(this, arguments)
                };
                return n.prototype = e.prototype, n
            }(d) : g && "function" == typeof d ? r(Function.call, d) : d, g && ((exports.virtual || (exports.virtual = {}))[s] = d, e & u.R && y && !y[s] && a(y, s, d)))
        };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
}, function(e, exports) {
    e.exports = function(e, n) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: n
        }
    }
}, function(e, exports) {
    e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, exports) {
    var n = Math.ceil,
        t = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? t : n)(e)
    }
}, function(e, exports) {
    e.exports = !0
}, function(e, exports) {
    var n = 0,
        t = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + t).toString(36))
    }
}, , function(e, exports, n) {
    var t = n(4);
    e.exports = function(e, n) {
        if (!t(e)) return e;
        var o, r;
        if (n && "function" == typeof(o = e.toString) && !t(r = o.call(e))) return r;
        if ("function" == typeof(o = e.valueOf) && !t(r = o.call(e))) return r;
        if (!n && "function" == typeof(o = e.toString) && !t(r = o.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, exports, n) {
    var t = n(27),
        o = n(22);
    e.exports = Object.keys || function(e) {
        return t(e, o)
    }
}, function(e, exports, n) {
    var t = n(21)("keys"),
        o = n(16);
    e.exports = function(e) {
        return t[e] || (t[e] = o(e))
    }
}, function(e, exports, n) {
    var t = n(2),
        o = n(1),
        r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (e.exports = function(e, n) {
        return r[e] || (r[e] = void 0 !== n ? n : {})
    })("versions", []).push({
        version: t.version,
        mode: n(15) ? "pure" : "global",
        copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, exports) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, exports) {
    exports.f = {}.propertyIsEnumerable
}, function(e, exports, n) {
    var t = n(32);
    e.exports = function(e, n, o) {
        if (t(e), void 0 === n) return e;
        switch (o) {
            case 1:
                return function(t) {
                    return e.call(n, t)
                };
            case 2:
                return function(t, o) {
                    return e.call(n, t, o)
                };
            case 3:
                return function(t, o, r) {
                    return e.call(n, t, o, r)
                }
        }
        return function() {
            return e.apply(n, arguments)
        }
    }
}, function(e, exports, n) {
    e.exports = !n(3) && !n(9)(function() {
        return 7 != Object.defineProperty(n(26)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, exports, n) {
    var t = n(4),
        o = n(1).document,
        r = t(o) && t(o.createElement);
    e.exports = function(e) {
        return r ? o.createElement(e) : {}
    }
}, function(e, exports, n) {
    var t = n(5),
        o = n(6),
        r = n(33)(!1),
        a = n(20)("IE_PROTO");
    e.exports = function(e, n) {
        var i, u = o(e),
            c = 0,
            s = [];
        for (i in u) i != a && t(u, i) && s.push(i);
        for (; n.length > c;) t(u, i = n[c++]) && (~r(s, i) || s.push(i));
        return s
    }
}, function(e, exports, n) {
    var t = n(29);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == t(e) ? e.split("") : Object(e)
    }
}, function(e, exports) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, exports) {
    exports.f = Object.getOwnPropertySymbols
}, function(e, exports, n) {
    var t = n(13);
    e.exports = function(e) {
        return Object(t(e))
    }
}, function(e, exports) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(e, exports, n) {
    var t = n(6),
        o = n(34),
        r = n(35);
    e.exports = function(e) {
        return function(n, a, i) {
            var u, c = t(n),
                s = o(c.length),
                f = r(i, s);
            if (e && a != a) {
                for (; s > f;)
                    if ((u = c[f++]) != u) return !0
            } else
                for (; s > f; f++)
                    if ((e || f in c) && c[f] === a) return e || f || 0;
            return !e && -1
        }
    }
}, function(e, exports, n) {
    var t = n(14),
        o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(t(e), 9007199254740991) : 0
    }
}, function(e, exports, n) {
    var t = n(14),
        o = Math.max,
        r = Math.min;
    e.exports = function(e, n) {
        return (e = t(e)) < 0 ? o(e + n, 0) : r(e, n)
    }
}, function(e, exports) {
    e.exports = function(e) {
        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        var t = {};
        return n.m = e, n.c = t, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, n.p = "//g.alicdn.com/lzdmod/common-info/6.0.20/", n(n.s = 3)
    }([function(e, n, t) {
        "use strict";

        function o(e, n, t) {
            if ("number" == typeof(t = Object.assign({
                    path: "/"
                }, a, t)).expires) {
                var o = new Date;
                o.setMilliseconds(o.getMilliseconds() + 864e5 * t.expires), t.expires = o
            }
            var r = void 0;
            t.expires = t.expires ? t.expires.toUTCString() : "";
            try {
                r = JSON.stringify(n), /^[\{\[]/.test(r) && (n = r)
            } catch (e) {}
            n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
            var i = "";
            for (var u in t) t[u] && (i += "; " + u, !0 !== t[u] && (i += "=" + t[u]));
            return document.cookie = e + "=" + n + i
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = {},
            a = {};
        r.getJSON = function() {
            return get({
                json: !0
            })
        }, r.get = function(e) {
            for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = e ? null : {}, o = document.cookie ? document.cookie.split("; ") : [], r = /(%[0-9A-Z]{2})+/g, a = 0; a < o.length; a++) {
                var i = o[a].split("="),
                    u = i.slice(1).join("=");
                n.json || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                try {
                    var c = i[0].replace(r, decodeURIComponent);
                    if (u = u.replace(r, decodeURIComponent), n.json) try {
                        u = JSON.parse(u)
                    } catch (e) {}
                    if (e === c) {
                        t = u;
                        break
                    }
                    e || (t[c] = u)
                } catch (e) {}
            }
            return t
        }, r.set = o, r.remove = function(e, n) {
            o(e, "", Object.assign(n, {
                expires: -1
            }))
        }, n.default = r
    }, function(e, n, t) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e = s({}, l, e);
            var n = a(),
                t = {
                    regionID: "",
                    language: ""
                };
            return "weex" === n ? t = function() {
                var e = "",
                    n = "";
                return "object" === ("undefined" == typeof WXEnvironment ? "undefined" : c(WXEnvironment)) && (e = WXEnvironment && WXEnvironment["_i18n_.regionID"] || "", n = WXEnvironment && WXEnvironment["_i18n_.language"] || ""), {
                    regionID: e,
                    language: n
                }
            }() : "object" === ("undefined" == typeof window ? "undefined" : c(window)) && "web" === n && (t = function() {
                var e = "",
                    n = "";
                if ("object" === ("undefined" == typeof window ? "undefined" : c(window)) && window._i18n_) {
                    var t = window._i18n_;
                    if ("string" == typeof t) try {
                        t = JSON.parse(t)
                    } catch (e) {}
                    "object" === (void 0 === t ? "undefined" : c(t)) && (e = t.regionID, n = t.language)
                }
                if (!e && window.g_config && "object" === c(window.g_config) && (e = window.g_config.regionID, n = window.g_config.language), !e && "object" === ("undefined" == typeof location ? "undefined" : c(location)) && location.hostname) {
                    for (var o in d.default) {
                        var r = d.default[o];
                        if (r && r.domain && location.hostname.indexOf(r.domain) >= 0) {
                            e = o;
                            break
                        }
                    }
                    n = i(f.default.get("hng"))[1]
                }
                if (!e) {
                    var a = i(f.default.get("hng"));
                    e = a[0], n = a[1]
                }
                return {
                    regionID: e = e || "",
                    language: n = n || ""
                }
            }()), t.regionID = t.regionID.toLocaleUpperCase(), t.language = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    n = arguments[1],
                    t = d.default[e] ? d.default[e].lang : "";
                if (!t) return "";
                if (!n) return t[0];
                for (var o = "", r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (a && a.indexOf(n) > -1) {
                        o = a;
                        break
                    }
                }
                return o || (o = t[0]), o
            }(t.regionID, t.language), e.short && !u(t.regionID) && (t.language = t.language.substring(0, 2)), t
        }

        function a() {
            var e = "";
            return "function" == typeof callNative ? e = "weex" : "object" !== ("undefined" == typeof navigator ? "undefined" : c(navigator)) || "Mozilla" !== navigator.appCodeName && "Gecko" !== navigator.product || (e = "web"), e
        }

        function i(e) {
            return e ? e.split("|") : []
        }

        function u(e) {
            return "PK" === e || "LK" === e || "BD" === e || "NP" === e || "MM" === e
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            s = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                }
                return e
            };
        n.getContainer = a, n.isYatra = u, n.projectDetection = function() {
            var e = r().regionID;
            return e ? {
                isVoyager: function(e) {
                    return "VN" === e || "SG" === e || "MY" === e || "PH" === e || "ID" === e || "TH" === e
                }(e),
                isYatra: u(e),
                venture: e
            } : {
                test: !0
            }
        };
        var f = o(t(0)),
            d = o(t(2)),
            l = {
                short: !0
            };
        n.default = r
    }, function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = {
            ID: {
                id: "360",
                lang: ["id"],
                langShort: ["id"],
                currency: "IDR",
                domain: "lazada.co.id"
            },
            MY: {
                id: "458",
                currency: "MYR",
                lang: ["en-MY", "ms"],
                langShort: ["en", "ms"],
                domain: "lazada.com.my"
            },
            PH: {
                id: "608",
                currency: "PHP",
                lang: ["en-PH"],
                langShort: ["en"],
                domain: "lazada.com.ph"
            },
            SG: {
                id: "702",
                currency: "SGD",
                lang: ["en-SG"],
                langShort: ["en"],
                domain: "lazada.sg"
            },
            TH: {
                id: "764",
                currency: "THB",
                lang: ["th", "en"],
                domain: "lazada.co.th"
            },
            VN: {
                id: "704",
                currency: "VND",
                lang: ["vi", "en"],
                domain: "lazada.vn"
            },
            BD: {
                id: "050",
                currency: "BDT",
                lang: ["en-BD", "bn-BD"],
                langShort: ["en", "bn"],
                domain: "daraz.com.bd"
            },
            LK: {
                id: "144",
                currency: "LKR",
                lang: ["en-LK", "si-LK"],
                langShort: ["en", "si"],
                domain: "daraz.lk"
            },
            MM: {
                id: "104",
                currency: "MMK",
                lang: ["en-MM", "my-MM"],
                langShort: ["en", "my"],
                domain: "shop.com.mm"
            },
            NP: {
                id: "524",
                currency: "NPR",
                lang: ["en-NP", "ne-NP"],
                langShort: ["en", "ne"],
                domain: "daraz.com.np"
            },
            PK: {
                id: "586",
                currency: "PKR",
                lang: ["en-PK", "ur-PK"],
                langShort: ["en", "ur"],
                domain: "daraz.pk"
            }
        }
    }, function(e, n, t) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var r = o(t(0)),
            a = t(1),
            i = o(a),
            u = o(t(2)),
            c = o(t(4)),
            s = o(t(5)),
            f = o(t(6));
        n.default = {
            Cookie: r.default,
            SITE_CONFIGS: u.default,
            getEnv: i.default,
            projectDetection: a.projectDetection,
            LzdCookie: c.default,
            getAnonUID: s.default,
            getMtopDomain: f.default
        }, e.exports = {
            Cookie: r.default,
            SITE_CONFIGS: u.default,
            getEnv: i.default,
            projectDetection: a.projectDetection,
            LzdCookie: c.default,
            getAnonUID: s.default,
            getMtopDomain: f.default
        }
    }, function(e, n, t) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e) {
            if (e && "weex" !== (0, i.getContainer)()) {
                var n = (0, u.default)().regionID;
                e = function(e, n) {
                    var t = void 0;
                    try {
                        t = c.default[n].lang
                    } catch (e) {}
                    return t ? Array.isArray(t) ? (t.forEach(function(n) {
                        (n === e || n.indexOf(e) > -1) && (e = n)
                    }), e) : t : null
                }(e, n);
                var t = c.default[n],
                    o = location.hostname.indexOf(f) > 0;
                if (e || t) {
                    var r = {
                        domain: o ? "." + f : "." + t.domain,
                        expires: 30
                    };
                    a.default.set("hng", n + "|" + e + "|" + t.currency + "|" + t.id, r), o || (a.default.remove(s, {
                        path: "/",
                        domain: "." + t.domain
                    }), (0, i.isYatra)(n) || (e = e.substring(0, 2)), a.default.set(s, e, {
                        expires: 30
                    }))
                }
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = o(t(0)),
            i = t(1),
            u = o(i),
            c = o(t(2)),
            s = "userLanguageML",
            f = "lazada.test",
            d = {
                setDefault: function() {
                    if ("weex" !== (0, i.getContainer)()) {
                        var e = (0, u.default)(),
                            n = e.regionID,
                            t = e.language,
                            o = void 0;
                        try {
                            o = c.default[n].lang
                        } catch (e) {}
                        if (o) return r(Array.isArray(o) ? o.indexOf(t) > -1 ? t : o[0] : o)
                    }
                },
                setLang: r,
                get: function() {
                    return a.default.get("hng")
                },
                removeRoot: function() {
                    if ("weex" !== (0, i.getContainer)()) {
                        var e = (0, u.default)().regionID,
                            n = c.default[e],
                            t = n ? {
                                path: "/",
                                domain: "." + n.domain
                            } : {
                                path: "/"
                            };
                        a.default.remove(s, t)
                    }
                }
            };
        n.default = d
    }, function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(t(0));
        n.default = function() {
            return o.default.get("anon_uid") || o.default.get("t_uid") || ""
        }
    }, function(e, n, t) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r() {
            var e = "object" === ("undefined" == typeof location ? "undefined" : a(location)) && location.hostname || "";
            return e.indexOf("-rm.lazada.sg") >= 0 || e.indexOf("-rm-p.lazada.sg") >= 0 || "rm-p.lazada.sg" === e
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        n.default = function(e) {
            var n = "";
            if (function() {
                    if ("web" === s) {
                        var e = "object" === ("undefined" == typeof location ? "undefined" : a(location)) && location.hostname || "";
                        return /127\.0\.0\.1|localhost|daily|waptest|\.test/.test(e) || location.search.indexOf("wh_debug=true") >= 0
                    }
                    return !1
                }()) n = i.default.DAILY;
            else if ("string" == typeof e && e || (e = ((0, c.default)() || {}).regionID), function() {
                    if ("web" === s) {
                        var e = "object" === ("undefined" == typeof location ? "undefined" : a(location)) && location.hostname || "";
                        return e.indexOf("-p.lazada.") >= 0 || e.indexOf("-p.daraz.") >= 0 || e.indexOf("-p.shop.") >= 0 || e.indexOf("pre-wormhole.") >= 0 || r() || location.search.indexOf("debug_pre_env=true") >= 0
                    }
                    return !1
                }()) {
                var t = e.toLocaleUpperCase();
                r() && (t = "SG_RED_MART"), n = i.default.PRE[t]
            } else n = i.default[e.toLocaleUpperCase()];
            return n
        };
        var i = o(t(7)),
            u = t(1),
            c = o(u),
            s = (0, u.getContainer)()
    }, function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = {
            ID: {
                prefix: "",
                subDomain: "acs-m",
                mainDomain: "lazada.co.id"
            },
            MY: {
                prefix: "",
                subDomain: "acs-m",
                mainDomain: "lazada.com.my"
            },
            PH: {
                prefix: "",
                subDomain: "acs-m",
                mainDomain: "lazada.com.ph"
            },
            SG: {
                prefix: "",
                subDomain: "acs-m",
                mainDomain: "lazada.sg"
            },
            TH: {
                prefix: "",
                subDomain: "acs-m",
                mainDomain: "lazada.co.th"
            },
            VN: {
                prefix: "",
                subDomain: "acs-m",
                mainDomain: "lazada.vn"
            },
            PK: {
                prefix: "",
                subDomain: "acs-m",
                mainDomain: "daraz.pk"
            },
            BD: {
                prefix: "",
                subDomain: "acs-m",
                mainDomain: "daraz.com.bd"
            },
            MM: {
                prefix: "",
                subDomain: "acs-m",
                mainDomain: "shop.com.mm"
            },
            NP: {
                prefix: "",
                subDomain: "acs-m",
                mainDomain: "daraz.com.np"
            },
            LK: {
                prefix: "",
                subDomain: "acs-m",
                mainDomain: "daraz.lk"
            },
            DAILY: {
                prefix: "acs",
                subDomain: "waptest",
                mainDomain: "lazada.test"
            },
            PRE: {
                ID: {
                    prefix: "",
                    subDomain: "acs-wapa",
                    mainDomain: "lazada.co.id"
                },
                MY: {
                    prefix: "",
                    subDomain: "acs-wapa",
                    mainDomain: "lazada.com.my"
                },
                PH: {
                    prefix: "",
                    subDomain: "acs-wapa",
                    mainDomain: "lazada.com.ph"
                },
                SG: {
                    prefix: "",
                    subDomain: "acs-wapa",
                    mainDomain: "lazada.sg"
                },
                SG_RED_MART: {
                    prefix: "",
                    subDomain: "acs-wapa-rm",
                    mainDomain: "lazada.sg"
                },
                TH: {
                    prefix: "",
                    subDomain: "acs-wapa",
                    mainDomain: "lazada.co.th"
                },
                VN: {
                    prefix: "",
                    subDomain: "acs-wapa",
                    mainDomain: "lazada.vn"
                },
                PK: {
                    prefix: "",
                    subDomain: "acs-wapa",
                    mainDomain: "daraz.pk"
                },
                BD: {
                    prefix: "",
                    subDomain: "acs-wapa",
                    mainDomain: "daraz.com.bd"
                },
                MM: {
                    prefix: "",
                    subDomain: "acs-wapa",
                    mainDomain: "shop.com.mm"
                },
                NP: {
                    prefix: "",
                    subDomain: "acs-wapa",
                    mainDomain: "daraz.com.np"
                },
                LK: {
                    prefix: "",
                    subDomain: "acs-wapa",
                    mainDomain: "daraz.lk"
                }
            }
        }
    }])
}, , , , , , , function(e, exports, n) {
    e.exports = {
        default: n(62),
        __esModule: !0
    }
}, function(e, exports, n) {
    e.exports = n(68)
}, function(e, exports) {
    var n, t, o = e.exports = {};

    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
            n = r
        }
        try {
            t = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            t = a
        }
    }();
    var u, c = [],
        s = !1,
        f = -1;

    function d() {
        s && u && (s = !1, u.length ? c = u.concat(c) : f = -1, c.length && l())
    }

    function l() {
        if (!s) {
            var e = i(d);
            s = !0;
            for (var n = c.length; n;) {
                for (u = c, c = []; ++f < n;) u && u[f].run();
                f = -1, n = c.length
            }
            u = null, s = !1,
                function(e) {
                    if (t === clearTimeout) return clearTimeout(e);
                    if ((t === a || !t) && clearTimeout) return t = clearTimeout, clearTimeout(e);
                    try {
                        t(e)
                    } catch (n) {
                        try {
                            return t.call(null, e)
                        } catch (n) {
                            return t.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function p(e, n) {
        this.fun = e, this.array = n
    }

    function m() {}
    o.nextTick = function(e) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        c.push(new p(e, n)), 1 !== c.length || s || i(l)
    }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
        return []
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(e, exports) {
    e.exports = function(e) {
        function n(o) {
            if (t[o]) return t[o].exports;
            var r = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        var t = {};
        return n.m = e, n.c = t, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, n.p = "//g.alicdn.com/lzdmod/logger/5.1.1/", n(n.s = 1)
    }([function(e, n) {
        Date.now = Date.now || function() {
            return (new Date).getTime()
        };
        var t = Date.now(),
            o = function() {},
            r = {
                noop: o,
                warn: function() {
                    var e = "object" == typeof console ? console.warn : o;
                    try {
                        var n = {
                            warn: e
                        };
                        n.warn.call(n)
                    } catch (e) {
                        return o
                    }
                    return e
                }(),
                key: "__bl",
                win: "object" == typeof window && window.document ? window : void 0,
                createObject: function(e) {
                    if (Object.create) return Object.create(e);
                    var n = function() {};
                    return n.prototype = e, new n
                },
                each: function(e, n) {
                    var t = 0,
                        o = e.length;
                    if (this.T(e, "Array"))
                        for (; t < o && !1 !== n.call(e[t], e[t], t); t++);
                    else
                        for (t in e)
                            if (!1 === n.call(e[t], e[t], t)) break;
                    return e
                },
                safetyCall: function(e, n, t) {
                    if ("function" != typeof e) return t;
                    try {
                        return e.apply(this, n)
                    } catch (e) {
                        return t
                    }
                },
                T: function(e, n) {
                    var t = Object.prototype.toString.call(e).substring(8).replace("]", "");
                    return n ? t === n : t
                },
                filterByRule: function(e, n) {
                    if (!e) return "";
                    if (!n) return e;
                    var t = this,
                        o = t.T(n);
                    return "Function" === o ? t.safetyCall(n, [e], e) : "Array" === o ? (this.each(n, function(n) {
                        e = t.filterByRule(e, n)
                    }), e) : "Object" === o ? e.replace(n.rule, n.target || "") : e.replace(n, "")
                },
                J: function(e) {
                    if (!e || "string" != typeof e) return e;
                    var n = null;
                    try {
                        n = JSON.parse(e)
                    } catch (e) {}
                    return n
                },
                pick: function(e) {
                    return 1 === e || 1 === Math.ceil(Math.random() * e)
                },
                verifyConfig: function(e) {
                    if ("sample" in e) {
                        var n = e.sample,
                            t = n;
                        n && /^\d+(\.\d+)?%$/.test(n) && (t = parseInt(100 / parseFloat(n))), 0 < t && 1 > t && (t = parseInt(1 / t)), t >= 1 && t <= 100 ? e.sample = t : delete e.sample
                    }
                    return e
                },
                on: function(e, n, t, o) {
                    return e.addEventListener ? e.addEventListener(n, function r(a) {
                        o && e.removeEventListener(n, r, !1), t.call(this, a)
                    }, !1) : e.attachEvent && e.attachEvent("on" + n, function r(a) {
                        o && e.detachEvent("on" + n, r), t.call(this, a)
                    }), this
                },
                off: function(e, n, t) {
                    return t ? (e.removeEventListener ? e.removeEventListener(n, t) : e.detachEvent && e.detachEvent(n, t), this) : this
                },
                delay: function(e, n) {
                    return -1 === n ? (e(), null) : setTimeout(e, n || 0)
                },
                ext: function(e) {
                    for (var n = 1, t = arguments.length; n < t; n++) {
                        var o = arguments[n];
                        for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                    }
                    return e
                },
                sub: function(e, n) {
                    var t = {};
                    return this.each(e, function(e, o) {
                        -1 !== n.indexOf(o) && (t[o] = e)
                    }), t
                },
                uu: function() {
                    for (var e, n, t = 20, o = new Array(t), r = Date.now().toString(36).split(""); t-- > 0;) n = (e = 36 * Math.random() | 0).toString(36), o[t] = e % 3 ? n : n.toUpperCase();
                    for (var a = 0; a < 8; a++) o.splice(3 * a + 2, 0, r[a]);
                    return o.join("")
                },
                seq: function() {
                    return (t++).toString(36)
                },
                encode: function(e, n) {
                    try {
                        e = n ? encodeURIComponent(e).replace(/\(/g, "%28").replace(/\)/g, "%29") : encodeURIComponent(e)
                    } catch (e) {}
                    return e
                },
                serialize: function(e) {
                    e = e || {};
                    var n = [];
                    for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && void 0 !== e[t] && n.push(t + "=" + this.encode(e[t], "msg" === t));
                    return n.join("&")
                },
                checkAPI: function(e, n) {
                    if (!e || "string" != typeof e) return !1;
                    var t = /arms-retcode[\w-]*\.aliyuncs/.test(e);
                    return !t && n && (t = /(\.png)|(\.gif)|(alicdn\.com)/.test(e)), !t
                },
                checkAutoError: function(e) {
                    return !(!e || !e.message || /failed[\w\s]+fetch/i.test(e.message))
                },
                cutUrlSearch: function(e) {
                    return e && "string" == typeof e ? e.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : ""
                },
                createFakeToString: function(e) {
                    return function() {
                        return e + "() { [native code] }"
                    }
                },
                checkSameOrigin: function(e, n) {
                    if (!n || !e) return !1;
                    if (/^(http|https):\/\//.test(e)) {
                        var t = e.split("/");
                        return (e = t[0] + "//" + t[2]) === n
                    }
                    return !0
                },
                getRandIP: function() {
                    for (var e = [], n = 0; n < 4; n++) {
                        var t = Math.floor(256 * Math.random());
                        e[n] = (t > 15 ? "" : "0") + t.toString(16)
                    }
                    return e.join("")
                },
                getSortNum: function(e) {
                    return e ? (e += 1) >= 1e3 && e <= 9999 ? e : e < 1e3 ? e + 1e3 : e % 1e4 + 1e3 : 1e3
                },
                getRandNum: function(e) {
                    if (e.length < 5) {
                        for (var n = [], t = 0; t < 5; t++) {
                            var o = Math.floor(16 * Math.random());
                            n[t] = o.toString(16)
                        }
                        return n.join("")
                    }
                    return e.substring(e.length - 5)
                }
            };
        e.exports = r
    }, function(e, n, t) {
        "use strict";
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            r = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                }
                return e
            },
            a = t(2),
            i = t(3),
            u = (0, a.getEnv)().traffic,
            c = {
                lazada: {
                    sg: "hyey0hz67v@be8ca88a369a33d",
                    my: "hyey0hz67v@d545b0f9d6cd606",
                    id: "hyey0hz67v@0edb7c0e5e09aea",
                    vn: "hyey0hz67v@00b7356aa0ebfb6",
                    th: "hyey0hz67v@3505a0f7815282a",
                    ph: "hyey0hz67v@810f7965d9c7c57"
                },
                youpik: {
                    th: "hyey0hz67v@50b7a6ebfddd57e"
                }
            },
            s = "hyey0hz67v@9508762ae7ce8cf";
        i.init = function(e) {
            var n = e || {},
                t = n.pid,
                a = void 0 === t ? "" : t,
                f = n.regionID,
                d = void 0 === f ? "" : f,
                l = n.pageName,
                p = void 0 === l ? "" : l,
                m = n.imgUrl,
                g = void 0 === m ? "" : m,
                h = n.sample,
                v = void 0 === h ? 10 : h,
                y = function(e, n) {
                    var t = {};
                    for (var o in e) n.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }(n, ["pid", "regionID", "pageName", "imgUrl", "sample"]),
                b = "",
                w = u || "lazada";
            if (a) b = a;
            else if (d && "string" == typeof d) {
                var _ = d.toLowerCase();
                b = c[w] && c[w][_]
            }
            var D = r({}, y, {
                pid: b || s,
                sample: v,
                imgUrl: g || "https://retcode-sg-lazada.arms.aliyuncs.com/r.png?",
                page: p || "unknown-page"
            });
            "unknown-page" !== D.page && D.pid !== s || (D.sample = 100);
            var x = "object" === ("undefined" == typeof window ? "undefined" : o(window)) && window.__bl;
            return x ? e && "function" != typeof x.setConfig ? x = i.singleton(D) : e ? x.setConfig(D) : x = i.singleton() : x = i.singleton(D), x
        }, e.exports = i
    }, function(e, n) {
        e.exports = function(e) {
            function n(o) {
                if (t[o]) return t[o].exports;
                var r = t[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
            }
            var t = {};
            return n.m = e, n.c = t, n.d = function(e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: o
                })
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }, n.p = "//g.alicdn.com/lzdmod/common-info/7.0.9/", n(n.s = 3)
        }([function(e, n, t) {
            "use strict";

            function o(e, n, t) {
                if ("number" == typeof(t = Object.assign({
                        path: "/"
                    }, a, t)).expires) {
                    var o = new Date;
                    o.setMilliseconds(o.getMilliseconds() + 864e5 * t.expires), t.expires = o
                }
                var r = void 0;
                t.expires = t.expires ? t.expires.toUTCString() : "";
                try {
                    r = JSON.stringify(n), /^[\{\[]/.test(r) && (n = r)
                } catch (e) {}
                n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                var i = "";
                for (var u in t) t[u] && (i += "; " + u, !0 !== t[u] && (i += "=" + t[u]));
                return document.cookie = e + "=" + n + i
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var r = {},
                a = {};
            r.getJSON = function() {
                return get({
                    json: !0
                })
            }, r.get = function(e) {
                for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = e ? null : {}, o = document.cookie ? document.cookie.split("; ") : [], r = /(%[0-9A-Z]{2})+/g, a = 0; a < o.length; a++) {
                    var i = o[a].split("="),
                        u = i.slice(1).join("=");
                    n.json || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                    try {
                        var c = i[0].replace(r, decodeURIComponent);
                        if (u = u.replace(r, decodeURIComponent), n.json) try {
                            u = JSON.parse(u)
                        } catch (e) {}
                        if (e === c) {
                            t = u;
                            break
                        }
                        e || (t[c] = u)
                    } catch (e) {}
                }
                return t
            }, r.set = o, r.remove = function(e, n) {
                o(e, "", Object.assign(n, {
                    expires: -1
                }))
            }, n.default = r
        }, function(e, n, t) {
            "use strict";

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e) {
                return e ? e.split("|") : []
            }

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e = s({}, l, e);
                var n = i(),
                    t = {
                        regionID: "",
                        language: "",
                        traffic: ""
                    };
                return "weex" === n ? t = function() {
                    var e = "",
                        n = "",
                        t = "";
                    return "object" === ("undefined" == typeof WXEnvironment ? "undefined" : c(WXEnvironment)) && (e = WXEnvironment && WXEnvironment["_i18n_.regionID"] || "", n = WXEnvironment && WXEnvironment["_i18n_.language"] || "", t = WXEnvironment && WXEnvironment["_i18n_.traffic"] || "lazada"), {
                        regionID: e,
                        language: n,
                        traffic: t
                    }
                }() : "object" === ("undefined" == typeof window ? "undefined" : c(window)) && "web" === n && (t = function() {
                    var e = r(f.default.get("hng")),
                        n = r(f.default.get("curTraffic")),
                        t = "",
                        o = "",
                        a = "";
                    if ("object" === ("undefined" == typeof window ? "undefined" : c(window)) && window._i18n_) {
                        var i = window._i18n_;
                        if ("string" == typeof i) try {
                            i = JSON.parse(i)
                        } catch (e) {}
                        "object" === (void 0 === i ? "undefined" : c(i)) && (t = i.regionID, o = i.language, a = i.traffic)
                    }
                    if (!t && window.g_config && "object" === c(window.g_config) && (t = window.g_config.regionID, o = window.g_config.language, a = window.g_config.traffic), !t && "object" === ("undefined" == typeof location ? "undefined" : c(location)) && location.hostname) {
                        for (var u in d.default) {
                            var s = d.default[u];
                            if (s && s.domain && location.hostname.indexOf(s.domain) >= 0) {
                                t = s.regionID, a = s.traffic;
                                break
                            }
                        }
                        e.length > 1 && (o = e[1])
                    }
                    return t || e.length > 4 && (t = e[0], o = e[1], a = n), {
                        regionID: t = t || "SG",
                        language: o = o || "en",
                        traffic: a = a || "lazada"
                    }
                }()), t.regionID = t.regionID.toLocaleUpperCase(), t.language = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments[1],
                        t = d.default[e] ? d.default[e].lang : "";
                    if (!t) return "";
                    if (!n) return t[0];
                    for (var o = "", r = 0; r < t.length; r++) {
                        var a = t[r];
                        if (a && a.indexOf(n) > -1) {
                            o = a;
                            break
                        }
                    }
                    return o || (o = t[0]), o
                }(t.regionID, t.language), e.short && !u(t.regionID) && (t.language = t.language.substring(0, 2)), t
            }

            function i() {
                var e = "";
                return "function" == typeof callNative ? e = "weex" : "object" !== ("undefined" == typeof navigator ? "undefined" : c(navigator)) || "Mozilla" !== navigator.appCodeName && "Gecko" !== navigator.product || (e = "web"), e
            }

            function u(e) {
                return "PK" === e || "LK" === e || "BD" === e || "NP" === e || "MM" === e
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                s = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                    }
                    return e
                };
            n.getSiteInfo = function() {
                var e = a(),
                    n = e.regionID,
                    t = e.traffic,
                    o = t && "youpik" === t ? n + "_" + t.toUpperCase() : n;
                return d.default[o]
            }, n.getContainer = i, n.isYatra = u, n.projectDetection = function() {
                var e = a(),
                    n = e.regionID,
                    t = "youpik" === e.traffic;
                return n ? {
                    isVoyager: !t && function(e) {
                        return "VN" === e || "SG" === e || "MY" === e || "PH" === e || "ID" === e || "TH" === e
                    }(n),
                    isYatra: !t && u(n),
                    isYoupik: t,
                    venture: n
                } : {
                    test: !0
                }
            };
            var f = o(t(0)),
                d = o(t(2)),
                l = {
                    short: !0
                };
            n.default = a
        }, function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = {
                TH_YOUPIK: {
                    id: "764",
                    currency: "THB",
                    lang: ["th", "en"],
                    domain: "youpik.in.th",
                    regionID: "TH",
                    traffic: "youpik"
                },
                ID: {
                    id: "360",
                    lang: ["id"],
                    langShort: ["id"],
                    currency: "IDR",
                    domain: "lazada.co.id",
                    regionID: "ID"
                },
                MY: {
                    id: "458",
                    currency: "MYR",
                    lang: ["en-MY", "ms"],
                    langShort: ["en", "ms"],
                    domain: "lazada.com.my",
                    regionID: "MY"
                },
                PH: {
                    id: "608",
                    currency: "PHP",
                    lang: ["en-PH"],
                    langShort: ["en"],
                    domain: "lazada.com.ph",
                    regionID: "PH"
                },
                SG: {
                    id: "702",
                    currency: "SGD",
                    lang: ["en-SG"],
                    langShort: ["en"],
                    domain: "lazada.sg",
                    regionID: "SG"
                },
                TH: {
                    id: "764",
                    currency: "THB",
                    lang: ["th", "en"],
                    domain: "lazada.co.th",
                    regionID: "TH"
                },
                VN: {
                    id: "704",
                    currency: "VND",
                    lang: ["vi", "en"],
                    domain: "lazada.vn",
                    regionID: "VN"
                },
                BD: {
                    id: "050",
                    currency: "BDT",
                    lang: ["en-BD", "bn-BD"],
                    langShort: ["en", "bn"],
                    domain: "daraz.com.bd",
                    regionID: "BD"
                },
                LK: {
                    id: "144",
                    currency: "LKR",
                    lang: ["en-LK", "si-LK"],
                    langShort: ["en", "si"],
                    domain: "daraz.lk",
                    regionID: "LK"
                },
                MM: {
                    id: "104",
                    currency: "MMK",
                    lang: ["en-MM", "my-MM"],
                    langShort: ["en", "my"],
                    domain: "shop.com.mm",
                    regionID: "MM"
                },
                NP: {
                    id: "524",
                    currency: "NPR",
                    lang: ["en-NP", "ne-NP"],
                    langShort: ["en", "ne"],
                    domain: "daraz.com.np",
                    regionID: "NP"
                },
                PK: {
                    id: "586",
                    currency: "PKR",
                    lang: ["en-PK", "ur-PK"],
                    langShort: ["en", "ur"],
                    domain: "daraz.pk",
                    regionID: "PK"
                }
            }
        }, function(e, n, t) {
            "use strict";

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var r = o(t(0)),
                a = t(1),
                i = o(a),
                u = o(t(2)),
                c = o(t(4)),
                s = o(t(5)),
                f = t(6),
                d = o(f);
            n.default = {
                Cookie: r.default,
                SITE_CONFIGS: u.default,
                getEnv: i.default,
                projectDetection: a.projectDetection,
                getSiteInfo: a.getSiteInfo,
                LzdCookie: c.default,
                getAnonUID: s.default,
                getMtopDomain: d.default,
                getPageStatus: f.getPageStatus
            }, e.exports = {
                Cookie: r.default,
                SITE_CONFIGS: u.default,
                getEnv: i.default,
                projectDetection: a.projectDetection,
                getSiteInfo: a.getSiteInfo,
                LzdCookie: c.default,
                getAnonUID: s.default,
                getMtopDomain: d.default,
                getPageStatus: f.getPageStatus
            }
        }, function(e, n, t) {
            "use strict";

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r(e) {
                if (e && "weex" !== (0, i.getContainer)()) {
                    var n = (0, u.default)(),
                        t = n.regionID,
                        o = n.traffic;
                    e = function(e, n) {
                        var t = void 0;
                        try {
                            t = c.default[n].lang
                        } catch (e) {}
                        return t ? Array.isArray(t) ? (t.forEach(function(n) {
                            (n === e || n.indexOf(e) > -1) && (e = n)
                        }), e) : t : null
                    }(e, t);
                    var r = c.default[t],
                        l = location.hostname.indexOf(d) > 0;
                    if (e || r) {
                        var p = {
                            domain: l ? "." + d : "." + r.domain,
                            expires: 30
                        };
                        a.default.set("hng", t + "|" + e + "|" + r.currency + "|" + r.id, p), a.default.set(f, o), l || (a.default.remove(s, {
                            path: "/",
                            domain: "." + r.domain
                        }), (0, i.isYatra)(t) || (e = e.substring(0, 2)), a.default.set(s, e, {
                            expires: 30
                        }))
                    }
                }
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var a = o(t(0)),
                i = t(1),
                u = o(i),
                c = o(t(2)),
                s = "userLanguageML",
                f = "curTraffic",
                d = "lazada.test",
                l = {
                    setDefault: function() {
                        if ("weex" !== (0, i.getContainer)()) {
                            var e = (0, u.default)(),
                                n = e.regionID,
                                t = e.language,
                                o = void 0;
                            try {
                                o = c.default[n].lang
                            } catch (e) {}
                            if (o) return r(Array.isArray(o) ? o.indexOf(t) > -1 ? t : o[0] : o)
                        }
                    },
                    setLang: r,
                    get: function() {
                        return a.default.get("hng")
                    },
                    removeRoot: function() {
                        if ("weex" !== (0, i.getContainer)()) {
                            var e = (0, u.default)().regionID,
                                n = c.default[e],
                                t = n ? {
                                    path: "/",
                                    domain: "." + n.domain
                                } : {
                                    path: "/"
                                };
                            a.default.remove(s, t)
                        }
                    }
                };
            n.default = l
        }, function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(t(0));
            n.default = function() {
                return o.default.get("anon_uid") || o.default.get("t_uid") || ""
            }
        }, function(e, n, t) {
            "use strict";

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function r() {
                var e = "object" === ("undefined" == typeof location ? "undefined" : u(location)) && location.hostname || "";
                return !!e && (/127\.0\.0\.1|localhost|daily|waptest|\.test/.test(e) || location.search.indexOf("wh_debug=true") >= 0)
            }

            function a() {
                var e = "object" === ("undefined" == typeof location ? "undefined" : u(location)) && location.hostname || "";
                return e.indexOf("-rm.lazada.sg") >= 0 || e.indexOf("-rm-p.lazada.sg") >= 0 || "rm-p.lazada.sg" === e
            }

            function i() {
                var e = "object" === ("undefined" == typeof location ? "undefined" : u(location)) && location.hostname || "";
                return !!e && (e.indexOf("-p.lazada.") >= 0 || e.indexOf("-p.daraz.") >= 0 || e.indexOf("-p.shop.") >= 0 || e.indexOf("-p.youpik") >= 0 || e.indexOf("pre-wormhole.") >= 0 || a() || location.search.indexOf("debug_pre_env=true") >= 0)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            n.getPageStatus = function() {
                var e = i(),
                    n = r(),
                    t = a();
                return {
                    isPre: e,
                    isDaily: n,
                    isOnline: !e && !n,
                    isRedMart: t
                }
            }, n.default = function(e) {
                var n = "";
                if (r()) n = c.default.DAILY;
                else {
                    var t = (0, s.default)() || {},
                        o = t.traffic && "lazada" !== t.traffic ? "_" + t.traffic.toLocaleUpperCase() : "";
                    if ("string" == typeof e && e || (e = t.regionID), i()) {
                        var u = e.toLocaleUpperCase();
                        u = a() ? "SG_RED_MART" : "" + u + o, n = c.default.PRE[u]
                    } else n = c.default["" + e.toLocaleUpperCase() + o]
                }
                return n
            };
            var c = o(t(7)),
                s = o(t(1))
        }, function(e, n, t) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = {
                ID: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "lazada.co.id"
                },
                MY: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "lazada.com.my"
                },
                PH: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "lazada.com.ph"
                },
                SG: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "lazada.sg"
                },
                TH: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "lazada.co.th"
                },
                VN: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "lazada.vn"
                },
                PK: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "daraz.pk"
                },
                BD: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "daraz.com.bd"
                },
                MM: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "shop.com.mm"
                },
                NP: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "daraz.com.np"
                },
                LK: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "daraz.lk"
                },
                TH_YOUPIK: {
                    prefix: "",
                    subDomain: "acs-m",
                    mainDomain: "youpik.in.th"
                },
                DAILY: {
                    prefix: "acs",
                    subDomain: "waptest",
                    mainDomain: "lazada.test"
                },
                PRE: {
                    ID: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "lazada.co.id"
                    },
                    MY: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "lazada.com.my"
                    },
                    PH: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "lazada.com.ph"
                    },
                    SG: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "lazada.sg"
                    },
                    SG_RED_MART: {
                        prefix: "",
                        subDomain: "acs-wapa-rm",
                        mainDomain: "lazada.sg"
                    },
                    TH: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "lazada.co.th"
                    },
                    VN: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "lazada.vn"
                    },
                    PK: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "daraz.pk"
                    },
                    BD: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "daraz.com.bd"
                    },
                    MM: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "shop.com.mm"
                    },
                    NP: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "daraz.com.np"
                    },
                    LK: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "daraz.lk"
                    },
                    TH_YOUPIK: {
                        prefix: "",
                        subDomain: "acs-wapa",
                        mainDomain: "youpik.in.th"
                    }
                }
            }
        }])
    }, function(e, n, t) {
        e.exports = t(4)
    }, function(e, n, t) {
        var o = t(0),
            r = t(5),
            a = t(7),
            i = t(8),
            u = t(10),
            c = {
                sr: u.getSr(),
                vp: u.getSr()
            },
            s = function(e) {
                var n = this;
                return r.call(n, e), n._health = {
                    errcount: 0,
                    apisucc: 0,
                    apifail: 0
                }, n._initialPage = e.page && o.safetyCall(e.page, [], "" + e.page) || null, n.beforeSend = function(e, t) {
                    "error" === e ? n._health.errcount++ : "api" === e && n._health[t.success ? "apisucc" : "apifail"]++
                }, n.init(), n
            };
        s.prototype = o.createObject(r.prototype), o.ext(r._root.dftCon, {
            uid: null,
            page: null,
            ignoreUrlPath: [{
                rule: /\/([a-z\-_]+)?\d{2,20}/g,
                target: "/$1**"
            }, /\/$/],
            ignoreUrlCase: !0,
            imgUrl: "https://arms-retcode.aliyuncs.com/r.png?"
        }), o.ext(s.prototype, {
            constructor: s,
            _super: r,
            onReady: function(e) {
                var n = this;
                return n.hasReady ? e() : u.isH5 && "complete" !== document.readyState ? void o.on(u.win, "load", function() {
                    n.hasReady = !0, e()
                }, !0) : (n.hasReady = !0, e())
            },
            setPage: function(e, n) {
                var t = this,
                    o = t.prevPage;
                if (!1 !== n) {
                    if (!e || e === o) return t;
                    t.prevPage = e, clearTimeout(t.sendPVTimmer), t.handleUnload(), t.resetSession(), t.sendPVTimmer = setTimeout(function() {
                        t.sendPV()
                    }, 10)
                }
                t._conf.page = e
            },
            sendRequest: function(e) {
                var n = this._conf.sendRequest,
                    t = this.getConfig("imgUrl");
                return "function" == typeof n ? n(e, t) : a(e, t)
            },
            postData: function(e, n) {
                var t = {},
                    r = "";
                t[n] = e[n], delete e[n], "object" == typeof e && (r = o.serialize(e));
                var a = this._conf.postRequest,
                    i = this.getConfig("imgUrl");
                return "function" == typeof a ? a(t, i + r + "&post_res=") : this.sendRequest(e)
            },
            sendPV: function() {
                var e = this;
                e.onReady(function() {
                    var n = u.getPvInfo();
                    e._lg("pv", n)
                })
            },
            _sendWebPerf: function() {
                var e = this;
                if (!u.isH5) return e;
                e.onReady(function() {
                    var n = i();
                    if (n) {
                        var t = e._conf;
                        c.ct = n.ct, n.page = e._initialPage || u.getH5Page(t.ignoreUrlPath, t.ignoreUrlCase), e._lg("perf", n, e.getConfig("sample"))
                    }
                })
            },
            sendHealth: function() {
                var e = o.ext({}, this._health);
                e.healthy = e.errcount > 0 ? 0 : 1, e.begin = Date.now();
                var n = e.begin - this.sBegin;
                e.stay = n, this._lg("health", e, 1), this._health = {
                    errcount: 0,
                    apisucc: 0,
                    apifail: 0
                }
            },
            handleUnload: function() {
                var e = Date.now();
                if (e - this._lastUnload < 200) return this;
                this._lastUnload = e, this.sendHealth(), this.speedCache && (this._lg("speed", this.speedCache), this.speedCache = null, clearTimeout(this.speedTimmer)), this.clear()
            },
            errorHandler: function(e) {
                if (e) {
                    var n = e.type;
                    "error" === n ? this.error(e.error || {
                        message: e.message
                    }, e) : "unhandledrejection" === n && o.T(e.reason, "Error") && this.error(e.reason)
                }
            },
            _handleError: function() {
                var e = this;
                o.on(u.win, "error", function(n) {
                    n && e.error(n.error || {
                        message: n.message
                    }, n)
                }).on(u.win, "unhandledrejection", function(n) {
                    n && o.T(n.reason, "Error") && o.checkAutoError(n.reason) && e.error(n.reason)
                })
            },
            commonInfo: function() {
                return c.uid = this._conf.uid || "", c
            },
            init: function() {
                var e = this;
                e.hasInit || (u.isH5 && (e._sendWebPerf(), e._handleError(), o.on(u.win, "beforeunload", function() {
                    e.handleUnload()
                })), e._initialPage && e.sendPV(), o.win && (o.win.__hasInitBlSdk = !0), e.hasInit = !0)
            }
        });
        var f = null;
        s.singleton = function(e) {
            var n = o.key;
            return f || (o.win && o.win[n] && o.win.__hasInitBlSdk ? f = o.win[n] : (f = new s(e), o.win && (o.win[n] = f))), f
        }, s._super = r, s._root = r._root, r.WeexLogger = s, e.exports = s
    }, function(e, n, t) {
        var o = t(0),
            r = t(6),
            a = ["api", "success", "time", "code", "msg", "trace", "traceId", "begin", "sid", "seq"],
            i = function(e, n) {
                var t = e.split("::");
                return t.length > 1 ? o.ext({
                    group: t[0],
                    key: t[1]
                }, n) : o.ext({
                    group: "default_group",
                    key: t[0]
                }, n)
            },
            u = function(e) {
                var n;
                r.call(this, e);
                try {
                    n = "object" == typeof performance ? performance.timing.fetchStart : Date.now()
                } catch (e) {
                    n = Date.now()
                }
                return this._startTime = n, this
            };
        u.prototype = o.createObject(r.prototype), o.ext(r.dftCon, {
            startTime: null
        }), o.ext(u.prototype, {
            constructor: u,
            _super: r,
            sum: function(e, n, t) {
                try {
                    return this._lg("sum", i(e, {
                        val: n || 1,
                        begin: Date.now()
                    }), t)
                } catch (e) {
                    o.warn("[retcode] can not get parseStatData: " + e)
                }
            },
            avg: function(e, n, t) {
                try {
                    return this._lg("avg", i(e, {
                        val: n || 0,
                        begin: Date.now()
                    }), t)
                } catch (e) {
                    o.warn("[retcode] can not get parseStatData: " + e)
                }
            },
            percent: function(e, n, t, r) {
                try {
                    return this._lg("percent", i(e, {
                        subkey: n,
                        val: t || 0,
                        begin: Date.now()
                    }), r)
                } catch (e) {
                    o.warn("[retcode] can not get parseStatData: " + e)
                }
            },
            msg: function(e, n) {
                if (e && !(e.length > 180)) return this.custom({
                    msg: e
                }, n)
            },
            error: function(e, n) {
                if (!e || "object" != typeof e || "string" != typeof e.message) return o.warn("[retcode] invalid param e: " + e), this;
                var t = e.name || "CustomError",
                    r = e.message,
                    a = e.stack || "";
                n = n || {};
                var i = {
                    begin: Date.now(),
                    cate: t,
                    msg: r.substring(0, 1e3),
                    stack: a && a.substring(0, 1e3),
                    file: n.filename || "",
                    line: n.lineno || "",
                    col: n.colno || "",
                    err: {
                        msg_raw: r,
                        stack_raw: a
                    }
                };
                return this.beforeSend && this.beforeSend("error", i), this._lg("error", i, 1)
            },
            api: function(e, n, t, r, i, u, c, s) {
                return e ? (e = "string" == typeof e ? {
                    api: e,
                    success: n,
                    time: t,
                    code: r,
                    msg: i,
                    begin: u,
                    traceId: c,
                    sid: s
                } : o.sub(e, a), o.checkAPI(e.api) ? (e.code = e.code || "", e.msg = e.msg || "", e.success = e.success ? 1 : 0, e.time = +e.time, e.begin = e.begin, e.traceId = e.traceId || "", e.sid = e.sid || "", !e.api || isNaN(e.time) ? (o.warn("[retcode] invalid time or api"), this) : (this.beforeSend && this.beforeSend("api", e), this._lg("api", e, e.success && this.getConfig("sample")))) : this) : (o.warn("[retcode] api is null"), this)
            },
            speed: function(e, n, t) {
                var r = this,
                    a = this.getConfig("startTime") || this._startTime;
                return /^s(\d|1[0])$/.test(e) ? (n = "number" != typeof n ? Date.now() - a : n >= a ? n - a : n, r.speedCache = r.speedCache || {}, r.speedCache[e] = n, r.speedCache.begin = a, clearTimeout(r.speedTimmer), r.speedTimmer = setTimeout(function() {
                    t || (r.speedCache.page = r.getPage(!0)), r._lg("speed", r.speedCache), r.speedCache = null
                }, 5e3), r) : (o.warn("[retcode] invalid point: " + e), r)
            }
        }), u._super = r, u._root = r, r.Reporter = u, e.exports = u
    }, function(e, n, t) {
        var o = t(0),
            r = function(e) {
                return this.ver = "1.4.6", this._conf = o.ext({}, r.dftCon), this.sampleCache = {}, this.requestQueue = [], this.hash = o.seq(), this.resetSession(), this.setConfig(e), this.rip = o.getRandIP(), this.record = 999, this["EagleEye-TraceID"] = this.getTraceId()["EagleEye-TraceID"], this
            };
        r.dftCon = {
            sample: 1,
            tag: ""
        }, r.prototype = {
            constructor: r,
            onReady: function(e) {
                return e()
            },
            getPage: function() {
                var e = this._conf.page;
                return o.safetyCall(e, [], e + "")
            },
            setPage: function() {},
            setConfig: function(e) {
                e && "object" == typeof e && (o.verifyConfig(e), this._conf = o.ext({}, this._conf, e))
            },
            sendRequest: function() {},
            postData: function() {},
            commonInfo: function() {
                return {}
            },
            resetSession: function() {
                this.session = o.uu(), this.sBegin = Date.now()
            },
            getTraceId: function() {
                var e = this.rip,
                    n = Date.now(),
                    t = o.getSortNum(this.record),
                    r = e + n + t + o.getRandNum(this._conf.pid);
                return this["EagleEye-TraceID"] = r, this.record = t, {
                    "EagleEye-TraceID": r
                }
            },
            getSessionId: function() {
                return {
                    "EagleEye-SessionID": this.session
                }
            },
            getConfig: function(e) {
                return e ? this._conf[e] : o.ext({}, this._conf)
            },
            sampling: function(e) {
                return 1 === e || ("boolean" == typeof this.sampleCache[e] ? this.sampleCache[e] : (this.sampleCache[e] = o.pick(e), this.sampleCache[e]))
            },
            clear: function() {
                var e;
                for (clearTimeout(this.requestTimmer), this.requestTimmer = null; e = this.requestQueue.pop();) "res" === e.t ? this.postData(e, "res") : "error" === e.t ? this.postData(e, "err") : this.sendRequest(e);
                return this
            },
            _lg: function(e, n, t) {
                var r = this._conf;
                return n && !r.disabled && r.pid ? t && !this.sampling(t) ? this : function(e, n) {
                    var t;
                    "error" === n.t && (t = e.requestQueue[0]) && "error" === t.t && n.msg === t.msg ? t.times++ : (e.requestQueue.unshift(n), e.onReady(function() {
                        e.requestTimmer = o.delay(function() {
                            e.clear()
                        }, "error" === n.t ? 3e3 : -1)
                    }))
                }(this, n = o.ext({
                    t: e,
                    times: 1,
                    page: this.getPage(),
                    tag: r.tag || "",
                    begin: Date.now()
                }, n, this.commonInfo(), {
                    pid: r.pid,
                    _v: this.ver,
                    sid: this.session,
                    sampling: t || 1,
                    z: o.seq()
                })) : this
            },
            custom: function(e, n) {
                if (!e || "object" != typeof e) return this;
                var t = !1,
                    r = {
                        begin: Date.now()
                    };
                return o.each(e, function(e, n) {
                    return !(t = n && n.length <= 20) && o.warn("[retcode] invalid key: " + n), r["x-" + n] = e, t
                }), t ? this._lg("custom", r, n || 1) : this
            }
        }, e.exports = r
    }, function(e, n, t) {
        var o = t(0),
            r = "object" == typeof window ? window : {},
            a = r.__oFetch_ || r.fetch;
        a = "function" == typeof a ? a : void 0, e.exports = function(e, n) {
            var t = -1;
            "object" == typeof e && (t = e.z, e = o.serialize(e));
            var i = n + e;
            if (a) return a(i, {
                method: "HEAD",
                mode: "no-cors"
            }).catch(o.noop);
            if (r.document && r.document.createElement) {
                var u = "__request_hold_" + t,
                    c = r[u] = new Image;
                c.onload = c.onerror = function() {
                    r[u] = void 0
                }, c.src = i, c = null
            }
        }
    }, function(e, n, t) {
        var o = t(0),
            r = t(9).TIMING_KEYS;
        e.exports = function() {
            var e = o.win || {},
                n = e.performance;
            if (!n || "object" != typeof n) return null;
            var t = {},
                a = n.timing || {},
                i = Date.now(),
                u = 1;
            if ("function" == typeof e.PerformanceNavigationTiming) {
                var c = n.getEntriesByType("navigation")[0];
                c && (a = c, u = 2)
            }
            o.each({
                dns: [3, 2],
                tcp: [5, 4],
                ssl: [5, 17],
                ttfb: [7, 6],
                trans: [8, 7],
                dom: [10, 8],
                res: [14, 12],
                firstbyte: [7, 2],
                fpt: [8, 1],
                tti: [10, 1],
                ready: [12, 1],
                load: [14, 1]
            }, function(e, n) {
                var o = a[r[e[1]]],
                    i = a[r[e[0]]];
                if (2 === u || o > 0 && i > 0) {
                    var c = Math.round(i - o);
                    c >= 0 && c < 36e5 && (t[n] = c)
                }
            });
            var s = e.navigator.connection,
                f = n.navigation || {};
            t.ct = s ? s.effectiveType || s.type : "";
            var d = s && (s.downlinkMax || s.bandwidth) || -1;
            return d = d > 999 ? 999 : d, t.bandwidth = d, t.navtype = 1 === f.type ? "Reload" : "Other", 1 === u && a[r[16]] > 0 && a[r[1]] > 0 && (t.fpt = a[r[16]] - a[r[1]]), 1 === u && a[r[1]] > 0 ? t.begin = a[r[1]] : 2 === u && t.load > 0 ? t.begin = i - t.load : t.begin = i, t
        }
    }, function(e, n) {
        n.TIMING_KEYS = ["", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "responseEnd", "", "domInteractive", "", "domContentLoadedEventEnd", "", "loadEventStart", "", "msFirstPaint", "secureConnectionStart"]
    }, function(e, n, t) {
        var o = t(0),
            r = "object" == typeof WXEnvironment && WXEnvironment.weexVersion ? WXEnvironment : void 0,
            a = "object" == typeof window && window.addEventListener ? window : void 0,
            i = !r || "Web" === r.platform;
        e.exports = {
            wx: r,
            win: a,
            isH5: i,
            getSr: function() {
                return i ? screen.width + "x" + screen.height : r.deviceWidth + "x" + r.deviceHeight
            },
            getH5Page: function(e, n) {
                var t = location,
                    r = t.host + t.pathname;
                return o.filterByRule(n ? r.toLowerCase() : r, e)
            },
            getPvInfo: function() {
                var e = i ? document : void 0,
                    n = i && a.devicePixelRatio || 1;
                return i ? {
                    begin: Date.now(),
                    dt: e.title,
                    dl: location.href,
                    dr: e.referrer,
                    dpr: n.toFixed(2),
                    de: (e.characterSet || e.defaultCharset || "").toLowerCase(),
                    ul: e.documentElement.lang
                } : {
                    begin: Date.now()
                }
            }
        }
    }])
}, function(e, exports, n) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), exports.default = function(e) {
        var n = e && e.length && e[0].split("::");
        if (-1 !== e[0].indexOf("FAIL_SYS") || -1 !== e[0].indexOf("SYSTEM_ERROR") || -1 !== e[0].indexOf("UNKNOWN_FAIL_CODE") || -1 !== e[0].indexOf("TIMEOUT")) return {
            key: n[0],
            displayMessage: r()
        };
        if (n && n[1]) return {
            key: n[0],
            displayMessage: n[1]
        };
        return {
            key: e[0],
            displayMessage: r()
        }
    };
    var t = n(36),
        o = {
            en: "Network error, please try again later",
            id: "Kesalahan jaringan, coba lagi nanti",
            ms: "Ralat rangkaian, sila cuba lagi kemudian",
            th: "\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e02\u0e2d\u0e07\u0e40\u0e04\u0e23\u0e37\u0e2d\u0e02\u0e48\u0e32\u0e22\u0e42\u0e1b\u0e23\u0e14\u0e25\u0e2d\u0e07\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e43\u0e19\u0e20\u0e32\u0e22\u0e2b\u0e25\u0e31\u0e07",
            vi: "L\u1ed7i m\u1ea1ng, vui l\xf2ng th\u1eed l\u1ea1i sau",
            bn: "\u09a8\u09c7\u099f\u0993\u09af\u09bc\u09be\u09b0\u09cd\u0995 \u09a4\u09cd\u09b0\u09c1\u099f\u09bf, \u09a6\u09af\u09bc\u09be \u0995\u09b0\u09c7 \u09aa\u09b0\u09c7 \u0986\u09ac\u09be\u09b0 \u099a\u09c7\u09b7\u09cd\u099f\u09be \u0995\u09b0\u09c1\u09a8",
            si: "\u0da2\u0dcf\u0dbd \u0daf\u0ddd\u0dc2\u0dba, \u0db1\u0dd0\u0dc0\u0dad \u0d8b\u0dad\u0dca\u0dc3\u0dcf\u0dc4 \u0d9a\u0dbb\u0db1\u0dca\u0db1",
            my: "\u1000\u103d\u1014\u103a\u101a\u1000\u103a\u1000\u102d\u102f\u1021\u1019\u103e\u102c\u1038, \u1014\u1031\u102c\u1000\u103a\u1019\u103e\u102c\u1011\u1015\u103a\u1000\u103c\u102d\u102f\u1038\u1005\u102c\u1038\u1000\u103c\u100a\u1037\u103a\u1015\u102b",
            ne: "\u0938\u091e\u094d\u091c\u093e\u0932 \u0924\u094d\u0930\u0941\u091f\u093f, \u0915\u0943\u092a\u092f\u093e \u092a\u091b\u093f \u092b\u0947\u0930\u093f \u092a\u094d\u0930\u092f\u093e\u0938 \u0917\u0930\u094d\u0928\u0941\u0939\u094b\u0938\u094d",
            ur: "\u0646\u06cc\u0679 \u0648\u0631\u06a9 \u06a9\u06cc \u063a\u0644\u0637\u06cc\u060c \u0628\u0631\u0627\u06c1 \u06a9\u0631\u0645 \u0628\u0639\u062f \u0645\u06cc\u06ba \u062f\u0648\u0628\u0627\u0631\u06c1 \u06a9\u0648\u0634\u0634 \u06a9\u0631\u06cc\u06ba"
        };

    function r() {
        var e = (0, t.getEnv)({
            short: !0
        }).language || "en";
        return e = e.toLowerCase().split("-")[0], o[e]
    }
}, function(e, exports, n) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = n(71),
        o = 5e3,
        r = "callback";

    function a() {
        return "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random())
    }

    function i(e) {
        try {
            delete window[e]
        } catch (n) {
            window[e] = void 0
        }
    }

    function u(e) {
        document.getElementsByTagName("head")[0].removeChild(e)
    }
    exports.default = function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (t.isWeex) {
            var c = __weex_require__("@weex-module/stream");
            return new Promise(function(t, o) {
                var i = null != n.jsonpCallback ? n.jsonpCallback : r,
                    u = n.jsonpCallbackFunctionName || a(); - 1 == e.indexOf(i) && (e = (e += -1 === e.indexOf("?") ? "?" : "&") + i + "=" + u);
                var s = {
                    url: e,
                    method: "GET",
                    type: "jsonp"
                };
                c.fetch(s, function(e) {
                    try {
                        if ("string" == typeof e && (e = JSON.parse(e)).data && "string" == typeof e.data && e.ok) try {
                            e.data = JSON.parse(e.data)
                        } catch (e) {
                            throw new Error("the response.data in not valid json")
                        }
                        t({
                            ok: e.ok,
                            status: e.status,
                            statusText: e.statusText,
                            data: e.data,
                            json: function() {
                                return Promise.resolve(e.data)
                            }
                        })
                    } catch (e) {
                        o(e)
                    }
                }, function(e) {})
            })
        }
        return new Promise(function(t, c) {
            var s = null != n.timeout ? n.timeout : o,
                f = null != n.jsonpCallback ? n.jsonpCallback : r,
                d = void 0,
                l = n.jsonpCallbackFunctionName || a(),
                p = document.createElement("script");
            window[l] = function(e) {
                t({
                    ok: !0,
                    json: function() {
                        return Promise.resolve(e)
                    }
                }), d && clearTimeout(d), u(p), i(l)
            }, e += -1 === e.indexOf("?") ? "?" : "&", p.setAttribute("src", e + f + "=" + l), document.getElementsByTagName("head")[0].appendChild(p), d = setTimeout(function() {
                c(new Error("JSONP request to " + e + " timed out")), i(l), u(p)
            }, s)
        })
    }, e.exports = exports.default
}, , , , , , , , , , , function(e, exports, n) {
    e.exports = n(60)
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = t(61),
        r = t.n(o),
        a = t(65),
        i = t.n(a),
        u = t(43),
        c = t.n(u),
        s = t(67),
        f = t.n(s),
        d = t(73),
        l = t.n(d),
        p = function(e) {
            for (var n = window.location.search.substring(1).split("&"), t = 0; t < n.length; t++) {
                var o = n[t].split("=");
                if (o[0] === e) return o[1]
            }
            return !1
        },
        m = function() {
            var e = "";
            if (window.mQuery && window.lzdGlobalConfigOption ? e = window.lzdGlobalConfigOption.wh_site : window.sBannerConfig && window.sBannerConfig.wh_site && (e = window.sBannerConfig.wh_site), !e || "string" != typeof e) {
                var n = window.location.hostname; - 1 !== n.indexOf("daraz.pk") && (e = "pk"), -1 !== n.indexOf("daraz.com.np") && (e = "np"), -1 !== n.indexOf("daraz.com.bd") && (e = "bd"), -1 !== n.indexOf("daraz.lk") && (e = "lk"), -1 !== n.indexOf("shop.com.mm") && (e = "mm")
            }
            if (!e || "string" != typeof e) {
                var t = window.location.href; - 1 !== t.indexOf("pk") && (e = "pk"), -1 !== t.indexOf("np") && (e = "np"), -1 !== t.indexOf("bd") && (e = "bd"), -1 !== t.indexOf("lk") && (e = "lk"), -1 !== t.indexOf("mm") && (e = "mm")
            }
            return e ? e.toLocaleLowerCase() : "pk"
        },
        g = m(),
        h = function(e) {
            for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, t = e ? null : {}, o = document.cookie ? document.cookie.split("; ") : [], r = 0; r < o.length; r++) {
                var a = o[r].split("="),
                    i = a.slice(1).join("=");
                n.json || '"' !== i.charAt(0) || (i = i.slice(1, -1));
                var u = a[0];
                if (n.json) try {
                    i = JSON.parse(i)
                } catch (e) {
                    console.error(e)
                }
                if (e === u) {
                    t = i;
                    break
                }
                e || (t[u] = i)
            }
            return t
        },
        v = function(e) {
            f.a.request({
                data: e,
                type: "POST",
                v: "1.0",
                needLogin: !0,
                appKey: "30133426",
                api: "mtop.alibaba.global.holmes.customEvent.upload"
            }).then(function() {}, function() {})
        };
    window.document.addEventListener("DOMContentLoaded", function() {
        var e, n, t;
        if (-1 === window.navigator.userAgent.toLocaleLowerCase().indexOf("aliapp")) try {
            var o = "//laz-g-cdn.alicdn.com/lazada/dynamic-static-config/daraz-marketing-tracker/config.json?_=" + parseInt((new Date).getTime() / 1e4, 10);
            "true" === p("pre_env") && (o = "//dev.g.alicdn.com/lazada/dynamic-static-config/daraz-marketing-tracker/config.json?_=" + parseInt((new Date).getTime() / 1e4, 10)), e = o, n = function(e) {
                try {
                    var n = {};
                    try {
                        n = JSON.parse(e)
                    } catch (e) {
                        console.warn(e)
                    }
                    if (!n.dontReport) {
                        var t = function() {
                                var e = {},
                                    n = navigator.userAgent,
                                    t = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                                    o = n.match(/(iPad).*OS\s([\d_]+)/),
                                    r = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                                    a = !o && n.match(/(iPhone\sOS)\s([\d_]+)/);
                                return e.ios = e.android = e.iphone = e.ipad = e.androidChrome = e.iphoneX = !1, r && (e.os = "android", e.osVersion = r[2], e.android = !0, e.androidChrome = n.toLowerCase().indexOf("chrome") >= 0), (o || a || t) && (e.os = "ios", e.ios = !0), a && !t && (e.osVersion = a[2].replace(/_/g, "."), e.iphone = !0), o && (e.osVersion = o[2].replace(/_/g, "."), e.ipad = !0), t && (e.osVersion = t[3] ? t[3].replace(/_/g, ".") : null, e.iphone = !0), e.ios && e.osVersion && n.indexOf("Version/") >= 0 && "10" === e.osVersion.split(".")[0] && (e.osVersion = n.toLowerCase().split("version/")[1].split(" ")[0]), a && /iphonex/i.test(n) && (e.iphoneX = !0), e
                            }(),
                            o = {
                                eventType: "EVENT_TYPE_SESSION",
                                region: m(),
                                osVersion: t.osVersion,
                                buyerId: h("lzd_uid"),
                                eventTime: (new Date).getTime(),
                                browserId: h("lzd_cid"),
                                browser_id: h("lzd_cid"),
                                osName: t.ios ? "ios" : "android"
                            };
                        (RegExp("^/+products/+(.*).html$").test(window.location.pathname) || RegExp("^/+i(.*).html$").test(window.location.pathname)) && v(r()({}, o, {
                                eventType: "EVENT_TYPE_PDP"
                            })), h("daraz-marketing-tracker") || v(o),
                            function(e, n, t) {
                                if ((t = c()({
                                        path: "/"
                                    }, {}, t)).domain = "np" === g || "bd" === g ? ".daraz.com." + g : "mm" === g ? ".shop.com.mm" : ".daraz." + g, "number" == typeof t.expires) {
                                    var o = new Date;
                                    o.setTime(o.getTime() + 1e3 * t.expires), t.expires = o
                                }
                                var r = void 0;
                                t.expires = t.expires ? t.expires.toUTCString() : "";
                                try {
                                    r = i()(n), /^[\{\[]/.test(r) && (n = r)
                                } catch (e) {}
                                var a = "";
                                for (var u in t) t[u] && (a += "; " + u, !0 !== t[u] && (a += "=" + t[u]));
                                document.cookie = e + "=" + n + a
                            }("daraz-marketing-tracker", "hide", {
                                expires: n.time || 10
                            });
                        var a = (n.domain || {})[m()] || "click.daraz.pk";
                        "true" === p("pre_env") && (a = "pre-" + a), l.a && l.a.initDirectLanding({
                            domain: a
                        })
                    }
                } catch (e) {}
            }, (t = new XMLHttpRequest).open("GET", e, !0), t.onreadystatechange = function() {
                (4 === t.readyState && 200 === t.status || 304 === t.status) && n.call(this, t.responseText)
            }, t.send()
        } catch (e) {}
    })
}, function(e, exports, n) {
    "use strict";
    exports.__esModule = !0;
    var t, o = n(43),
        r = (t = o) && t.__esModule ? t : {
            default: t
        };
    exports.default = r.default || function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
        }
        return e
    }
}, function(e, exports, n) {
    n(63), e.exports = n(2).Object.assign
}, function(e, exports, n) {
    var t = n(11);
    t(t.S + t.F, "Object", {
        assign: n(64)
    })
}, function(e, exports, n) {
    "use strict";
    var t = n(3),
        o = n(19),
        r = n(30),
        a = n(23),
        i = n(31),
        u = n(28),
        c = Object.assign;
    e.exports = !c || n(9)(function() {
        var e = {},
            n = {},
            t = Symbol(),
            o = "abcdefghijklmnopqrst";
        return e[t] = 7, o.split("").forEach(function(e) {
            n[e] = e
        }), 7 != c({}, e)[t] || Object.keys(c({}, n)).join("") != o
    }) ? function(e, n) {
        for (var c = i(e), s = arguments.length, f = 1, d = r.f, l = a.f; s > f;)
            for (var p, m = u(arguments[f++]), g = d ? o(m).concat(d(m)) : o(m), h = g.length, v = 0; h > v;) p = g[v++], t && !l.call(m, p) || (c[p] = m[p]);
        return c
    } : c
}, function(e, exports, n) {
    e.exports = {
        default: n(66),
        __esModule: !0
    }
}, function(e, exports, n) {
    var t = n(2),
        o = t.JSON || (t.JSON = {
            stringify: JSON.stringify
        });
    e.exports = function(e) {
        return o.stringify.apply(o, arguments)
    }
}, function(e, exports, n) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = void 0;
    t = n(44).isWeex ? n(70).default : n(72).default, exports.default = t
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = t(69);
    t.n(o);
    for (var r in o) "default" !== r && function(e) {
        t.d(n, e, function() {
            return o[e]
        })
    }(r)
}, function(e, exports, n) {
    "use strict";
    (function(n) {
        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = exports.isReactNative = exports.isWeex = exports.isNode = exports.isWeb = void 0;
        var o = "object" === ("undefined" == typeof navigator ? "undefined" : t(navigator)) && ("Mozilla" === navigator.appCodeName || "Gecko" === navigator.product);
        exports.isWeb = o;
        var r = void 0 !== n && !(!n.versions || !n.versions.node);
        exports.isNode = r;
        var a = "function" == typeof callNative || "object" === ("undefined" == typeof WXEnvironment ? "undefined" : t(WXEnvironment)) && "Web" !== WXEnvironment.platform;
        exports.isWeex = a;
        var i = "undefined" != typeof __fbBatchedBridgeConfig;
        exports.isReactNative = i, exports.default = e.exports;
        var u = e.exports;
        exports.default = u
    }).call(exports, n(45))
}, function(e, exports, n) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = Object.assign || function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        },
        o = n(44),
        r = u(n(36)),
        a = u(n(46)),
        i = u(n(47));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = n(48),
        s = {},
        f = {},
        d = !0,
        l = window.__bl || {},
        p = {},
        m = r.default.getEnv({
            short: !1
        }),
        g = m.regionID,
        h = m.language,
        v = function() {};
    try {
        s = n(! function() {
            var e = new Error('Cannot find module "@weex-module/windvane"');
            throw e.code = "MODULE_NOT_FOUND", e
        }())
    } catch (e) {
        console.warn("Windvane require error")
    }
    try {
        f = n(! function() {
            var e = new Error('Cannot find module "@weex-module/user"');
            throw e.code = "MODULE_NOT_FOUND", e
        }())
    } catch (e) {
        console.error("weex-module require error")
    }
    var y = {
            ERROR: -1,
            SUCCESS: 0,
            TOKEN_EXPIRED: 1,
            SESSION_EXPIRED: 2
        },
        b = ["SESSION_EXPIRED", "SID_INVALID", "AUTH_REJECT", "NEED_LOGIN"];

    function w(e) {
        try {
            if (!d) return;
            d = !1, n(! function() {
                var e = new Error('Cannot find module "@weex-module/wxapm"');
                throw e.code = "MODULE_NOT_FOUND", e
            }()).recordAsyncTime({
                wxMtopTime: e
            })
        } catch (e) {}
    }

    function _(e, n, t) {
        var o = (new Date).getTime(),
            r = e.replace(/-/g, "_");
        (l = window.__bl || {}).api = l.api || v, c("//overseas-aladdin.alicdn.com/bottom/" + e + "/jsonBackup=false/language=" + h + "/regionID=" + g + "/data.jsonp", {
            jsonpCallbackFunctionName: "callback_" + r + "_jsonBackup_false_language_" + h + "_regionID_" + g
        }).then(function(t) {
            var r = (new Date).getTime();
            n(t.json()), l && l.api(e + ", bottom data", !0, r - o, "bottom data got success", "Successfully")
        }).catch(function(n) {
            var r = (new Date).getTime();
            t(n), l && l.api(e + ", bottom data", !1, r - o, "ERROR", JSON.stringify(n))
        })
    }

    function D(e, n, t) {
        var o = e.isIcmsMtop || 0,
            r = e.data && e.data.appId || e.api,
            a = e.data && e.data.isbackup || "";
        (l = window.__bl || {}).api = l.api || v;
        var u = (new Date).getTime();
        s && function(e, n, t) {
            s && s.call && (e.param = e.data || e.param, "POST" === e.type && (e.post = "1"), s.call({
                class: "MtopWVPlugin",
                method: "send",
                data: e
            }, function(e) {
                "string" == typeof e && (e = JSON.parse(e)), e.retType === y.SUCCESS || e.ret && e.ret[0].indexOf("SUCCESS") > -1 ? n && n(e) : t && t(e)
            }))
        }(e, function(e) {
            var c = (new Date).getTime(),
                s = e && e.ret && e.ret.length && e.ret[0].split("::");
            "SUCCESS" === s[0] && e.data ? o && e.data.resultValue && e.data.resultValue[r] ? "false" === e.data.resultValue[r].success && e.data.resultValue[r].success && a ? (_(r, n, t), l && l.api(r, !1, c - u, "ERROR", "")) : (n(e.data.resultValue[r]), l && l.api(r, !0, c - u, s[0], "Successfully")) : (n(e), l && l.api(r, !0, c - u, s[0], "Successfully")) : (o && a ? _(r, n, t) : (e.errorCode = (0, i.default)(e.ret), t(e)), l && l.api(r, !1, c - u, "ERROR", s[0])), w(c - u)
        }, function(e) {
            o && a ? _(r, n, t) : (e.errorCode = (0, i.default)(e.ret), t(e));
            var c = (new Date).getTime();
            l && l.api(r, !1, c - u, "ERROR", JSON.stringify(e)), w(c - u)
        })
    }
    exports.default = {
        request: function(e, n, t) {
            e.data = e.data || {}, e.data.language = e.data.language || h, e.data.regionID = e.data.regionID || g;
            var r = e.lzdExtraParams,
                a = e.beforeGotoNativeLogin;
            if (delete e.beforeGotoNativeLogin, delete e.lzdExtraParams, 0 !== (e = Object.assign({}, {
                    api: "",
                    v: "1.0",
                    ecode: 0,
                    type: "GET",
                    needLogin: !1,
                    timeout: 2e4,
                    dataType: "jsonp",
                    sessionOption: "AutoLoginOnly",
                    "x-i18n-language": e.language || h,
                    "x-i18n-regionID": e.regionID || g
                }, e)).api.length) return new Promise(function(i, u) {
                var c = function(e) {
                        n ? n(e) : i(e)
                    },
                    s = function(e) {
                        console.warn("UAT mtop error log:" + JSON.stringify(e)), t ? t(e) : u(e)
                    };
                o.isWeex ? D(e, c, function(n) {
                    if (! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            for (var n in "string" != typeof e && (e = JSON.stringify(e)), b)
                                if (-1 !== e.indexOf(b[n])) return !0;
                            return !1
                        }(n.ret) || !0 !== e.needLogin) return s(n);
                    a && a(),
                        function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            f.login(n, function(n) {
                                return e(n)
                            })
                        }(function() {
                            return D(e, c, s)
                        }, r)
                }) : s("NOT_IN_WEEX_ENV,PLS_CHECK_IT")
            });
            console.error("api can not be empty")
        },
        disableAutoRecordAsyncTime: function() {
            d = !1
        },
        config: function(e, n) {
            o.isWeex || "undefined" != typeof lib && lib.mtop && ("string" == typeof e ? p[e] = n : p = t({}, lib.mtop.config, e))
        },
        setRetCodePageName: function(e) {
            l = a.default.init(e)
        },
        RESPONSE_TYPE: y
    }
}, function(e, exports, n) {
    "use strict";
    (function(n) {
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        exports.isWeb = "object" === ("undefined" == typeof navigator ? "undefined" : t(navigator)) && ("Mozilla" === navigator.appCodeName || "Gecko" === navigator.product), exports.isNode = void 0 !== n && !(!n.versions || !n.versions.node), exports.isWeex = "function" == typeof callNative, exports.isReactNative = "undefined" != typeof __fbBatchedBridgeConfig;
        exports.default = e.exports, exports.default = e.exports
    }).call(exports, n(45))
}, function(e, exports, n) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var t = Object.assign || function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
            }
            return e
        },
        o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        r = u(n(36)),
        a = u(n(46)),
        i = u(n(47));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = n(48),
        s = {},
        f = window.__bl || {},
        d = r.default.getEnv({
            short: !1
        }),
        l = d.regionID,
        p = d.language,
        m = r.default.getMtopDomain(l) || {},
        g = function() {},
        h = {
            lazada: {
                daily: "4272",
                live: "24677475"
            },
            daraz: {
                daily: "60040780",
                live: "24936599"
            },
            shopmm: {
                daily: "60040781",
                live: "24937400"
            }
        };

    function v(e) {
        var n = window.location.search,
            t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
            o = n.substr(n.indexOf(/\?/) + 1).match(t);
        return null != o ? o[2] : ""
    }

    function y() {
        var e = window && window.location.host || "";
        return RegExp(/127.0.0.1|local|daily|waptest|test/).test(e) || "true" === v("debug")
    }
    var b = ["SESSION_EXPIRED", "SID_INVALID", "AUTH_REJECT", "NEED_LOGIN"];

    function w() {
        var e = l || "";
        if (e = e.toLowerCase(), function() {
                if ("true" === v("isRedMart")) return !0;
                var e = "object" === ("undefined" == typeof location ? "undefined" : o(location)) && location.hostname || "";
                return e.indexOf("-rm.lazada.sg") >= 0 || e.indexOf("-rm-p.lazada.sg") >= 0 || "rm-p.lazada.sg" === e
            }()) return "member-rm.lazada.sg";
        var n = y() ? "buyer.lazada.test" : {
            sg: "member-m.lazada.sg",
            my: "member-m.lazada.com.my",
            id: "member-m.lazada.co.id",
            vn: "member-m.lazada.vn",
            th: "member-m.lazada.co.th",
            ph: "member-m.lazada.com.ph",
            pk: "member-m.daraz.pk",
            bd: "member-m.daraz.com.bd",
            mm: "member-m.shop.com.mm",
            np: "member-m.daraz.com.np",
            lk: "member-m.daraz.lk"
        }[e];
        return /-p/.test(location.hostname) ? n.replace("-m", "-p") : n
    }

    function _(e, n, t) {
        var o = (new Date).getTime(),
            r = e.replace(/-/g, "_");
        (f = window.__bl || {}).api = f.api || g, c("//overseas-aladdin.alicdn.com/bottom/" + e + "/jsonBackup=false/language=" + p + "/regionID=" + l + "/data.jsonp", {
            jsonpCallbackFunctionName: "callback_" + r + "_jsonBackup_false_language_" + p + "_regionID_" + l
        }).then(function(t) {
            var r = (new Date).getTime();
            n(t.json()), f && f.api(e + ", bottom data", !0, r - o, "bottom data got success", "Successfully")
        }).catch(function(n) {
            var r = (new Date).getTime();
            t(n), f && f.api(e + ", bottom data", !1, r - o, "ERROR", JSON.stringify(n))
        })
    }

    function D(e) {
        var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = window.location.href,
            r = y();
        if (!!((n = navigator && navigator.userAgent || "") && n.indexOf("AliApp") > -1 && (n.indexOf("LA") > -1 || n.indexOf("DZ") > -1))) window && window.WindVane && window.WindVane.call("LAWVUserInfo", "login", {}, function(n) {
            return e && e(n)
        });
        else {
            var a = "",
                i = "spm=" + (t.spm || "") + (t.bizScene ? "&bizScene=" + t.bizScene : "");
            a = r ? "//buyer.lazada.test/user/login?redirect=" + encodeURIComponent(o) + "&hybrid=1&" + i : "//" + w() + "/user/login?redirect=" + encodeURIComponent(o) + "&hybrid=1&" + i, window.location = a
        }
    }

    function x(e, n, t) {
        var o = e.isIcmsMtop || 0,
            r = e.data && e.data.appId || e.api,
            a = e.data && e.data.isbackup || "",
            u = (new Date).getTime();
        return (f = window.__bl || {}).api = f.api || g, lib.mtop.request(e, function(c) {
            var s = (new Date).getTime(),
                d = c && c.ret && c.ret.length && c.ret[0].split("::");
            c && c.ret && c.ret.length && "WV_ERR::PARAM_PARSE_ERROR" === c.ret[0] ? lib.mtop.H5Request(e, n, t) : "SUCCESS" === d[0] && c.data ? o && c.data.resultValue && c.data.resultValue[r] ? "false" === c.data.resultValue[r].success && c.data.resultValue[r].success && a ? (_(r, n, t), f && f.api(r, !1, s - u, "ERROR", "Server Side Error")) : (n(c.data.resultValue[r]), f && f.api(r, !0, s - u, d[0], "Successfully")) : (n(c), f && f.api(r, !0, s - u, d[0], "Successfully")) : (o && a ? _(r, n, t) : (c.errorCode = (0, i.default)(c.ret), t(c)), f && f.api(r, !1, s - u, "ERROR", d[0]))
        }, function(e) {
            o && a ? _(r, n, t) : (e.errorCode = (0, i.default)(e.ret), t(e));
            var c = (new Date).getTime();
            f && f.api(r, !1, c - u, "ERROR", JSON.stringify(e))
        })
    }

    function O(e) {
        if ("object" === (void 0 === e ? "undefined" : o(e)) && !(e instanceof Array)) {
            var n = !1;
            for (var t in e)
                if (t) return n = !0;
            return n
        }
        return !1
    }
    exports.default = {
        request: function(e, n, t) {
            var o, a, i, u = e.lzdExtraParams;
            delete e.lzdExtraParams, e.data = e.data || {}, e = Object.assign({}, {
                api: "",
                v: "1.0",
                ecode: 0,
                type: "GET",
                isSec: 1,
                AntiCreep: !0,
                timeout: 2e4,
                needLogin: !1,
                appKey: (o = r.default.projectDetection(), a = y() ? "daily" : "live", i = h.lazada[a], o.isYatra && (i = "MM" === o.venture ? h.shopmm[a] : h.daraz[a]), i),
                dataType: "json",
                sessionOption: "AutoLoginOnly",
                "x-i18n-language": e.language || p,
                "x-i18n-regionID": e.regionID || l
            }, e);
            var c, f = (c = {}, window.umidTokenFromHeader ? c = {
                "x-ua": window.uabModule && window.uabModule.getUA ? window.uabModule.getUA() : window.UAFromHeader,
                "x-umidtoken": window.umidTokenFromHeader
            } : window.Group_umid && window.Group_umid.getUA && window.Group_umid.getUmidToken && (c = {
                "x-ua": window.Group_umid.getUA(),
                "x-umidtoken": window.Group_umid.getUmidToken()
            }), c);
            if (e.ext_headers = Object.assign({}, e.ext_headers, {
                    "x-i18n-language": e.language || p,
                    "x-i18n-regionID": e.regionID || l
                }, f), 0 !== e.api.length) {
                if (!Promise) {
                    var d = "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301Promise\uff0c\u8bf7\u5728windows\u5bf9\u8c61\u4e0a\u6302\u8f7dPromise\u5bf9\u8c61,\u53ef\u53c2\u8003\uff08http://gitlab.alibaba-inc.com/mtb/lib-es6polyfill/tree/master\uff09\u4e2d\u7684\u89e3\u51b3\u65b9\u6848";
                    throw lib.mtop = {
                        ERROR: d
                    }, new Error(d)
                }
                return new Promise(function(o, r) {
                    var a, i = function(e) {
                            n ? n(e) : o(e)
                        },
                        c = function(e) {
                            console.warn("UAT mtop error log:" + JSON.stringify(e)), t ? t(e) : r(e)
                        };
                    if ("undefined" != typeof lib && lib.mtop) return a = y(), (O(s) || a || O(m)) && (lib.mtop.config.prefix = s.prefix || m.prefix || "", lib.mtop.config.subDomain = s.subDomain || m.subDomain || "acs-m", lib.mtop.config.mainDomain = s.mainDomain || m.mainDomain || "lazada.com"), x(e, i, function(n) {
                        if (! function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                                for (var n in "string" != typeof e && (e = JSON.stringify(e)), b)
                                    if (-1 !== e.indexOf(b[n])) return !0;
                                return !1
                            }(n.ret) || !0 !== e.needLogin) return c(n);
                        D(function() {
                            return x(e, i, c)
                        }, u)
                    });
                    c("lib is not defined, please check out lib-mtop.js has been loaded")
                })
            }
            console.error("api can not be empty")
        },
        config: function(e, n) {
            "undefined" != typeof lib && lib.mtop && ("string" == typeof e ? (s[e] = n, lib.mtop.config[e] = n) : (s = t({}, lib.mtop.config, e), lib.mtop.config = t({}, lib.mtop.config, e)))
        },
        setDomain: function(e) {
            Object.assign(s, e)
        },
        setRetCodePageName: function(e) {
            f = a.default.init(e)
        },
        RESPONSE_TYPE: {
            ERROR: -1,
            SUCCESS: 0,
            TOKEN_EXPIRED: 1,
            SESSION_EXPIRED: 2
        }
    }
}, function(e, exports, n) {
    "use strict";
    var t = "ontouchstart" in window,
        o = {
            initDirectLanding: function(e) {
                if (e.domain) {
                    var n, t, o = window.location.href;
                    if (-1 != o.indexOf("isdl=y") && -1 != o.indexOf("aff_short_key=")) {
                        var r = (n = new RegExp("(^|&)" + "aff_short_key" + "=([^&]*)(&|$)", "i"), null != (t = window.location.search.substr(1).match(n)) ? decodeURI(t[2]) : null);
                        this._log("//" + e.domain + "/direct_landing.htm?aff_short_key=" + encodeURIComponent(r) + "&current_url=" + encodeURIComponent(o) + "&t=" + +new Date)
                    }
                }
            },
            _log: function(e) {
                var n = new Image,
                    t = function() {
                        try {
                            window.document.body.removeChild(n)
                        } catch (e) {
                            console.error(e)
                        }
                    };
                n.onload = t, n.onerror = t, n.src = e, window.document.body.appendChild(n)
            },
            _buildURL: function(e) {
                var n = /(#[^?&]+)/.test(e) ? e.match(/(#[^?&]+)/)[0] : "";
                n && (e = e.replace(n, ""));
                var t = [],
                    o = this._getCid(); - 1 === e.indexOf("isdl=y") && t.push("isdl=y"), -1 === e.indexOf("browser_id") && o && t.push("browser_id=" + encodeURIComponent(o));
                var r = window.dmtrack_pageid;
                return -1 === e.indexOf("m_page_id") && r && t.push("m_page_id=" + encodeURIComponent(r)), t.length ? e + (-1 !== e.indexOf("?") ? "&" : "?") + t.join("&") + n : e
            },
            buildAcrossURL: function(e) {
                return this._getCookie("glo_holmes_x") && e ? this._buildURL(e) : e
            },
            buildAppMarketUrl: function(e) {
                if (!this._getCookie("glo_holmes_x") || !e) return e;
                var n = "browser_id=" + this._getCid();
                return e + (-1 !== e.indexOf("?") ? "&" : "?") + "referrer=" + encodeURIComponent(n)
            },
            initAcrossAPP: function() {
                var e = this;
                t && this._getCookie("glo_holmes_x") && this._bindEvent(window, "touchstart", function(n) {
                    var t = n.target;
                    if ("function" == typeof t.closest) {
                        var o = t.closest("a");
                        if (o) {
                            var r = o.getAttribute("href");
                            if (/^((http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/.test(r)) {
                                var a = e._buildURL(r);
                                r != a && o.setAttribute("href", a)
                            }
                        }
                    }
                })
            },
            _bindEvent: function(e, n, t) {
                e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent && e.attachEvent("on" + n, t)
            },
            _getCid: function() {
                return this._getCookie("global_cid") || this._getCookie("lzd_cid")
            },
            _getCookie: function(e) {
                var n = e + "=";
                if (!document.cookie) return "";
                for (var t = document.cookie.split(";"), o = 0; o < t.length; o++) {
                    var r = t[o].trim();
                    if (0 == r.indexOf(n)) return r.substring(n.length, r.length)
                }
                return ""
            }
        };
    e.exports = o
}]);