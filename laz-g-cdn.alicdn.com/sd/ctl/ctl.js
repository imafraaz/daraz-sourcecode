! function e(t, n, o) {
    function r(i, s) {
        if (!n[i]) {
            if (!t[i]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(i, !0);
                if (a) return a(i, !0);
                throw new Error("Cannot find module '" + i + "'")
            }
            var c = n[i] = {
                exports: {}
            };
            t[i][0].call(c.exports, (function(e) {
                var n = t[i][1][e];
                return r(n || e)
            }), c, c.exports, e, t, n, o)
        }
        return n[i].exports
    }
    for (var a = "function" == typeof require && require, i = 0; i < o.length; i++) r(o[i]);
    return r
}({
    1: [function(e, t, n) {
        var o = 0,
            r = 1,
            a = 2;

        function i(e) {
            if (!(this instanceof i)) return new i(e);
            this._state = 0, this._onFulfilled = [], this._onRejected = [], this._value = null, this._reason = null, l(e) && e(d(this.resolve, this), d(this.reject, this))
        }

        function s(e, t) {
            if (e === t) return e.reject(new TypeError("A promise cannot be resolved with itself.")), void 0;
            if (c(t)) try {
                t.then((function(t) {
                    s(e, t)
                }), (function(t) {
                    e.reject(t)
                }))
            } catch (t) {
                e.reject(t)
            } else e.resolve(t)
        }

        function u(e, t, n) {
            return function(o) {
                if (l(t)) try {
                    var r = t(o);
                    s(e, r)
                } catch (t) {
                    e.reject(t)
                } else e[n](o)
            }
        }

        function c(e) {
            return e && l(e.then)
        }

        function d(e, t) {
            var n = [].slice,
                o = n.call(arguments, 2),
                r = function() {},
                a = function() {
                    return e.apply(this instanceof r ? this : t, o.concat(n.call(arguments)))
                };
            return r.prototype = e.prototype, a.prototype = new r, a
        }
        i.prototype = {
            constructor: i,
            then: function(e, t) {
                var n = new i;
                return this._onFulfilled.push(u(n, e, "resolve")), this._onRejected.push(u(n, t, "reject")), this.flush(), n
            },
            flush: function() {
                var e = this._state;
                if (0 !== e) {
                    var t = 1 === e ? this._onFulfilled.slice() : this._onRejected.slice(),
                        n = 1 === e ? this._value : this._reason;
                    setTimeout((function() {
                        m(t, (function(e) {
                            try {
                                e(n)
                            } catch (e) {}
                        }))
                    }), 0), this._onFulfilled = [], this._onRejected = []
                }
            },
            resolve: function(e) {
                0 === this._state && (this._state = 1, this._value = e, this.flush())
            },
            reject: function(e) {
                0 === this._state && (this._state = 2, this._reason = e, this.flush())
            },
            always: function(e) {
                return this.then(e, e)
            }
        }, i.defer = function() {
            var e = {};
            return e.promise = new i((function(t, n) {
                e.resolve = t, e.reject = n
            })), e
        }, i.all = function(e) {
            var t = i.defer(),
                n = e.length,
                o = [];
            return m(e, (function(e, r) {
                e.then((function(e) {
                    o[r] = e, 0 === --n && t.resolve(o)
                }), (function(e) {
                    t.reject(e)
                }))
            })), t.promise
        };
        var l = f("Function");

        function f(e) {
            return function(t) {
                return {}.toString.call(t) == "[object " + e + "]"
            }
        }

        function m(e, t) {
            for (var n = 0, o = e.length; n < o; n++) t(e[n], n)
        }
        t.exports = i
    }, {}],
    2: [function(e, t, n) {
        var o = e("./util"),
            r = {
                SendMethod: 8,
                LogVal: "collinaua",
                Token: (new Date).getTime() + ":" + Math.random(),
                MaxMCLog: 10,
                MaxKSLog: 10,
                MaxMPLog: 10,
                MaxTCLog: 10,
                MaxFocusLog: 1,
                Sync: !0
            },
            a = ".alicdn.com",
            i, s, u = "aeis" + a,
            c = "aeu" + a,
            d = {
                cn: {
                    umid: "g" + a,
                    uac: "af" + a
                },
                us: {
                    umid: u,
                    uac: c
                },
                aliapp: {
                    umid: u,
                    uac: c
                },
                usaliapp: {
                    umid: u,
                    uac: c
                },
                in: {
                    umid: u,
                    uac: c
                },
                sg: {
                    umid: u,
                    uac: c
                },
                lazada: {
                    umid: u,
                    uac: c
                }
            },
            l = f().getAttribute("data-env") || "cn";

        function f() {
            for (var e = document.getElementsByTagName("script"), t = /ctlv?\.js/, n, o = 0; o < e.length; o++)
                if (n = m(e[o]), t.test(n)) return e[o];
            return e[e.length - 1]
        }

        function m(e) {
            return e.hasAttribute ? e.src : e.getAttribute("src", 4)
        }
        t.exports = {
            env: l,
            url: d[l],
            map: {
                def: o.extend({
                    Flag: 1670350
                }, r),
                pc: o.extend({
                    Flag: 97422
                }, r),
                h5: o.extend({
                    Flag: 1670350
                }, r)
            }
        }
    }, {
        "./util": 5
    }],
    3: [function(e, t, n) {
        t.exports = function(e) {
            var t = [],
                n, o = !1,
                r = document,
                a = r.documentElement,
                i = a.doScroll,
                s = "DOMContentLoaded",
                u = "addEventListener",
                c = "onreadystatechange",
                d = "readyState",
                l, f = (i ? /^loaded|^c/ : /^loaded|c/).test(r[d]);

            function m(e) {
                for (f = 1; e = t.shift();) e()
            }
            return r[u] && r[u](s, n = function() {
                r.removeEventListener(s, n, o), m()
            }, o), i && r.attachEvent(c, n = function() {
                /^c/.test(r[d]) && (r.detachEvent(c, n), m())
            }), e = i ? function(n) {
                self != top ? f ? n() : t.push(n) : function() {
                    try {
                        a.doScroll("left")
                    } catch (t) {
                        return setTimeout((function() {
                            e(n)
                        }), 50)
                    }
                    n()
                }()
            } : function(e) {
                f ? e() : t.push(e)
            }
        }()
    }, {}],
    4: [function(e, t, n) {
        var o = e("./Promise"),
            r = e("./config"),
            a = e("./util"),
            i = e("./domready"),
            s = window,
            u = s.ctl,
            c = s.UA_Opt = s.UA_Opt || {},
            d = s.ctl = {
                noConflict: function() {
                    return s.ctl === d && (s.ctl = u), d
                },
                config: function(e, t) {
                    if (!s.UA_Opt || !s.UA_Opt.LogVal) return c = s.UA_Opt = s.UA_Opt || {}, t || (t = e, e = "def"), e = (e + "").toLowerCase(), t = a.extend(c, r.map[e] || r.map.def, t || {}), c.LogVal && (s[c.LogVal] = ""), t
                },
                getUA: function() {
                    var e = (c = s.UA_Opt = s.UA_Opt || {}).Token;
                    c.Token = (new Date).getTime() + ":" + Math.random();
                    var t = A();
                    return c.Token = e, c.reload && c.reload(), t
                },
                getUmidToken: function() {
                    try {
                        return umx.getToken()
                    } catch (e) {
                        return ""
                    }
                },
                getUmidInstance: function() {
                    return v
                },
                ready: function(e, t) {
                    return h.promise.then(e, t), h.promise
                }
            };
        d.config();
        var l = null,
            f = o.defer(),
            m = o.defer(),
            p = f.promise,
            g = m.promise;
        ! function(e, t) {
            var n = 1e4,
                g_moduleConfig = {
                    uabModule: {
                        grey: ["AWSC/uab/1.140.0/collina.js"],
                        stable: ["AWSC/uab/1.140.0/collina.js"],
                        greyBr: ["AWSC-br/uab/1.140.0/collina.js"],
                        stableBr: ["AWSC-br/uab/1.140.0/collina.js"],
                        ratio: 10000,
                        greyConfig: {},
                        stableConfig: {}
                    },
                    fyModule: {
                        grey: ["AWSC/fireyejs/1.216.2/fireyejs.js"],
                        stable: ["AWSC/fireyejs/1.215.0/fireyejs.js"],
                        greyBr: ["AWSC-br/fireyejs/1.216.2/fireyejs.js"],
                        stableBr: ["AWSC-br/fireyejs/1.215.0/fireyejs.js"],
                        ratio: 9999,
                        greyConfig: {},
                        stableConfig: {}
                    },
                    nsModule: {
                        grey: ["js/nc/60.js"],
                        stable: ["js/nc/60.js"],
                        ratio: 1e4,
                        greyConfig: {},
                        stableConfig: {}
                    },
                    umidPCModule: {
                        grey: ["AWSC/WebUMID/1.88.4/um.js"],
                        stable: ["AWSC/WebUMID/1.88.4/um.js"],
                        greyBr: ["AWSC-br/WebUMID/1.88.3/um.js"],
                        stableBr: ["AWSC-br/WebUMID/1.88.3/um.js"],
                        ratio: 10000,
                        greyConfig: {},
                        stableConfig: {}
                    },
                    etModule: {
                        grey: ["AWSC/et/1.62.0/et_f.js", "AWSC/et/1.62.1/et_n.js"],
                        stable: ["AWSC/et/1.62.0/et_f.js", "AWSC/et/1.62.1/et_n.js"],
                        greyBr: ["AWSC-br/et/1.62.0/et_f.js", "AWSC-br/et/1.62.1/et_n.js"],
                        stableBr: ["AWSC-br/et/1.62.0/et_f.js", "AWSC-br/et/1.62.1/et_n.js"],
                        ratio: 10000,
                        greyConfig: {
                            "whitelist": ["login.taobao.com/member/login.jhtml", "passport.alibaba.com/mini_login.htm", "login.taobao.com/member/loginByIm.do", "login.taobao.com/member/login_by_safe.htm", "login.taobao.com/member/vst.htm", "login.taobao.com/member/facebookLogin.do", "login.m.taobao.com/login.htm", "login.m.taobao.com/sendMsg.do", "login.m.taobao.com/msg_login.htm", "login.m.taobao.com/login_oversea.htm", "login.m.taobao.com/login_oversea_phone.htm", "login.m.taobao.com/newlogin/login.do", "login.m.taobao.com/newlogin/account/check.do", "login.m.taobao.com/newlogin/sms/send.do", "login.m.taobao.com/newlogin/sms/login.do", "buy.taobao.com/auction/buy_now.jhtml", "buy.taobao.com/auction/order/confirm_order.html", "buy.tmall.com/order/confirm_order.html", "buyertrade.taobao.com/trade/itemlist/list_bought_items.htm", "member1.taobao.com/member/fresh/account_security.htm", "member1.taobao.com/member/fresh/account_management.htm", "member1.taobao.com/member/fresh/weibo_bind_management.htm", "member1.taobao.com/member/fresh/deliver_address.htm", "h5.m.taobao.com/mlapp/olist.html", "h5.m.taobao.com/mlapp/odetail.html", "main.m.taobao.com/olist/index.html", "main.m.taobao.com/odetail/index.html", "h5.m.taobao.com/app/hongbao/www/detail/index.html", "market.m.taobao.com/app/dinamic/h5-tb-olist/index.html", "market.m.taobao.com/app/dinamic/h5-tb-odetail/index.html", "market.m.taobao.com/app/mtb/evaluation-list/pages/index2", "h5.m.taobao.com/qn/mobile/delivery.html", "h5.m.taobao.com/mlapp/odetail.html", "main.m.taobao.com/order/index.html", "buy.m.tmall.com/order/confirmOrderWap.htm", "h5.m.taobao.com/cart/order.html", "h5.m.tmall.hk/cart/order.html"]
                        },
                        stableConfig: {
                            "whitelist": ["login.taobao.com/member/login.jhtml", "passport.alibaba.com/mini_login.htm", "login.taobao.com/member/loginByIm.do", "login.taobao.com/member/login_by_safe.htm", "login.taobao.com/member/vst.htm", "login.taobao.com/member/facebookLogin.do", "login.m.taobao.com/login.htm", "login.m.taobao.com/sendMsg.do", "login.m.taobao.com/msg_login.htm", "login.m.taobao.com/login_oversea.htm", "login.m.taobao.com/login_oversea_phone.htm", "login.m.taobao.com/newlogin/login.do", "login.m.taobao.com/newlogin/account/check.do", "login.m.taobao.com/newlogin/sms/send.do", "login.m.taobao.com/newlogin/sms/login.do", "buy.taobao.com/auction/buy_now.jhtml", "buy.taobao.com/auction/order/confirm_order.html", "buy.tmall.com/order/confirm_order.html", "buyertrade.taobao.com/trade/itemlist/list_bought_items.htm", "member1.taobao.com/member/fresh/account_security.htm", "member1.taobao.com/member/fresh/account_management.htm", "member1.taobao.com/member/fresh/weibo_bind_management.htm", "member1.taobao.com/member/fresh/deliver_address.htm", "h5.m.taobao.com/mlapp/olist.html", "h5.m.taobao.com/mlapp/odetail.html", "main.m.taobao.com/olist/index.html", "main.m.taobao.com/odetail/index.html", "h5.m.taobao.com/app/hongbao/www/detail/index.html", "market.m.taobao.com/app/dinamic/h5-tb-olist/index.html", "market.m.taobao.com/app/dinamic/h5-tb-odetail/index.html", "market.m.taobao.com/app/mtb/evaluation-list/pages/index2", "h5.m.taobao.com/qn/mobile/delivery.html", "h5.m.taobao.com/mlapp/odetail.html", "main.m.taobao.com/order/index.html", "buy.m.tmall.com/order/confirmOrderWap.htm", "h5.m.taobao.com/cart/order.html", "h5.m.tmall.hk/cart/order.html"]
                        }
                    },
                    ncModule: {
                        grey: ["AWSC/nc/1.85.0/nc.js"],
                        stable: ["AWSC/nc/1.85.0/nc.js"],
                        ratio: 10000,
                        greyConfig: {},
                        stableConfig: {}
                    }
                },
                o = [{
                    name: "umidPCModule",
                    features: ["umpc", "um", "umh5"],
                    depends: [],
                    sync: !1
                }, {
                    name: "uabModule",
                    features: ["uab"],
                    depends: [],
                    sync: !1
                }, {
                    name: "fyModule",
                    features: ["fy"],
                    depends: [],
                    sync: !1
                }, {
                    name: "nsModule",
                    features: ["ns"],
                    depends: [],
                    sync: !1
                }, {
                    name: "etModule",
                    features: ["et"],
                    depends: [],
                    sync: !1
                }, {
                    name: "ncModule",
                    features: ["nc", "nvc", "ic"],
                    depends: ["fy"],
                    sync: !1
                }],
                r = navigator.userAgent,
                a = r.match(/Chrome\/(\d*)/);
            a && (a = +a[1]);
            var i = r.match(/Edge\/([\d]*)/),
                s = r.match(/Safari\/([\d]*)/),
                u = r.match(/Firefox\/([\d]*)/),
                c = r.match(/MSIE|Trident/);

            function d() {
                var e = "function%20javaEnabled%28%29%20%7B%20%5Bnative%20code%5D%20%7D";
                return "WebkitAppearance" in document.documentElement.style && escape(navigator.javaEnabled.toString()) === e
            }

            function l(t, n) {
                var o = "AWSC_SPECIFY_" + t.toUpperCase() + "_ADDRESSES";
                if (e[o]) return e[o];
                var r = {
                    normalAddresses: [],
                    brAddresses: []
                };
                for (var l in g_moduleConfig)
                    if (g_moduleConfig.hasOwnProperty(l) && l === t) {
                        var f = g_moduleConfig[l],
                            m = Math.ceil(1e4 * Math.random()) <= f.ratio;
                        r.normalAddresses = m ? f.grey.slice() : f.stable.slice(), f.stableBr && f.greyBr && (r.brAddresses = m ? f.greyBr.slice() : f.stableBr.slice()), "etModule" === t && (i || a ? (r.normalAddresses.pop(), r.brAddresses.pop()) : s || u || c ? (r.normalAddresses.shift(), r.brAddresses.shift()) : d() ? (r.normalAddresses.pop(), r.brAddresses.pop()) : (r.normalAddresses.shift(), r.brAddresses.shift()));
                        for (var p = 0; p < r.normalAddresses.length; p++) {
                            var g = n ? "https://" + n + "/" : A;
                            "https://assets.alicdn.com/" === g && (g += "g/"), r.normalAddresses[p] = g + r.normalAddresses[p], r.brAddresses[p] && (r.brAddresses[p] = g + r.brAddresses[p])
                        }
                        return r
                    }
            }
            var f = [],
                m = "loading",
                p = "loaded",
                g = "timeout",
                h = "unexpected",
                v = "no such feature",
                b = new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),
                A = y(_());

            function y(e) {
                var t = "https://g.alicdn.com/";
                if (!e) return t;
                if (/aliexpress/.test(location.href)) return "https://aeis.alicdn.com/";
                var n = b.exec(e);
                return n ? "https://" + n[3] + (n[4] ? ":" + n[4] : "") + "/" : t
            }

            function _() {
                for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
                    var n = e[t],
                        o = n.hasAttribute ? n.src : n.getAttribute("src", 4);
                    if (/\/awsc\.js/.test(o)) return o
                }
            }

            function w(e) {
                for (var t = void 0, n = 0; n < o.length; n++) {
                    for (var r = o[n], a = 0; a < r.features.length; a++)
                        if (r.features[a] === e) {
                            t = r;
                            break
                        }
                    if (t) break
                }
                return t
            }

            function T(e) {
                for (var t = 0; t < f.length; t++) {
                    var n = f[t];
                    if (n.name === e) return n
                }
            }

            function C(e) {
                for (var t = void 0, n = 0; n < o.length; n++) {
                    var r = o[n];
                    if (r.name === e) {
                        t = r;
                        break
                    }
                    if (t) break
                }
                return t
            }

            function k(e, n, o) {
                if (o)
                    for (var r = 0; r < e.normalAddresses.length; r++) {
                        var a = e.normalAddresses[r];
                        t.write("<script src=" + a + "><\/script>")
                    } else {
                        function i(e, o, r) {
                            for (var a = 0; a < e.length; a++) {
                                var i = e[a],
                                    s = t.createElement("script");
                                s.async = !1, s.src = i, s.id = n, s.onerror = o || function() {}, s.onload = r || function() {};
                                var u = t.getElementsByTagName("script")[0];
                                u && u.parentNode ? u.parentNode.insertBefore(s, u) : (u = t.body || t.head) && u.appendChild(s)
                            }
                        }
                        i(e.normalAddresses)
                    }
            }

            function S(t, n, o) {
                var r = "https://acjs.aliyun.com/error?v=" + t + "&e=" + encodeURIComponent(n) + "&stack=" + encodeURIComponent(o),
                    a = new Image,
                    i = "_awsc_img_" + Math.floor(1e6 * Math.random());
                e[i] = a, a.onload = a.onerror = function() {
                    try {
                        delete e[i]
                    } catch (t) {
                        e[i] = null
                    }
                }, a.src = r
            }

            function j(e, t) {
                Math.random() < 1e-4 && S("awsc_state", "feature=" + e.name + "&state=" + e.state + "&href=" + encodeURIComponent(location.href));
                for (var n = void 0; n = e.callbacks.shift();) try {
                    if ("function" == typeof n) n(e.state, e.exportObj);
                    else if ("object" == typeof n) {
                        var o = e.exportObj;
                        o && "function" == typeof o.init && o.init(n)
                    }
                } catch (n) {
                    if (t) throw n;
                    S(e.name, n.message, n.stack)
                }
            }

            function W(e, t, n, o) {
                var r = w(e);
                if (!r) return "function" == typeof t && t("no such feature"), void 0;
                var a = n && n.cdn,
                    i = n && n.sync,
                    s = n && n.timeout || 5e3;
                if (0 !== r.depends.length)
                    for (var u = 0; u < r.depends.length; u++) {
                        var c = r.depends[u];
                        n && (delete n.sync, delete n.timeout, delete n.cdn), x(c, void 0, n)
                    }
                var d = o || {};
                d.module = r, d.name = e, d.state = "loading", d.callbacks = d.callbacks || [], d.options = n, t && d.callbacks.push(t), d.timeoutTimer = setTimeout((function() {
                    d.state = "timeout", j(d, n && n.throwExceptionInCallback)
                }), s), o || f.push(d);
                var m = r.sync,
                    p;
                i && (m = i), k(l(r.name, a), "AWSC_" + r.name, m)
            }

            function x(e, t, n) {
                var o = T(e);
                if (o)
                    if ("timeout" === o.state) W(e, t, n, o);
                    else if ("loaded" === o.state) {
                    if ("function" == typeof t) t(o.state, o.exportObj);
                    else if ("object" == typeof t) {
                        var r = o.exportObj;
                        r && "function" == typeof r.init && r.init(t)
                    }
                } else "loading" === o.state ? t && o.callbacks.push(t) : void 0;
                else W(e, t, n)
            }

            function M(e, t, n) {
                var o = !1;
                try {
                    var r = C(e);
                    r, r.moduleLoadStatus = "loaded";
                    for (var a = void 0, i = 0; i < f.length; i++) {
                        var s = f[i];
                        s.module === r && s.name === t && (o = s.options && s.options.throwExceptionInCallback, a = s, clearTimeout(a.timeoutTimer), delete a.timeoutTimer, a.exportObj = n, ("loading" === s.state || "timeout" === s.state) && (a.state = "loaded", setTimeout((function() {
                            j(a, o)
                        }), 0)))
                    }
                    a || ((a = {}).module = r, a.name = t, a.state = "loaded", a.exportObj = n, a.callbacks = [], f.push(a))
                } catch (e) {
                    if (o) throw e;
                    S("awsc_error", e.message, e.stack)
                }
            }

            function E(e) {
                function t(t, n, o, r) {
                    var a = location.protocol + "//" + location.host + location.pathname,
                        i = new e.AWSCFY;
                    e._umopt_npfp = 0;
                    var s = !1;
                    i.umidToken = "defaultToken1_um_not_loaded@@" + a + "@@" + (new Date).getTime(), e.AWSC.use("um", (function(e, t) {
                        "loaded" === e ? (i.umidToken = "defaultToken3_init_callback_not_called@@" + a + "@@" + (new Date).getTime(), t.init(n, (function(e, t) {
                            i.umidToken = "success" === e ? t.tn : "defaultToken4_init_failed with " + e + "@@" + a + "@@" + (new Date).getTime(), s = !0, d()
                        }))) : (i.umidToken = "defaultToken2_load_failed with " + e + "@@" + a + "@@" + (new Date).getTime(), s = !0, d())
                    }));
                    var u = !1;
                    if (i.getUA = function() {
                            return "defaultUA1_uab_not_loaded@@" + a + "@@" + (new Date).getTime()
                        }, e.AWSC.use("uab", (function(e, t) {
                            u = !0, "loaded" === e ? (i.uabModule = t, i.uabConfig = o, i.getUA = function() {
                                return this.uabModule.getUA(this.uabConfig)
                            }) : i.getUA = function() {
                                return "defaultUA2_load_failed with " + e + "@@" + a + "@@" + (new Date).getTime()
                            }, d()
                        })), null != t) var c = e.setTimeout((function() {
                        d(!0)
                    }), r || 2e3);

                    function d(n) {
                        null != t && (u && s || n) && (t(i), e.clearTimeout(c))
                    }
                    return null == t ? i : void 0
                }
                e.AWSCFY = function() {}, e.AWSC.configFY = function(e, n, o, r) {
                    return t(e, n, o, r)
                }, e.AWSC.configFYSync = function(e, n) {
                    return t(null, e, n)
                }
            }

            function U(e) {
                var t = function() {};

                function n(n, o, r) {
                    var a = (location.protocol + "//" + location.host + location.pathname).substr(0, 128),
                        i = new t;
                    if (r = r || 2e3, "function" == typeof n) var s = e.setTimeout((function() {
                        u()
                    }), r);

                    function u() {
                        "function" == typeof n && (n(i), e.clearTimeout(s))
                    }
                    return i.getFYToken = i.getUidToken = function() {
                        return "defaultFY1_fyjs_not_loaded@@" + a + "@@" + (new Date).getTime()
                    }, e.fyglobalopt = o, e.AWSC.use("fy", (function(e, t) {
                        "loaded" === e ? (i.getFYToken = i.getUidToken = function() {
                            return "defaultFY3_fyjs_not_initialized@@" + a + "@@" + (new Date).getTime()
                        }, i.fyObj = t, t.init(o, (function(e) {
                            i.getFYToken = function() {
                                return this.fyObj.getFYToken(o)
                            }, i.getUidToken = function() {
                                return this.fyObj.getUidToken(o)
                            }, u()
                        }))) : (i.getFYToken = i.getUidToken = function() {
                            return "defaultFY2_load_failed with " + e + "@@" + a + "@@" + (new Date).getTime()
                        }, u())
                    })), "function" == typeof n ? void 0 : i
                }
                e.AWSC.configFYEx = function(e, t, o) {
                    return n(e, t, o)
                }, e.AWSC.configFYSyncEx = function(e) {
                    return n(null, e)
                }
            }

            function F(e) {
                var t = g_moduleConfig.etModule,
                    n, o = Math.ceil(1e4 * Math.random()) <= t.ratio ? t.greyConfig.whitelist : t.stableConfig.whitelist,
                    r;
                new RegExp(("^" + o.join("$|^") + "$").replace(/\*/g, ".*")).test(location.host + location.pathname) && (window.etrprtrt = .01, e.AWSC.use("et"))
            }

            function Y(e) {
                e.AWSC || (e.AWSC = {}, e.AWSC.use = x, e.AWSCInner = {}, e.AWSCInner.register = M, E(e), U(e), F(e))
            }
            Y(e)
        }(window, document), s.AWSC.use("uab", (function(e, t) {
            "loaded" === e && (l = t, f.resolve())
        }), {
            cdn: r.url.uac
        }), s.AWSC.use("um", (function(e, t) {
            "loaded" === e && m.resolve()
        }), {
            cdn: r.url.umid
        });
        var h = o.defer(),
            v = null,
            b = o.defer();

        function A() {
            var e = s.UA_Opt || c;
            return e.LogVal && s[e.LogVal] || ""
        }
        g.then((function() {
            void 0;
            var e = document.getElementById("_umfp");
            v = umx.init({
                serviceLocation: r.env,
                appName: "ctl",
                containers: {
                    flash: e,
                    dcp: e
                },
                callback: function() {
                    void 0, b.resolve()
                }
            })
        })), i((function() {
            var e = g;

            function t() {
                l && h.resolve()
            }
            "lazada" === r.env && (e = b.promise), o.all([p, e]).then((function() {
                t();
                var e = setInterval(t, 50);
                h.promise.always((function() {
                    clearInterval(e)
                }))
            }), (function() {
                h.reject()
            })), setTimeout((function() {
                s.umx && l || h.reject()
            }), 3e3)
        }))
    }, {
        "./Promise": 1,
        "./config": 2,
        "./domready": 3,
        "./util": 5
    }],
    5: [function(e, t, n) {
        t.exports = {
            extend: function(e) {
                for (var t = [].slice.call(arguments), n = t.length, o, r, a = 1; a < n; a++)
                    for (r in o = t[a]) o.hasOwnProperty(r) && ("Flag" === r && e[r] ? e[r] = e[r] | o[r] : e[r] = o[r]);
                return e
            }
        }
    }, {}]
}, {}, [4]);